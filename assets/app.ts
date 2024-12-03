(async () => {
    let modules = {
        'simple-image-slider': await import("../simple-image-slider/simple-image-slider"),
        'image-with-text': await import("../image-with-text/image-with-text"),
        'image-text-overlay': await import("../image-text-overlay/image-text-overlay"),
        'text-columns': await import("../text-columns/text-columns")
    };

    for (const [tag, module] of Object.entries(modules)) {
        const {
            method,
            template,
            styles
        } = module

        const element = <NodeListOf<HTMLElement>>document.querySelectorAll(tag.toUpperCase())
        element.forEach(element => {
            element.innerHTML = template
            method(element.dataset)
        })
    }
})()