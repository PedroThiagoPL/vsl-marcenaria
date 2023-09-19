const openMenu = document.querySelector('.menu-mobile')

//Para fechar o menu ao clique em qualquer lugar
openMenu.addEventListener('click', animarMenu)

function animarMenu() {

    const btn = document.getElementById('btn-menu')

    openMenu.classList.toggle('abrir')
    btn.classList.toggle('ativar') //Animar o botão mobile fazendo o X ao
}