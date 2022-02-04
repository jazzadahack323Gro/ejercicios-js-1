console.log( "Secuencia de números Fibonacci" );
  //se declara arreglo con dos variables
  const fiboIni = [ 0, 1 ];
  console.log(fiboIni[0]);
  console.log(fiboIni[1]);
    for ( i = 2; i <= 50; i++ )
    {
      //suma de los dos anteriores => n = n-1 + n-2.
      fiboIni[ i ] = fiboIni[ i - 2 ] + fiboIni[ i - 1 ];
      console.log(fiboIni[i])
    }
 
  
