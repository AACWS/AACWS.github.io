// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("trigger-modal");
var container = document.getElementsByClassName("site-blocks-cover")[0];
console.log(btn);
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  container.className = "site-blocks-cover is-blurred";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  container.className = "site-blocks-cover no-blurred";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    container.className = "site-blocks-cover no-blurred";
  }
}