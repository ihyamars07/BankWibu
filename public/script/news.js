async function createCardNews() {
  let allbox = document.getElementById('all-box')
  let dataNews = await fetch('data/data.json').then((data) => {
    return data.json()
  })

  console.log(dataNews)

  for (let i = 0; i < dataNews.length; i++) {
    let card = document.createElement('div')
    card.classList.add('card-article')
    card.innerHTML = `
        <img src="${dataNews[i].image}" alt="" />
        <a href="#">${dataNews[i].category}</a>
        <h4>${dataNews[i].title}</h4>
        <div class="meta-wrap">
          <p>${dataNews[i].author}</p>
          <p>${dataNews[i].date}</p>
        </div>
      `
    allbox.appendChild(card)
  }
}

async function createEvents() {
  let allList = document.getElementById('list-trending')
  let dataNews = await fetch('data/data-events.json').then((data) => {
    return data.json()
  })

  for (let i = 0; i < 9; i++) {
    let card = document.createElement('div')
    card.classList.add('trending')
    card.innerHTML = `
      <img src="${dataNews[i].image}" alt="">
      <h4>${dataNews[i].title}</h4>`

    allList.appendChild(card)
  }
}

createCardNews()
createEvents()
