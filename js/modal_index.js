var container = document.getElementsByClassName("site-blocks-cover")[0];
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// mobile device = 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    modal.style.display = "block";
    container.className = "site-blocks-cover is-blurred";
}

span.onclick = function() {
    modal.style.display = "none";
    container.className = "site-blocks-cover no-blurred";
  }