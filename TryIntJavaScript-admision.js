/*
 Ramón quiere hacer una fiesta privada en donde solo entre un número
          exclusivo de personas, ayudale al portero a solo dejar pasar a
          aquellas personas mayores de edad que sean familiares de Ramón. (con
          imprimir los usuarios que se admitirán basta, usar el arreglo
          denominado como "ejercicio2").
  
*/ //parentezco 1 = si y  2 = no 
const acceso1 = {
  nombre: 'Jazmin',
  apellido: 'Lopez',
  edad: 41,
  parentezco: 1,
}
const acceso2 = {
  nombre: 'Fran',
  apellido: 'Perez',
  edad: 15,
  parentezco: 1,
}

const acceso3 = {
  nombre: 'Yes',
  apellido: 'Ramirez',
  edad: 30,
  parentezco: 2,
}

const arregloInvitados = [acceso1, acceso2, acceso3];

const ejercicio2 = (acceso) => {
  if (acceso.edad >= 18 && acceso.parentezco == 1) {
    console.log(`Puedes pasar ${acceso.nombre} ${acceso.apellido}`);

  } else {
    console.log(`NO Puedes pasar ${acceso.nombre} ${acceso.apellido}`);
  }
}

arregloInvitados.forEach(acceso => {
 ejercicio2(acceso); 
});