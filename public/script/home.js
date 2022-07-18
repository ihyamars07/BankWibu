async function createContentSlide() {
  let allbox = document.getElementById('box-article')
  let dataNews = await fetch('data/data.json').then((data) => {
    return data.json()
  })

  console.log(dataNews)

  for (let i = 0; i < 6; i++) {
    let card = document.createElement('div')
    card.classList.add('mySlides')
    card.innerHTML = `
    <div class="numbertext">${dataNews[i].id} / 6</div>
    <img src="${dataNews[i].image}" style="width:100%">   
      `
    allbox.appendChild(card)
  }
}

async function createContent() {
  let allbox = document.getElementById('row')
  let dataNews = await fetch('data/data.json').then((data) => {
    return data.json()
  })

  console.log(dataNews)

  for (let i = 0; i < 6; i++) {
    let card = document.createElement('div')
    card.classList.add('column')
    card.innerHTML = `
    <img class="demo cursor" src="${dataNews[i].image}" style="width:100%" onclick="currentSlide(${dataNews[i].id})" alt="${dataNews[i].title}">
      `
    allbox.appendChild(card)
  }
}

createContent()
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
  let dots = document.getElementsByClassName('demo')
  let captionText = document.getElementById('caption')
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
  captionText.innerHTML = dots[slideIndex - 1].alt
}
