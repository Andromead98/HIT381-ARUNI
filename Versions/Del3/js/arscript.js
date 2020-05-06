function hasGetUserMedia() {
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}

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