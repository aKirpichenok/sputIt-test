const button = document.querySelector('.collapsible__button')
const content = document.querySelector('.collapsible__content')
const visible = document.querySelector('.collapsible__action--visible')
const hidden = document.querySelector('.collapsible__action--hidden')

let isVisible = true

const showCollapse = [
    { transform: 'translateY(-50px)', offset: 0, color: 'black', paddingBottom: '0px' },
    { transform: 'translateY(0)', offset: 0.3, color: 'black', paddingBottom: '3px' },
    { transform: 'translateY(-20px)', offset: 0.5, color: 'red', paddingBottom: '3px' },
    { transform: 'translateY(0)', offset: 0.7, color: 'black', paddingBottom: '4px' },
    { transform: 'translateY(-10px)', offset: 0.8, color: 'red', paddingBottom: '4px' },
    { transform: 'translateY(0)', offset: 1, color: 'black', paddingBottom: '5px' }
]

const hideCollapse = [
    { transform: 'translateY(0px)', opacity: 0.8 },
    { transform: 'translateY(-100px)', opacity: 0.6 }
]

const hideTime = 1000

const showHide = () => {
    if (!isVisible) {
        setTimeout(() => {
            content.style.display = 'none'
            visible.style.display = 'none'
            hidden.style.display = 'inline'
        }, hideTime)
        content.animate(hideCollapse, hideTime)
        console.log('_visisble')
    } else {
        visible.style.display = 'inline'
        hidden.style.display = 'none'
        content.style.display = 'block'
        content.animate(showCollapse, 800)
        console.log('visible')
    }
    isVisible = !isVisible
}
showHide()
button.addEventListener('click', showHide)


