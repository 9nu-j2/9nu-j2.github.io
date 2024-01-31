import { MutableRefObject, useState, useRef, useMemo, useEffect } from 'react'

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


    const observer = typeof window !== `undefined` ? new IntersectionObserver(
        (entries, observer) => {
            if (!entries[0].isIntersecting) return;
            setCount(value => value + 1);
            observer.disconnect();
        },
    ) : null


    useEffect(() => setCount(1), [selectedCategory])

    useEffect(() => {
        if (
            NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
            containerRef.current === null ||
            containerRef.current.children.length === 0
        ) return;

        observer.observe(
            containerRef.current.children[containerRef.current.children.length - 1],
        )
    }, [count, selectedCategory])

    return { containerRef, postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE), }
}

export default useInfiniteScroll