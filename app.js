const NAMES = ["Jessie", "Jackson", "Ben", "Kyle", "Gabby", "Jill"];
const NUMS = [2, 5, 6, 8, 19, 22, 27];

/**
 * PART 1:
 *  Add an event listener to the `input` element.
 *  For now, just have it console.log something.
 *
 *  You can choose `keypress`, `click`, `focus`, or anything else you want to try!
 */
const inputElement = document.getElementById("input");
inputElement.addEventListener("focus", () => {
  console.log("Input element focused");
});
/**
 * PART 2:
 *  Add event listeners such that the buttons with the following ids
 *  perform the corresponding calculation on the lists of NAMES and NUMS.
 *
 * `btn-log-names`       console.log out each name (on a new line)
 * `btn-first-initial`   Call writeOutput with the list of each person's first initial
 * `btn-length-of-name`  Call writeOutput with the list of each person's name length
 * `btn-j-names`         Call writeOutput with the list of people who's name starts with J
 * `btn-long-j-names`    Call writeOutput with the list of people who's name starts with J and have a long name (>= 5 characters)
 * `btn-is-there-7`      Call writeOutput with whether or not there is a 7 in the list of numbers
 * `btn-is-all-positive` Call writeOutput with whether or not each number is positive
 */
document.getElementById("btn-log-names").addEventListener("click", () => {
  NAMES.forEach(name => console.log(name));
}
);
document.getElementById("btn-first-initial").addEventListener("click", () => {
  const initials = NAMES.map(name => name.charAt(0));
  writeOutput(initials);
});
document.getElementById("btn-length-of-name").addEventListener("click", () => {
  const nameLengths = NAMES.map(name => name.length);
  writeOutput(nameLengths);
});
document.getElementById("btn-j-names").addEventListener("click", () => {
  const jNames = NAMES.filter(name => name.startsWith("J"));
  writeOutput(jNames);
}); 
document.getElementById("btn-long-j-names").addEventListener("click", () => {
  const longJNames = NAMES.filter(name => name.startsWith("J") && name.length >= 5);
  writeOutput(longJNames);
});
document.getElementById("btn-is-there-7").addEventListener("click", () => {
  const hasSeven = NUMS.includes(7);
  writeOutput(hasSeven);
}); 
document.getElementById("btn-is-all-positive").addEventListener("click", () => {
  const allPositive = NUMS.every(num => num > 0);
  writeOutput(allPositive);
});

function writeOutput(stringOrArray) {
  const outputNode = document.getElementById("output");
  outputNode.innerText = Array.isArray(stringOrArray)
    ? stringOrArray.join(", ")
    : stringOrArray;
}

window.addEventListener("load", () => {
  document.getElementById("names").innerText = "Name list: " + NAMES.join(", ");
  document.getElementById("nums").innerText = "Number list: " + NUMS.join(", ");
});
