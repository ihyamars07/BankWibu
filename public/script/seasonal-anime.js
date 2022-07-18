
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  function toggleNavLeft() {
    let left = document.getElementById('left')
    let mainLeft = document.getElementById('mainleft')
    left.style.width = left.style.width === '20%' ? '0' : '20%'
    mainLeft.style.marginLeft = mainLeft.style.marginLeft === '20%' ? '0' : '20%'
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
  