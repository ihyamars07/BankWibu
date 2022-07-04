function toggleNavLeft() {
  let left = document.getElementById('left')
  let mainLeft = document.getElementById('mainleft')
  left.style.width = left.style.width === '20%' ? '0' : '20%'
  mainLeft.style.marginLeft = mainLeft.style.marginLeft === '20%' ? '0' : '20%'
}
