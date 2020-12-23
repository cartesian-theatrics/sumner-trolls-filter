var elems = document.getElementsByClassName("commentbody");
for (var i = 0; i < elems.length; i++) {
  var elem = elems[i];
  var name = elem.childNodes[2].textContent.trim();
  if (name == "xu" || name == "sarah" || name == "bob" || name == "harry" ) {
    console.log("Deleting troll comment: ", elem);
    elem.remove();
  }
};
