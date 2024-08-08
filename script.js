//botoes
let prevButton = document.querySelector('#prev')
let nextButton = document.querySelector('#next') 
//section
let container = document.querySelector('.container')
//itens
let itens = container.querySelectorAll('.list .item')

let indicator = document.querySelector('.indicators')

let point = indicator.querySelectorAll('ul li')


//item - 0, item - 1, item - 2 ...

let active = 0
let firstPosition = 0
let lastPosition = itens.length - 1


function setSlider(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

        //alterando os dots
        let DotsOld = indicator.querySelector('ul li.active')
        DotsOld.classList.remove('active')
        point[active].classList.add('active')
    
    indicator.querySelector('.number').textContent = '0' + (active + 1)
}


prevButton.addEventListener('click', ()=>{
    setSlider()

    active = active - 1 < firstPosition ? lastPosition : active - 1 //se ele tiver no final ele volta para zero se não ele adiciona +1
    itens[active].classList.add('active')

})

nextButton.addEventListener('click', ()=>{
    setSlider()

    active = active + 1 > lastPosition ? 0 : active + 1 //se ele tiver no final ele volta para zero se não ele adiciona +1
    itens[active].classList.add('active')

})