//fazendo o carrossel infinito

const imgs = document.querySelector('#img')
const img = document.querySelectorAll('#img img')

let idx = 0

function carrossel() {
    idx++

    if(idx > img.length - 1) {
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 380}px)`
}

setInterval(carrossel, 4000)

//