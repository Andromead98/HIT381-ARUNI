const openInfoButtons = document.querySelectorAll('[data-info-target]')
const closeInfoButtons = document.querySelectorAll('[info-close-button]')
const popup_overlay = document.getElementById('popup_overlay')

function openInfo(info) {
  if (info == null) return
  info.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info) {
  if (info == null) return
  info.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info = document.querySelector(button.dataset.infoTarget)
    openInfo(info)
  })
})

popup_overlay.addEventListener('click', () => {
  const infos = document.querySelectorAll('.info.active')
  infos.forEach(info => {
    closeInfo(info)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info = button.closest('.info')
    closeInfo(info)
  })
})
console.log("hello"+1);

function show_building(x) {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info"+x).style.display = "block";
}

function hide_building(x) {
  document.getElementById("info__layer").style.display = "block";
  document.getElementById("building_info"+x).style.display = "none";
}
