function myFunction() {
  var x = document.getElementById("header-nav");
  if (x.className === "navbar-links") {
    x.className += " responsive";
  } else {
    x.className = "navbar-links";
  }
}
