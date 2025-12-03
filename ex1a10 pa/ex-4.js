let listaDeNomes = ["Ryan", "matheus", "Renato"]

function pushArray(valor, array=[]){
    array[array.length]=valor
}

pushArray("Eduardo", listaDeNomes)
console.log(listaDeNomes)