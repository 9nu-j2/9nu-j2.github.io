import { MutableRefObject, useState, useRef, useMemo } from 'react'

const NUMBER_OF_ITEMS_PER_PAGE = 2

const useInfiniteScroll = (
    selectedCategory,
    posts,
) => {
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(
        null,
    )
    const [count, setCount] = useState<number>(1)

    const postListByCategory = useMemo(
        () =>
            posts.filter(({ frontmatter: { tags } }) =>
                selectedCategory !== 'All'
                    ? tags.includes(selectedCategory)
                    : true,
            ),
        [selectedCategory],
    )

    return { containerRef, postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE), }
}

export default useInfiniteScroll