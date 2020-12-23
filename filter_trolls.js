var elems = document.getElementsByClassName("commentbody");
var deletions = [];
for (var i = 0; i < elems.length; i++) {
  var elem = elems[i];
  var name = elem.childNodes[2].textContent.trim();
  if (name == "xu" || name == "sarah" || name == "bob" || name == "harry" || name == "jayne" || name == "janice") {
    console.log("Deleting troll comment from ${name}: ", elem);
    deletions.push(elem);
  }
};

deletions.forEach((e => e.remove()));
