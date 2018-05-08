var elements = [3, 7, 9, 18, 24, 5, 7, 27, 32, 35, 42, 47];

// Retorna la suma de los números que son estrictamente mayores que 18
function greaterThan18(elements) {

  var total = 0;
  for (i = 0; i < elements.length; <18;) {
  total = total + elements[i];
  }

  alert(total);
  return 0;
}

document.getElementById("result").innerHTML = greaterThan18(elements);
