// Get all buttons on cdu services
var buttons = document.querySelectorAll(".AR-view");

// Add event of setjourney for each button (Original = https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/)
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.addEventListener('click', setjourney());
  });
});

// make the journey "set" in local storage
function setjourney(evt) {
  sessionStorage.setItem(0, "set");
};
