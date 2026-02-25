import { useState, useCallback, useRef, useEffect } from 'react'

const CELL_SIZE = 80

export function HeroGrid() {
    const gridRef = useRef<HTMLDivElement>(null)
    const [hoveredCell, setHoveredCell] = useState<string | null>(null)
    const [gridDimensions, setGridDimensions] = useState({ cols: 0, rows: 0 })

    useEffect(() => {
        const updateGrid = () => {
            if (!gridRef.current) return
            const parent = gridRef.current.parentElement
            if (!parent) return
            const { width, height } = parent.getBoundingClientRect()
            setGridDimensions({
                cols: Math.ceil(width / CELL_SIZE) + 1,
                rows: Math.ceil(height / CELL_SIZE) + 1,
            })
        }

        updateGrid()
        window.addEventListener('resize', updateGrid)
        return () => window.removeEventListener('resize', updateGrid)
    }, [])

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!gridRef.current) return
            const rect = gridRef.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const col = Math.floor(x / CELL_SIZE)
            const row = Math.floor(y / CELL_SIZE)
            setHoveredCell(`${col}-${row}`)
        },
        [],
    )

    const handleMouseLeave = useCallback(() => {
        setHoveredCell(null)
    }, [])

    const cells = []
    for (let row = 0; row < gridDimensions.rows; row++) {
        for (let col = 0; col < gridDimensions.cols; col++) {
            const key = `${col}-${row}`
            const isHovered = hoveredCell === key
            cells.push(
                <div
                    key={key}
                    className="transition-colors duration-300 ease-out"
                    style={{
                        width: `${CELL_SIZE}px`,
                        height: `${CELL_SIZE}px`,
                        borderRight: '1px solid rgba(220, 221, 224, 0.5)',
                        borderBottom: '1px solid rgba(220, 221, 224, 0.5)',
                        backgroundColor: isHovered
                            ? 'rgba(130, 105, 207, 0.06)'
                            : 'transparent',
                    }}
                />,
            )
        }
    }

    return (
        <div
            ref={gridRef}
            className="absolute inset-0 overflow-hidden z-10"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            aria-hidden="true"
        >
            <div
                className="flex flex-wrap"
                style={{
                    width: `${gridDimensions.cols * CELL_SIZE}px`,
                }}
            >
                {cells}
            </div>
        </div>
    )
}
