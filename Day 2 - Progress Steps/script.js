const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const panels = document.querySelectorAll('.panel')


let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    } 

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    } 

    update()
})

function update() {
    panels.forEach((panel, idx) => {
        if(idx < currentActive) {
            panel.classList.add('evo')
        } else {
            panel.classList.remove('evo')
        }
    })

    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

    })

    const actives = document.querySelectorAll('.active')

    /*
    Both length properties must be decremented by 1 to ensure proper filling on the progress bar.
    If we obmitted this, when we reach 2 elements with the active class, thus the bar would be at 50%, instead of 33%.

    (actives.length = 2, circles.length = 4) => 2/4 = 50%
    */
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"

    if(currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }


}