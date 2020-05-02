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


function show_building1() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info1").style.display = "block";
}


function show_building2() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info2").style.display = "block";
}

function show_building3() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info3").style.display = "block";
}

function show_building4() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info4").style.display = "block";
}
function show_building5() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info5").style.display = "block";
}
function show_building6() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info6").style.display = "block";
}
function show_building7() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info7").style.display = "block";
}
function show_building8() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info8").style.display = "block";
}
function show_building9() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info9").style.display = "block";
}
function show_building10() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info10").style.display = "block";
}
function show_building11() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info11").style.display = "block";
}
function show_building12() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info12").style.display = "block";
}
function show_building13() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info13").style.display = "block";
}
function show_building14() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info14").style.display = "block";
}
function show_building15() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info15").style.display = "block";
}
function show_building16() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info16").style.display = "block";
}
function show_building17() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info17").style.display = "block";
}
function show_building18() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info18").style.display = "block";
}
function show_building19() {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info19").style.display = "block";
}
