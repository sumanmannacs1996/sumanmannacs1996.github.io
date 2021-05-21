const userInput = document.getElementById('input-mumber');
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById('btn-subtract');
const multplyBtn = document.getElementById('btn-multiply');
const divitioBtn = document.getElementById('btn-divide');
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');
const calculationLogs = document.getElementById('logs');

const outputResult = (result,txt,logs)=>{
    currentResultOutput.textContent=result;
    currentCalculationOutput.textContent =txt;
    calculationLogs.textContent=logs; 
}
