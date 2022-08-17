// Global Variables & Functions Start
const results = document.getElementById("Results")
let firstNum = ""
let secondNum = ""
let result = ""
function addNum(x){
    if(firstNum.includes("+")|| firstNum.includes("-")|| firstNum.includes("/") || firstNum.includes("*")){
    secondNum += x
    results.innerText = firstNum + secondNum
    return secondNum
}
else{firstNum += x
results.innerText = firstNum 
return firstNum}

}
function conCatNumbers(x){
    results.innerText = firstNum
    firstNum = firstNum + x 
    return firstNum

}
// Global Variables & Functions End

// Numbers Section Start
document.getElementById("zero").addEventListener("click", addZero)
function addZero(){
   return addNum(0)
    
}
document.getElementById("one").addEventListener("click", addOne)
function addOne(){
    return addNum(1)
}
document.getElementById("two").addEventListener("click", addTwo)
function addTwo(){
    return addNum(2)
}
document.getElementById("three").addEventListener("click", addThree)
function addThree(){
    return addNum(3)
}
document.getElementById("four").addEventListener("click", addFour)
function addFour(){
    return addNum(4)
}
document.getElementById("five").addEventListener("click", addFive)
function addFive(){
    return addNum(5)
}
document.getElementById("six").addEventListener("click", addSix)
function addSix(){
    return addNum(6)
}
document.getElementById("seven").addEventListener("click", addSeven)
function addSeven(){
    return addNum(7)
}
document.getElementById("eight").addEventListener("click", addEight)
function addEight(){
    return addNum(8)
}
document.getElementById("nine").addEventListener("click", addNine)
function addNine(){
    return addNum(9)
}
// Number Section End

// Operataion Section Start
document.getElementById("add").addEventListener("click", add)
function add(){
    return conCatNumbers("+")
} 
document.getElementById("minus").addEventListener("click", minus)
function minus(){
    return conCatNumbers("-")
}
document.getElementById("multiply").addEventListener("click", multiply)
function multiply(){
    return conCatNumbers("*")

}
document.getElementById("divide").addEventListener("click", divide)
function divide(){
    return conCatNumbers("/")
}

// Operation Section End

document.getElementById("equals").addEventListener("click", getAnswer)
function getAnswer(){
    for(let i = 0; i<=firstNum.length; i++){
        if(firstNum.charAt(i) === "+"){
            firstNum = firstNum.replace("+", "")
            result = Number(firstNum) + Number(secondNum)
            firstNum = result.toString()
            secondNum = ""
            results.innerText = result
            
        }
        else if(firstNum.charAt(i) === "-"){
            firstNum = firstNum.replace("-", "")
            result = Number(firstNum) - Number(secondNum)
            firstNum = result.toString()
            secondNum = ""
            results.innerText = result
            
            
            
        }
        else if(firstNum.charAt(i) === "*"){
            firstNum = firstNum.replace("*", "")
            result = Number(firstNum) * Number(secondNum)
            firstNum = result.toString()
            secondNum = ""
            results.innerText = result
            
            
            
        }

        else if(firstNum.charAt(i) === "/"){
            firstNum = firstNum.replace("/", "")
            result = Number(firstNum) / Number(secondNum)
            firstNum = result.toString()
            secondNum = ""
            results.innerText = result
            
            
            
        }
    }
}


