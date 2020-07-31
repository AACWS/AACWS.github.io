// // Get the modals
// var modals = document.getElementsByClassName("modal");

// // Get the button that opens the modal
// var btn = document.getElementsByClassName("modal-class");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close");

// // When the user clicks on the button, open the modal
// for (var i = 0; i < btn.length; i++) {
//   var thisBtn = btn[i];
//   var thisClose = span[i];
//   var modal = modals[i];
//   thisBtn.addEventListener("click", function(){
//     modal.style.display = "block";
//   }, false);
//   thisClose.addEventListener("click", function() {
//     modal.style.display = "none";
//   })
// }


// for (var i = 1 ; i < 9 ; i ++ ) {
//   var modal = document.getElementById("myModal" + i);
//   // Get the button that opens the modal
//   var btn = document.getElementById("trigger-modal-" + i);
  
//   // Get the <span> element that closes the modal
//   console.log(modal);
//   // // When the user clicks on the button, open the modal
//   // btn.onclick = function() {
//   //   modal.style.display = "block";
//   // }
//   var span = document.getElementsByClassName("close" + i);
  
//   // // When the user clicks on <span> (x), close the modal
//   // span.onclick = function() {
//   //   modal.style.display = "none";
//   // }
  
//   btn.addEventListener("click", function(){
//     modal.style.display = "block";
//   }, false);

//   span[0].addEventListener("click", function() {
//     modal.style.display = "none";
//   })

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
// }
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("trigger-modal-1");
var span1 = document.getElementsByClassName("close1")[0];
btn1.addEventListener("click", function(){
  modal1.style.display = "block";
}, false);
span1.addEventListener("click", function() {
  modal1.style.display = "none";
})

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("trigger-modal-2");
var span2 = document.getElementsByClassName("close2")[0];
btn2.addEventListener("click", function(){
  modal2.style.display = "block";
}, false);
span2.addEventListener("click", function() {
  modal2.style.display = "none";
})

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("trigger-modal-3");
var span3 = document.getElementsByClassName("close3")[0];
btn3.addEventListener("click", function(){
  modal3.style.display = "block";
}, false);
span3.addEventListener("click", function() {
  modal3.style.display = "none";
})

var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("trigger-modal-4");
var span4 = document.getElementsByClassName("close4")[0];
btn4.addEventListener("click", function(){
  modal4.style.display = "block";
}, false);
span4.addEventListener("click", function() {
  modal4.style.display = "none";
})

var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("trigger-modal-5");
var span5 = document.getElementsByClassName("close5")[0];
btn5.addEventListener("click", function(){
  modal5.style.display = "block";
}, false);
span5.addEventListener("click", function() {
  modal5.style.display = "none";
})

var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("trigger-modal-6");
var span6 = document.getElementsByClassName("close6")[0];
btn6.addEventListener("click", function(){
  modal6.style.display = "block";
}, false);
span6.addEventListener("click", function() {
  modal6.style.display = "none";
})

var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("trigger-modal-7");
var span7 = document.getElementsByClassName("close7")[0];
btn7.addEventListener("click", function(){
  modal7.style.display = "block";
}, false);
span7.addEventListener("click", function() {
  modal7.style.display = "none";
})

var modal8 = document.getElementById("myModal8");
var btn8 = document.getElementById("trigger-modal-8");
var span8 = document.getElementsByClassName("close8")[0];
btn8.addEventListener("click", function(){
  modal8.style.display = "block";
}, false);
span8.addEventListener("click", function() {
  modal8.style.display = "none";
})