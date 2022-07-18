function toggleNavLeft() {
  let left = document.getElementById('left')
  let mainLeft = document.getElementById('mainleft')
  let button = document.getElementById('button-left')
  left.style.width = left.style.width === '20%' ? '0' : '20%'
  mainLeft.style.marginLeft = mainLeft.style.marginLeft === '20%' ? '0' : '20%'
  button.innerHTML =
    button.innerHTML === 'chevron_left' ? 'chevron_right' : 'chevron_left'
}
