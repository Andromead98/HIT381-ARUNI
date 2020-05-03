const openInfoButtons = document.querySelectorAll('[data-info-target]')
const closeInfoButtons = document.querySelectorAll('[info-close-button]')
const popup_overlay = document.getElementById('popup_overlay')
// info1//
function openInfo(info1) {
  if (info1 == null) return
  info1.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info1) {
  if (info1 == null) return
  info1.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info1 = document.querySelector(button.dataset.infoTarget)
    openInfo(info1)
  })
})

popup_overlay.addEventListener('click', () => {
  const info1 = document.querySelectorAll('.info1.active')
  info1.forEach(info1 => {
    closeInfo(info1)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info1 = button.closest('.info1')
    closeInfo(info1)
  })
})

//info1 closed//

//info2//
function openInfo(info2) {
  if (info2 == null) return
  info2.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info2) {
  if (info2 == null) return
  info1.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info2 = document.querySelector(button.dataset.infoTarget)
    openInfo(info2)
  })
})

popup_overlay.addEventListener('click', () => {
  const info2 = document.querySelectorAll('.info2.active')
  info2.forEach(info2 => {
    closeInfo(info2)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info2 = button.closest('.info2')
    closeInfo(info2)
  })
})

//info2 closed//

function openInfo(info3) {
  if (info3 == null) return
  info3.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info3) {
  if (info3 == null) return
  info3.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info3 = document.querySelector(button.dataset.infoTarget)
    openInfo(info3)
  })
})

popup_overlay.addEventListener('click', () => {
  const info3 = document.querySelectorAll('.info3.active')
  info3.forEach(info3 => {
    closeInfo(info3)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info3 = button.closest('.info3')
    closeInfo(info3)
  })
})


function openInfo(info6) {
  if (info6 == null) return
  info6.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info6) {
  if (info6 == null) return
  info6.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info6 = document.querySelector(button.dataset.infoTarget)
    openInfo(info6)
  })
})

popup_overlay.addEventListener('click', () => {
  const info6 = document.querySelectorAll('.info6.active')
  info6.forEach(info6 => {
    closeInfo(info6)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info6 = button.closest('.info6')
    closeInfo(info6)
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
