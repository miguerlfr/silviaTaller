const a = [3, 4 ,5, 11, 7, 8, 9, 10];

const numero = (a) => {
    let encontrado = a.find(item => item > 5);
    return encontrado;
  };

console.log(numero(a)); 