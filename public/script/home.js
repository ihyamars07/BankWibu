createContentSlide()
let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('dot')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}

async function createContentSlide() {
    let allbox = document.getElementById('slideshow-container')
    let dataNews = await fetch('data/data.json').then((data) => {
      return data.json()
    })

    console.log(dataNews)
  
    for (let i = 0; i < 4; i++) {
      let card = document.createElement('div')
      card.classList.add('mySlides')
      card.classList.add('fade')
      card.innerHTML = `
      <div class="numbertext">${dataNews[i].id} / 4</div>
      <img src="${dataNews[i].image}" style="width:100%">
      <div class="text">${dataNews[i].title}</div>    
      `
      allbox.appendChild(card)
    }
  }
  
