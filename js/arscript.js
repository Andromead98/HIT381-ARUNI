function hasGetUserMedia() {
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
  console.log("Hello");
} else {
  alert('getUserMedia() is not supported by your browser');
}