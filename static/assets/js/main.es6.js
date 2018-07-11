window.onload = function() {
    const bars = document.querySelectorAll('.level-bar-inner')
    for (let i = 0; i < bars.length; i++) {
        const ele = bars[i]
        ele.style.width = 0
        const width = ele.getAttribute('data-level')
        ele.style.transition = 'width 0.8s'
        setTimeout(() => {
            ele.style.width = width
        }, 0)
    }
}
