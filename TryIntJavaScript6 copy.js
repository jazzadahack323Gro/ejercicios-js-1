const ejercicio1 = [
  45, 9, 67, 36, 55, 17, 32, 16, 38, 22, 48, 12, 65, 20, 84, 30, 100, 34, 74, 73, 75, 32, 8, 51, 12, 
  67, 73, 63, 40, 81, 34, 50, 64, 24, 94, 72, 75, 24, 66, 37, 47, 49, 72, 74, 45, 10, 4, 39, 70, 19
];
console.log(ejercicio1);

function esPrimo(n) {
  let i = 1;
  while (n % ++i != 0);
  return n == i;
}

for (let i = 2; i < 100; i++)
  if (esPrimo(i))
    console.log("Es primo:", i);
  else (console.log("No es primo:", i))
  
