async function createCardManga() {
  let allbox = document.getElementById('all-box-manga')
  let dataManga = await fetch('data/top-manga.json').then((data) => {
    return data.json()
  })

  console.log(dataManga)

  for (let i = 0; i < dataManga.length; i++) {
    let card = document.createElement('div')
    card.classList.add('card-manga')
    card.innerHTML = `
      <table>
      <tr>
          <td>
          <img src="${dataManga[i].image}" alt="img">
              <div class="middle"></div>
              <div class="kiri">
                  <p>${i + 1}</p>
              </div>
          </td>
          <td class="desc">
              <h2>${dataManga[i].title}</h2>
              <p>Scored <b>${dataManga[i].score}</b></p>
              <p>Date: ${dataManga[i].date}</p>
              <p>Author: ${dataManga[i].author}</p>
          </td>
      </tr>
      </table>
      `
    allbox.appendChild(card)
  }
}

async function createContentLeft() {
  let allbox = document.getElementById('content-left')
  let dataAnime = await fetch('data/data.json').then((data) => {
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
createCardManga()

