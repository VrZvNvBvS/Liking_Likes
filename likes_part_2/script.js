function add1() {
  var value = parseInt(document.getElementById("counter").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("counter").value = value;
}

function add2() {
  var value = parseInt(document.getElementById("counter2").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("counter2").value = value;
}

function add3() {
  var value = parseInt(document.getElementById("counter3").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("counter3").value = value;
}
