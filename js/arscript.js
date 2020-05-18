// Remembers the current active mode in session storage
if(sessionStorage.getItem(0) === "unset"){
  console.log("No Journey Set");
  document.getElementById("infopanel").style.display = "block";
  // Show info panel
  console.log(localStorage.getItem(0));
} else if(sessionStorage.getItem(0) === "set"){
  console.log("Journey is set");
  document.getElementById("infopanel").style.display = "none";
  startar();
  // hide info panel, show something else
}

// Checks if user has camera feature
function hasGetUserMedia() {
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}
// Starts showing back camera
function startar(){
  if (hasGetUserMedia()) {
    // Good to go!
    const constraints = {
      video: true
    };
    const video = document.querySelector('video');
        
    //navigator.mediaDevices.getUserMedia(constraints).
      //then((stream) => {video.srcObject = stream});
    
    const hdConstraints = {
      video: {
        width: {
          min: 320,
          max: 1280
        }, 
          height: {
            min: 240,
            max: 720,
          },
          facingMode: {
            ideal: "environment"
          }
        }
    };

  navigator.mediaDevices.getUserMedia(hdConstraints).
      then((stream) => {video.srcObject = stream});
  } else {
    alert('getUserMedia() is not supported by your browser');
  }
}

// Unset journey on click
var arstop = document.getElementById("arstopbtn");
arstop.addEventListener('click', () => {
  arstop.addEventListener('click', setjourney());
});
// make the journey "set" in local storage
function setjourney(evt) {
  sessionStorage.setItem(0, "unset");
};