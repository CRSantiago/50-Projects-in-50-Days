const panels = document.querySelectorAll('.panel') 
// panels becomes NodeList, similar to an array

panels.forEach(panel => {
    panel.addEventListener('click',  () => {
        removeActiveClass()
        panel.classList.add('active')
    })
})

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}