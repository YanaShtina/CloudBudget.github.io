//плавный переход по якорным ссылкам
const navLinks = document.querySelectorAll('a[href^="#"]');
for (let link of navLinks) {
   const href = link.getAttribute('href')
   console.log(href)
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


