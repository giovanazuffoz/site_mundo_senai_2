const slides = document.querySelectorAll('.slide');
const pontos = document.querySelectorAll('.ponto');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carrosselSection = document.querySelector('.carrossel-section');


let indiceAtual = 0;
let intervalo;


function mostrarSlide(index) {
    indiceAtual = (index + slides.length) % slides.length;


    slides.forEach((slide, i) => {
        slide.classList.toggle('ativo', i === indiceAtual);
    });


    pontos.forEach((ponto, i) => {
        ponto.classList.toggle('ativo', i === indiceAtual);
    });
}


function proximoSlide() {
    mostrarSlide(indiceAtual + 1);
}


function anteriorSlide() {
    mostrarSlide(indiceAtual - 1);
}


function iniciarAutoPlay() {
    clearInterval(intervalo);
    intervalo = setInterval(proximoSlide, 4000);
}


prevBtn.addEventListener('click', () => {
    anteriorSlide();
    iniciarAutoPlay();
});


nextBtn.addEventListener('click', () => {
    proximoSlide();
    iniciarAutoPlay();
});


pontos.forEach((ponto, index) => {
    ponto.addEventListener('click', () => {
        mostrarSlide(index);
        iniciarAutoPlay();
    });
});


mostrarSlide(0);
iniciarAutoPlay();




const imagens = document.querySelectorAll('.slide img');
const btnFechar = document.querySelector('.fechar-fullscreen');


imagens.forEach(img => {
    img.addEventListener('click', () => {
        carrosselSection.classList.add('fullscreen-mode');
        clearInterval(intervalo);
    });
});




if (btnFechar) {
    btnFechar.addEventListener('click', () => {
        carrosselSection.classList.remove('fullscreen-mode');
        iniciarAutoPlay();
    });
}




document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && carrosselSection.classList.contains('fullscreen-mode')) {
        carrosselSection.classList.remove('fullscreen-mode');
        iniciarAutoPlay();
    }
});
