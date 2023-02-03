let firstNumber = Number(prompt('Por favor, digite o primeiro número: ')) ?? 0;
let secondNumber = Number(prompt('Por favor, digite o segundo número: ')) ?? 0;

function printAllCalculations(firstNumber, secondNumber) {
    alert(`
    O resultado da soma é ${firstNumber + secondNumber};
    O resultado da subtração é ${firstNumber - secondNumber};
    O resultado da multiplicação é ${firstNumber * secondNumber};
    O resultado da divisão é ${firstNumber / secondNumber};
    O resultado do resto da divisão é ${firstNumber % secondNumber}
    `);

    ((firstNumber + secondNumber) % 2) === 0 ? alert('A soma dos números é par!') : alert('A soma dos números é impar!')
    firstNumber === secondNumber ? alert('Os números escolhidos são iguais.') : alert('Os números escolhidos são diferentes.')
}

printAllCalculations(firstNumber, secondNumber);
