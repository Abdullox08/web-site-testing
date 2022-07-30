let burgerIcons = document.querySelector('.burger')
let closeIcons = document.querySelector('.close')
let navbarBox = document.querySelector('.navbar-Box')
burgerIcons.addEventListener('click',()=>{
    navbarBox.style.display="flex"
    burgerIcons.style.display ='none'
    closeIcons.style.display='flex'
})
closeIcons.addEventListener('click',()=>{
    burgerIcons.style.display ='flex'
    navbarBox.style.display="none"
    closeIcons.style.display='none'
})