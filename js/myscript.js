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

//info3//
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
//info3 closed//


//info4//
function closeInfo(info4) {
  if (info4 == null) return
  info4.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info4 = document.querySelector(button.dataset.infoTarget)
    openInfo(info4)
  })
})

popup_overlay.addEventListener('click', () => {
  const info4 = document.querySelectorAll('.info4.active')
  info4.forEach(info4 => {
    closeInfo(info4)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info4 = button.closest('.info4')
    closeInfo(info4)
  })
})
//info4 closed//

//info5//
function closeInfo(info5) {
  if (info5 == null) return
  info5.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info5 = document.querySelector(button.dataset.infoTarget)
    openInfo(info5)
  })
})

popup_overlay.addEventListener('click', () => {
  const info5 = document.querySelectorAll('.info5.active')
  info5.forEach(info5 => {
    closeInfo(info5)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info5 = button.closest('.info5')
    closeInfo(info5)
  })
})
//info5 closed//


//info6//
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
//info6 closed//

//info7//
function openInfo(info7) {
  if (info7 == null) return
  info7.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info7) {
  if (info7 == null) return
  info7.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info7 = document.querySelector(button.dataset.infoTarget)
    openInfo(info7)
  })
})

popup_overlay.addEventListener('click', () => {
  const info7 = document.querySelectorAll('.info7.active')
  info7.forEach(info7 => {
    closeInfo(info7)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info7 = button.closest('.info7')
    closeInfo(info7)
  })
})
//info7 closed//

//info8//
function openInfo(info8) {
  if (info8 == null) return
  info8.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info8) {
  if (info8 == null) return
  info8.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info8 = document.querySelector(button.dataset.infoTarget)
    openInfo(info8)
  })
})

popup_overlay.addEventListener('click', () => {
  const info8 = document.querySelectorAll('.info8.active')
  info8.forEach(info8 => {
    closeInfo(info8)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info8 = button.closest('.info8')
    closeInfo(info8)
  })
})
//info8 closed//

//info9//
function openInfo(info9) {
  if (info9 == null) return
  info9.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info9) {
  if (info9 == null) return
  info9.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info9 = document.querySelector(button.dataset.infoTarget)
    openInfo(info9)
  })
})

popup_overlay.addEventListener('click', () => {
  const info9 = document.querySelectorAll('.info9.active')
  info9.forEach(info9 => {
    closeInfo(info9)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info9 = button.closest('.info9')
    closeInfo(info9)
  })
})
//info9 closed//


console.log("hello"+1);

function show_building(x) {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info"+x).style.display = "block";
}

function hide_building(x) {
  document.getElementById("info__layer").style.display = "block";
  document.getElementById("building_info"+x).style.display = "none";
}
