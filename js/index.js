//плавный переход по якорным ссылкам
const navLinks = document.querySelectorAll('a[href^="#"]');
for (let link of navLinks) {
   const href = link.getAttribute('href')
 //  console.log(href)
   link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href')
      const ancor = document.querySelector(href)
      ancor.scrollIntoView({
         behavior: 'smooth',
            block: 'start'
      })
   })
}


//бэкграунд у шапки при изменении высоты блока
window.addEventListener('resize', (e) => {
const heightScreen = document.documentElement.clientHeight;
const header = document.querySelector('.header');

if (heightScreen <= 506) {
   header.style.backgroundColor = '#ED4C5C';
} else if (heightScreen > 506) {
   header.style.backgroundColor = 'transparent';
}
})

//открытие бургера
const burgerBtn = document.querySelector('.header__right')
const burgerNav  = document.querySelector('.header__nav-mobile')
burgerBtn.addEventListener('click', () => {
   document.querySelector('.burger').classList.toggle('burger--active')
   burgerNav.classList.toggle('active')
})




