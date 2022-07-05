async function createContentLeft() {
    let allbox = document.getElementById('content-left')
    let dataAnime = await fetch('data/upcoming.json').then((data) => {
      return data.json()
    })
  
    for (let i = 0; i < 6; i++) {
      let card = document.createElement('div')
      card.classList.add('content')
      card.innerHTML = `
      <img src='${dataAnime[i].image}'>
      <div>${dataAnime[i].title}</div>     
          `
      allbox.appendChild(card)
    }
}

createContentLeft()