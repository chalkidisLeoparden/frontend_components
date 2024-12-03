import template from './simple-image-slider.html'
import styles from './simple-image-slider.scss'
function handleButtonClicks(...args: any []) {
    let slider: HTMLDivElement | null = document.querySelector('.simple-image-slider')

    if (slider === null) {
        return
    }

    let activeSlide: HTMLDivElement = slider.querySelector('.active')!

    let beforeButton: HTMLButtonElement = slider.querySelector('.arrow-before')!

    if (beforeButton !== null) {
        beforeButton.addEventListener('click', () => {
        })
    }

    let afterButton: HTMLButtonElement = slider.querySelector('.after-button')!

    if (afterButton !== null) {
        afterButton.addEventListener('click', () => {
        })
    }
}
export {
    handleButtonClicks as method,
    styles,
    template
}