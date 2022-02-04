

/*const arreglo = [`1000`];
    console.log("Arreglo =>", arreglo);
*/



    const esPrimo = numero => {
        // Casos especiales
        if (numero == 0 || numero == 1 || numero == 4) return false;
        for (let x = 2; x < numero / 2; x++) {
            if (numero % x == 0) return false;
        }
        // Si no se pudo dividir por ninguno de los de arriba, sí es primo
        return true;
    }
    
    const ejercicio1 = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36,

        38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60, 62, 63, 64, 65, 66, 68,
        
        69, 70, 72, 74, 75, 76, 77, 78, 80, 81, 82, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100,];
    
        ejercicio1.forEach(numero => {
        console.log("¿%d es primo? %s", numero, esPrimo(numero));
    });












/*
for (let i = 2; i < numeroPrimo/2; i++){
    if (numeroPrimo % i ===0) { 
        esnumeroPrimo = false;*/