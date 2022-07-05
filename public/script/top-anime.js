async function createCardAnime() {
  let allbox = document.getElementById('all-box-anime')
  let dataAnime = await fetch('data/top-anime.json').then((data) => {
    return data.json()
  })

  for (let i = 0; i < dataAnime.length; i++) {
    let card = document.createElement('div')
    card.classList.add('card-anime')
    card.innerHTML = `
      <table>
      <tr style="text-align: center">
          <td>
              <img src="${dataAnime[i].image}" alt="img" width="160px" height="230px">
              <div class="kiri">
                  <p>${dataAnime[i].id}</p>
              </div>
          </td>
          <td class="desc">
              <h2 style="font-size: 16px;">${dataAnime[i].title}</h2>
              <p>Scored <b>${dataAnime[i].score}</b></p>
              <p>${dataAnime[i].studio}</p>
              <p>${dataAnime[i].tipe} (${dataAnime[i].episode} eps)</p>
              <p>${dataAnime[i].date}</p>
          </td>
      </tr>
      </table>  
        `
    allbox.appendChild(card)
  }
}

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

createCardAnime()
createContentLeft()
