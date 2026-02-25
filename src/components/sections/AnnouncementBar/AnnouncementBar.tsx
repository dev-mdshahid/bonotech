import type { AnnouncementBarProps } from './AnnouncementBar.types'

export function AnnouncementBar({
    message = 'Transforming industries one idea at a time',
}: AnnouncementBarProps) {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[450px] bg-content-primary rounded-b-[28px] flex items-center justify-center py-[10px] px-6">
                <span className="inline-flex items-center gap-2 text-label-lg text-content-white">
                    <span
                        className="w-[6px] h-[6px] rounded-full bg-status-active inline-block flex-shrink-0"
                        aria-hidden="true"
                    />
                    {message}
                </span>
            </div>
        </div>
    )
}
