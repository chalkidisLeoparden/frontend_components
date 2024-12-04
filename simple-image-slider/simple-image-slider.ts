import template from './simple-image-slider.html'
import styles from './simple-image-slider.scss'

class SimpleImageSlider {
    readonly activeSelector: string = 'active'
    slider: HTMLDivElement | null
    slides: HTMLDivElement | undefined
    amountOfSlides: number = 0

    constructor() {
        this.slider = document.querySelector('.simple-image-slider')

        if (this.slider === null) {
            return
        }

        this.slider = this.slider as HTMLDivElement
        this.slides = this.slider!.querySelector('.image-slides') as HTMLDivElement
        this.amountOfSlides = this.slider.children.length!

        this.checkButtonClicks()
    }

    private checkButtonClicks() {
        const beforeButton: HTMLButtonElement = this.slider!.querySelector('.button-before')!
        beforeButton.addEventListener('click', this.slideBackwards.bind(this))

        const afterButton: HTMLButtonElement = this.slider!.querySelector('.button-after')!
        afterButton.addEventListener('click', this.slideForwards.bind(this))
    }

    private slideBackwards() {
        const activeSlide: HTMLDivElement = this.slides!.querySelector(`.${this.activeSelector}`)!
        activeSlide!.classList.remove(this.activeSelector)

        this.slides!.appendChild(activeSlide)
        this.slides!.children[0].classList.add(this.activeSelector)
    }

    private slideForwards() {
        const activeSlide: HTMLDivElement = this.slides!.querySelector(`.${this.activeSelector}`)!
        activeSlide!.classList.remove(this.activeSelector)

        this.slides!.prepend(this.slides!.children[this.slides!.children.length - 1])
        this.slides!.children[0].classList.add(this.activeSelector)
    }
}

function handleButtonClicks(...args: any []) {
    new SimpleImageSlider()
}

export {
    handleButtonClicks as method,
    styles,
    template
}