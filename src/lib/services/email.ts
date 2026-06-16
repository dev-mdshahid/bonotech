const EMAIL_API_BASE = "https://edtch.pw";
const CONTACT_RECIPIENT = "ekram@edutechs.app";

// ─── Types ───────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface EmailPayload {
  recepient: string[];
  subject: string;
  customHTML: string;
  senderName: string;
  senderEmail: string;
}

interface EmailApiResponse {
  message: string;
}

export class EmailSendError extends Error {
  override cause?: unknown;

  constructor(message: string, cause?: unknown) {
    super(message);
    this.name = "EmailSendError";
    this.cause = cause;
  }
}

// ─── Validation ──────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s\-().]{7,20}$/;

export function validateContactForm(
  data: ContactFormData,
): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }

  const email = data.email.trim();
  if (!email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const phone = data.phone.trim();
  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!PHONE_RE.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

// ─── Email builder ───────────────────────────────────────────────────

function buildContactEmailHtml(data: ContactFormData): string {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `
    <div style="font-family:Arial,sans-serif;color:#262626;max-width:600px;margin:0 auto;">
      <h2 style="color:#8269cf;margin-bottom:24px;">New Contact Form Submission</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:12px 8px;border-bottom:1px solid #eee;font-weight:bold;width:140px;vertical-align:top;">Name</td>
          <td style="padding:12px 8px;border-bottom:1px solid #eee;">${esc(data.name.trim())}</td>
        </tr>
        <tr>
          <td style="padding:12px 8px;border-bottom:1px solid #eee;font-weight:bold;vertical-align:top;">Email</td>
          <td style="padding:12px 8px;border-bottom:1px solid #eee;">${esc(data.email.trim())}</td>
        </tr>
        <tr>
          <td style="padding:12px 8px;border-bottom:1px solid #eee;font-weight:bold;vertical-align:top;">Phone</td>
          <td style="padding:12px 8px;border-bottom:1px solid #eee;">${esc(data.phone.trim())}</td>
        </tr>
        <tr>
          <td style="padding:12px 8px;border-bottom:1px solid #eee;font-weight:bold;vertical-align:top;">Message</td>
          <td style="padding:12px 8px;border-bottom:1px solid #eee;white-space:pre-wrap;">${esc(data.message.trim())}</td>
        </tr>
      </table>
      <p style="margin-top:24px;font-size:13px;color:#999;">
        Sent from the Bonotech contact form.
      </p>
    </div>
  `.trim();
}

// ─── API call ────────────────────────────────────────────────────────

async function postJSON<T>(url: string, body: unknown): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30_000);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new EmailSendError(`Server responded with status ${res.status}`);
    }

    return (await res.json()) as T;
  } catch (err) {
    if (err instanceof EmailSendError) throw err;

    if (err instanceof DOMException && err.name === "AbortError") {
      throw new EmailSendError("Request timed out. Please try again.");
    }

    throw new EmailSendError(
      "Unable to reach the server. Please check your connection and try again.",
      err,
    );
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Sends a contact-form email to the configured recipient via the
 * `send-email-to-anyone-gustav` endpoint.
 *
 * Throws `EmailSendError` on validation failure, network issues, or
 * server-side rejection.
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const errors = validateContactForm(data);
  if (Object.keys(errors).length > 0) {
    const first = Object.values(errors)[0];
    throw new EmailSendError(first);
  }

  const senderEmail = data.email.trim() || "noreply@bonotech.io";

  const payload: EmailPayload = {
    recepient: [CONTACT_RECIPIENT],
    subject: `New Inquiry from ${data.name.trim()} — Bonotech Contact Form`,
    customHTML: buildContactEmailHtml(data),
    senderName: data.name.trim(),
    senderEmail,
  };

  const response = await postJSON<EmailApiResponse>(
    `${EMAIL_API_BASE}/send-email-to-anyone-gustav`,
    payload,
  );

  if (response?.message === "Failed") {
    throw new EmailSendError(
      "The server could not send the email. Please try again later.",
    );
  }
}
