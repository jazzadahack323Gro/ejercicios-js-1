const ejercicio1 = [
  45, 9, 67, 36, 55, 17, 48, 12, 65, 20, 84, 30, 100, 34, 74, 73, 75, 32, 8, 51, 12, 
  67, 73, 63, 40, 81, 34, 75, 24, 66, 37, 47, 49, 72, 74, 45, 4, 39, 19
];
console.log(ejercicio1);

function esPrimo(n) {
  let i = 1;
  while (n % ++i != 0);
  return n == i;
}
//ciclo para recorrer el arreglo
for (let i = 0; i < ejercicio1.length; i++){
    if (esPrimo(ejercicio1[i])){
    console.log (`Es primo:: ${ejercicio1[i]}`)
    }
    else (console.log(`No Es primo:: ${ejercicio1[i]}`))
}










/*
/*
function numeroPrimo(){
  const ejercicio1 = ["Jazmin", "Yes", "Luis", "Paz"];
  console.log("arreglo =>", arreglo);  
   let contador = 0;

    while(contador < 100){
        console.log(`Numero entero ${contador}`)
        contador = contador + 1;
    }
}


console.log( "EJERCICIO 1" );
 
*/





/*const arreglo = [`1000`];
    console.log("Arreglo =>", arreglo);
*/


/*
    const arreglo = ["Jazmin", "Yes", "Luis", "Paz"];
    console.log("arreglo =>", arreglo);

    for (let indice = 0; indice < arreglo.length; indice++) {
        console.log(`El nombre de la persona es ${arreglo[indice]}`);
    }
      
    
*/
/*

    const ejercicio1 = [
        3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
        19, 88, 456, 13, 23, 24,
      ];
      //3,71,19,13,23
      
      let $contador = 0;
      
      for ( let $indice = 0; $indice < ejercicio1.length; $indice++ )
      {
        $elemento = ejercicio1[ $indice ];
        for ( let $serie = 1; $serie < $elemento; $serie++ )
        {
          if ( $elemento % $serie == 0 )
          {
            $contador++;
          }
        }//fin ciclo for2
        //console.log( $contador );
      
        if ( $contador < 2 )
        {
          console.log( "El numero: " + $elemento + " ES PRIMO " );
          //Reiniciar contador
          $contador = 0;
      
        } else
        {
          console.log( "El numero: " + $elemento + " No es primo " );
          //Reiniciar contador
          $contador = 0;
      
        }
      
      }//fin ciclo
*/





