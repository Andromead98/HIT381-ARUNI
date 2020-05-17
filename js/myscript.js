
function show_building(x) {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("infopage").style.display = "none";
  document.getElementById("building_info"+x).style.display = "block";

}

function hide_building(x) {
  document.getElementById("info__layer").style.display = "block";
  document.getElementById("infopage").style.display = "block";
  document.getElementById("building_info"+x).style.display = "none";
}
