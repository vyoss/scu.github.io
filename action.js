const navbarNav = document.querySelector('ul')

//hamburger menu click
document.querySelector('#hamburger').onclick  =  () => {
    navbarNav.classList.toggle('active')
}

const menuHamburger= document.querySelector('#hamburger')
document.addEventListener('click', function(e){
    if(!menuHamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})