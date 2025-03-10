function gerarArrayAleatorio(tamanho, min, max) {
  const array = [];
  for (let i = 0; i < tamanho; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return array;
}

function ordenarCrescente(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function ordenarDecrescente(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] < array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function ehPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

const numeros = gerarArrayAleatorio(10, 1, 100);
console.log("Array gerado:", numeros);

const crescente = ordenarCrescente([...numeros]);
const decrescente = ordenarDecrescente([...numeros]);

console.log("Ordenado crescente:", crescente);
console.log("Ordenado decrescente:", decrescente);

const pares = numeros.filter(num => num % 2 === 0);
const impares = numeros.filter(num => num % 2 !== 0);
const primos = numeros.filter(ehPrimo);

console.log("Números pares:", pares);
console.log("Números ímpares:", impares);
console.log("Números primos:", primos);
