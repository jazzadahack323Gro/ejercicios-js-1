

var lista =new Array(50); 

rellenar(lista); 

document.write(lista); 

function rellenar(matriz)

{

var largo, valor, ind;

largo = matriz.length;

for(ind = 0; ind < largo; ind++)
    {

    valor = Math.random()*100;

    matriz[ind] = Math.round(valor);
    }

}

console.log(lista);