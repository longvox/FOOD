const sliderMain = document.getElementById("slider-main");
let indexValue = 1;
showImg(indexValue);
function btmSlider(e) {
  showImg((indexValue = e));
}
function showImg(e) {
  var i;
  const items = document.querySelectorAll(".slider-item");
  if (e > items.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = items.length;

    for (i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    items[i].style.display = "block";
  }
}
