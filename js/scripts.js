       
function obtenerSaludo() {
  var hora = new Date().getHours();
  var saludo;

  if (hora >= 6 && hora < 12) {
    saludo = "Good";
  } else if (hora >= 12 && hora < 17) {
    saludo = "Good";
  }
    else if (hora >= 18 && hora < 22) {
    saludo = "Good";
  }
  else {
    saludo = "Good";
  }

  return saludo;
}
function obtenerSaludo2() {
  var hora = new Date().getHours();
  var saludo2;

  if (hora >= 6 && hora < 12) {
    saludo2 = "morning";
  } else if (hora >= 12 && hora < 19) {
    saludo2 = "afternoon";
  }
    else if (hora >= 18 && hora < 22) {
    saludo2 = "evening";
  }
  else {
    saludo2 = "night";
  }

  return saludo2;
}