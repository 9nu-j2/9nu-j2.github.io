import { MutableRefObject, useState, useRef, useMemo } from 'react'

const useInfiniteScroll = (
    selectedCategory,
    posts,
) => {
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(
        null,
    )

    return { containerRef }
}

export default useInfiniteScroll