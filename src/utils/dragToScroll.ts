export default function dragToScroll(element: HTMLDivElement) {
    let isDown: boolean = false;
    let startX: number;
    let scrollLeft: number;

    element.addEventListener("mousedown", (e: MouseEvent) => {
        isDown = true;
        const parentRect: DOMRect = element.getBoundingClientRect()
        startX = e.clientX - parentRect.left
        scrollLeft = element.scrollLeft
    })

    element.addEventListener("mouseup", () => {
        isDown = false;
    })

    element.addEventListener("mouseleave", () => {
        isDown = false;
    })

    element.addEventListener("mousemove", (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault()
        const parentRect: DOMRect = element.getBoundingClientRect()
        const currentMousePosition: number = e.clientX - parentRect.left

        const walk: number = currentMousePosition - startX

        element.scrollLeft = scrollLeft - walk
    })
}