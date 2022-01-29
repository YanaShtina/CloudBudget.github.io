//плавный переход по якорным ссылкам
const navLinks = document.querySelectorAll('a[href^="#"]');
for (let link of navLinks) {
   const href = link.getAttribute('href')
 //  console.log(href)
   link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href')
      const anchor = document.querySelector(href)
      anchor.scrollIntoView({
         behavior: 'smooth',
            block: 'start'
      })
   })
}


//бэкграунд у шапки при изменении высоты блока
const getBg = (e) => {
   const heightScreen = document.documentElement.clientHeight;
   const header = document.querySelector('.header');
   
   if (heightScreen <= 506) {
      header.style.backgroundColor = '#ED4C5C';
   } else  {
      header.style.backgroundColor = 'transparent';
   }
   }
window.addEventListener('resize', getBg)
window.onload = getBg.bind(this)


//открытие бургера
const burgerBtn = document.querySelector('.header__right')
const burgerNav  = document.querySelector('.header__nav-mobile')
burgerBtn.addEventListener('click', () => {
   document.querySelector('.burger').classList.toggle('burger--active')
   burgerNav.classList.toggle('active')
})


//валидация формы

let inputs = document.querySelectorAll('input[data-rule]')

for (let input of inputs) {
   input.addEventListener('blur', function () {
      let rule = this.dataset.rule
      let value = this.value
      console.log(rule, value)
   })
}



