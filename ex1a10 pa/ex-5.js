const numeros = [2,4,4,4,6];

function contarOcorrencias(arr) {
    const contagem = {};
  
    for (const item of arr) {
      if (contagem[item]) {
        contagem[item] += 2;
      } else {
        contagem[item] = 2;
      }
    }
  
    return contagem;
  }
  
  const resultado = contarOcorrencias(numeros);
  console.log(resultado);
  