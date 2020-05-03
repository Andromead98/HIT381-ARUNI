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
console.log("hello"+1);

function show_building(x) {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info"+x).style.display = "block";
}

function hide_building(x) {
  document.getElementById("info__layer").style.display = "block";
  document.getElementById("building_info"+x).style.display = "none";
}
