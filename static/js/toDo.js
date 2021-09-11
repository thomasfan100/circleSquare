var closeItem = document.getElementsByTagName("li");
var i;

for (i = 0; i < closeItem.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);
  closeItem[i].appendChild(span);

}


var close = document.getElementsByClassName("close");

var e;

for (e = 0; e < close.length; e++) {
  close[e].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {

  } 
  
  else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var stan = document.createElement("stan");
  var txt = document.createTextNode("\u00D7");
  stan.className = "close";
  stan.appendChild(txt);
  li.appendChild(stan);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}