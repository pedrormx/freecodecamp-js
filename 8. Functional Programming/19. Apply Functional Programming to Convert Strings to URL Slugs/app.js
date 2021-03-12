// the global variable
var globalTitle = "Winter Is Coming asd as d as s  s ";

// Add your code below this line
function urlSlug(title) {
  return title
    .split(" ")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing)