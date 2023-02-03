const addStudentButton = document.querySelector('#addButton');
const showResultsButton = document.querySelector('#showResult');
let studentsList = [];

addStudentButton.addEventListener('click', addStudentToList);

function addStudentToList() {
    studentsList.push({
        name: prompt('Digite o nome do estudante: ') ?? 'Anonymous',
        firstGrade: Number(prompt('Digite a nota da primeira prova: ')) ?? 0,
        secondGrade: Number(prompt('Digite a nota da segunda prova: ')) ?? 0,
    }
    );
    alert('Aluno adicionado à lista com sucesso.')
};

function calculateStudentAverage(name, firstGrade, secondGrade) {
    let average = (firstGrade + secondGrade) / 2;
    return `A média do(a) aluno(a) ${name} é ${average.toFixed(2)}`;
};

function checkIfApproved(name, firstGrade, secondGrade) {
    let isApproved;
    ((firstGrade + secondGrade) / 2) >= 7 ? isApproved = true : isApproved = false;
    return isApproved ? `Parabéns! ${name} foi aprovado!` : `Não foi dessa vez, ${name}! Tente novamente`;
};

function printAllResults(studentsList) {
    for (let student of studentsList) {
        alert(`
            ${calculateStudentAverage(student.name, student.firstGrade, student.secondGrade)}
            ${checkIfApproved(student.name, student.firstGrade, student.secondGrade)}
            `);
    };
};