let defaultResult =0;
let currentResult = defaultResult;
let newResult;
let calcDescription ='';
let logEntry='';
let inputData;

const calculateResult =(calculationType)=>{
    if(userInput.value == ''){
        alert("Please Enter The Number First!!")
        return false;
    }
    inputData = parseFloat(userInput.value);
    if(calculationType =="+"){
        newResult = currentResult + inputData;
        operationSymbol ='+' ;  
    }
    else if(calculationType =='-'){
        newResult = currentResult - inputData;
        operationSymbol ='-' ; 
    }
    else if(calculationType =='*'){
        newResult = currentResult * inputData;
        operationSymbol ='*' ; 
    }
    else if(calculationType =='/'){
        if(inputData == 0){
            alert('Division By Zero Not Possible!!')
            userInput.value=''; //clearing the value after calculation
            return false;
        }

        newResult = currentResult / inputData;
        operationSymbol ='/' ; 
    }
    calcDescription = `${currentResult} ${calculationType} ${inputData}` ;
    if(defaultResult ==0)
    logEntry = logEntry+calcDescription;
    else
    logEntry = logEntry + ` ${calculationType} ${inputData}`;
    currentResult = newResult;
    outputResult(currentResult,calcDescription,logEntry);
    defaultResult =1;
    userInput.value=''; //clearing the value after calculation

}

const add =()=>{
    calculateResult("+");
}

const subtract =()=>{
    calculateResult("-");
}

const multply =()=>{
    calculateResult("*");
}

const devide =()=>{
    calculateResult("/");
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multplyBtn.addEventListener('click',multply);
divitioBtn.addEventListener('click',devide);

