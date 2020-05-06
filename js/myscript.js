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
  info2.classList.remove('active')
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
//info10//
function openInfo(info10) {
  if (info10 == null) return
  info10.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info10) {
  if (info10 == null) return
  info10.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info10 = document.querySelector(button.dataset.infoTarget)
    openInfo(info10)
  })
})

popup_overlay.addEventListener('click', () => {
  const info10 = document.querySelectorAll('.info10.active')
  info10.forEach(info10 => {
    closeInfo(info10)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info10 = button.closest('.info10')
    closeInfo(info10)
  })
})
//info10 closed//
//info11//
function openInfo(info11) {
  if (info11 == null) return
  info11.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info11) {
  if (info11 == null) return
  info11.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info11 = document.querySelector(button.dataset.infoTarget)
    openInfo(info11)
  })
})

popup_overlay.addEventListener('click', () => {
  const info11 = document.querySelectorAll('.info11.active')
  info11.forEach(info11 => {
    closeInfo(info11)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info11 = button.closest('.info11')
    closeInfo(info11)
  })
})
//info11 closed//
//info12//
function openInfo(info12) {
  if (info12 == null) return
  info12.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info12) {
  if (info12 == null) return
  info12.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info12 = document.querySelector(button.dataset.infoTarget)
    openInfo(info12)
  })
})

popup_overlay.addEventListener('click', () => {
  const info12 = document.querySelectorAll('.info12.active')
  info12.forEach(info12 => {
    closeInfo(info12)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info12 = button.closest('.info12')
    closeInfo(info12)
  })
})
//info12 closed//

//info13//
function openInfo(info13) {
  if (info13 == null) return
  info13.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info13) {
  if (info13 == null) return
  info13.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info13 = document.querySelector(button.dataset.infoTarget)
    openInfo(info13)
  })
})

popup_overlay.addEventListener('click', () => {
  const info13 = document.querySelectorAll('.info13.active')
  info13.forEach(info13 => {
    closeInfo(info13)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info13 = button.closest('.info13')
    closeInfo(info13)
  })
})
//info13 closed//
//info14//
function openInfo(info14) {
  if (info14 == null) return
  info14.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info14) {
  if (info14 == null) return
  info14.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info14 = document.querySelector(button.dataset.infoTarget)
    openInfo(info14)
  })
})

popup_overlay.addEventListener('click', () => {
  const info14 = document.querySelectorAll('.info14.active')
  info14.forEach(info14 => {
    closeInfo(info14)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info14 = button.closest('.info14')
    closeInfo(info14)
  })
})
//info14 closed//
//info15//
function openInfo(info15) {
  if (info15 == null) return
  info15.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info15) {
  if (info15 == null) return
  info14.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info15 = document.querySelector(button.dataset.infoTarget)
    openInfo(info15)
  })
})

popup_overlay.addEventListener('click', () => {
  const info15 = document.querySelectorAll('.info15.active')
  info15.forEach(info15 => {
    closeInfo(info15)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info15 = button.closest('.info15')
    closeInfo(info15)
  })
})
//info15 closed//
//info16//
function openInfo(info16) {
  if (info16 == null) return
  info16.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info16) {
  if (info16 == null) return
  info16.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info16 = document.querySelector(button.dataset.infoTarget)
    openInfo(info16)
  })
})

popup_overlay.addEventListener('click', () => {
  const info16 = document.querySelectorAll('.info16.active')
  info16.forEach(info16 => {
    closeInfo(info16)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info16 = button.closest('.info16')
    closeInfo(info16)
  })
})
//info16 closed//

//info17//
function openInfo(info17) {
  if (info17 == null) return
  info17.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info17) {
  if (info17 == null) return
  info17.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info17 = document.querySelector(button.dataset.infoTarget)
    openInfo(info17)
  })
})

popup_overlay.addEventListener('click', () => {
  const info17 = document.querySelectorAll('.info17.active')
  info17.forEach(info17 => {
    closeInfo(info17)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info17 = button.closest('.info17')
    closeInfo(info17)
  })
})
//info17 closed//

//info18//
function openInfo(info18) {
  if (info18 == null) return
  info18.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info18) {
  if (info18 == null) return
  info18.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info18 = document.querySelector(button.dataset.infoTarget)
    openInfo(info18)
  })
})

popup_overlay.addEventListener('click', () => {
  const info18 = document.querySelectorAll('.info18.active')
  info18.forEach(info18 => {
    closeInfo(info18)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info18 = button.closest('.info18')
    closeInfo(info18)
  })
})
//info18 closed//

//info19//
function openInfo(info19) {
  if (info19 == null) return
  info19.classList.add('active')
  popup_overlay.classList.add('active')
}

function closeInfo(info19) {
  if (info19 == null) return
  info19.classList.remove('active')
  popup_overlay.classList.remove('active')
}

openInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info19 = document.querySelector(button.dataset.infoTarget)
    openInfo(info19)
  })
})

popup_overlay.addEventListener('click', () => {
  const info19 = document.querySelectorAll('.info19.active')
  info19.forEach(info19 => {
    closeInfo(info19)
  })
})

closeInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const info19 = button.closest('.info19')
    closeInfo(info19)
  })
})
//info18 closed//


console.log("hello"+1);

function show_building(x) {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("building_info"+x).style.display = "block";
}

function hide_building(x) {
  document.getElementById("info__layer").style.display = "block";
  document.getElementById("building_info"+x).style.display = "none";
}
