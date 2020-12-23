var elems = document.getElementsByClassName("commentbody");
for (var i = 0; i < elems.length; i++) {
  var elem = elems[i];
  var name = elem.childNodes[2].textContent.trim();
  console.log(name);
  if (name == "xu" || name == "sarah" || name == "bob" || name == "henry" ) {
    console.log("Deleting!");
    elem.remove();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  console.log(document.getElementsByClassName("commentbody"));
}, false);
