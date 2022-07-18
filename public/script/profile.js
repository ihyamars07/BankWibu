async function createCardProfile() {
  let allbox = document.getElementById('all-box-profile')
  let dataProfile = await fetch('data/profile.json').then((data) => {
    return data.json()
  })

  console.log(dataProfile)

  for (let i = 0; i < dataProfile.length; i++) {
    let card = document.createElement('div')
    card.classList.add('box-card')
    card.innerHTML = `
        <img src="${dataProfile[i].image}" alt="">
        <h4>Nama: ${dataProfile[i].name}</h4>
        <p>NIM: ${dataProfile[i].nim}</p>
        <p>Jobdesk: ${dataProfile[i].job}</p>
        `
    allbox.appendChild(card)
  }
}

createCardProfile()
