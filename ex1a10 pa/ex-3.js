const aluno = {
    notas: [10, 9, 8, 7, 6],
    media() {
      const soma = this.notas.reduce((acc, nota) => acc + nota, 0); 

      return soma / this.notas.length;
    }
  };
  
  console.log(aluno.media());