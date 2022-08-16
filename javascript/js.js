// Global Variables Start
const results = document.getElementById("Results")
let firstNum = ""
let secondNum = ""
let result = ""

// Global Variables End

// Numbers Section Start
document.getElementById("zero").addEventListener("click", addZero)
function addZero(){
    if(firstNum.includes("+")|| firstNum.includes("-")|| firstNum.includes("*")|| firstNum.includes("/")){
        secondNum += 0
        results.innerText = firstNum + secondNum
        return secondNum
    }
    else{firstNum += 0
    results.innerText = firstNum 
    return firstNum}
    
}
document.getElementById("one").addEventListener("click", addOne)
function addOne(){
    if(firstNum.includes("+")|| firstNum.includes("-")|| firstNum.includes("/")){
        secondNum += 1
        results.innerText = firstNum + secondNum
        return secondNum
    }
    else{firstNum += 1
    results.innerText = firstNum 
    return firstNum}
}
document.getElementById("two").addEventListener("click", addTwo)
function addTwo(){
    if(firstNum.includes("+")|| firstNum.includes("-")|| firstNum.includes("*")|| firstNum.includes("/")){
        secondNum += 2
        results.innerText = firstNum + secondNum
        return secondNum
    }
    else{firstNum += 2
    results.innerText = firstNum 
    return firstNum}
}
document.getElementById("three").addEventListener("click", addThree)
function addThree(){
    if(firstNum.includes("+")|| firstNum.includes("-")|| firstNum.includes("*")|| firstNum.includes("/")){
        secondNum += 3
        results.innerText = firstNum + secondNum
        return secondNum
    }
    else{firstNum += 3
    results.innerText = firstNum 
    return firstNum}
}
document.getElementById("four").addEventListener("click", addFour)
function addFour(){
    if(firstNum.includes("+")|| firstNum.includes("-")|| firstNum.includes("*")|| firstNum.includes("/")){
        secondNum += 4
        results.innerText = firstNum + secondNum
        return secondNum
    }
    else{firstNum += 4
    results.innerText = firstNum 
    return firstNum}
}
document.getElementById("five").addEventListener("click", addFive)
function addFive(){
    if(firstNum.includes("+")|| firstNum.includes("-")|| firstNum.includes("*")|| firstNum.includes("/")){
        secondNum += 5
        results.innerText = firstNum + secondNum
        return secondNum
    }
    else{firstNum += 5
    results.innerText = firstNum 
    return firstNum}
}
document.getElementById("six").addEventListener("click", addSix)
function addSix(){
    if(firstNum.includes("+")|| firstNum.includes("-")|| firstNum.includes("*")|| firstNum.includes("/")){
        secondNum += 6
        results.innerText = firstNum + secondNum
        return secondNum
    }
    else{firstNum += 6
    results.innerText = firstNum 
    return firstNum}
}
document.getElementById("seven").addEventListener("click", addSeven)
function addSeven(){
    if(firstNum.includes("+")|| firstNum.includes("-")|| firstNum.includes("*")|| firstNum.includes("/")){
        secondNum += 7
        results.innerText = firstNum + secondNum
        return secondNum
    }
    else{firstNum += 7
    results.innerText = firstNum 
    return firstNum}
}
document.getElementById("eight").addEventListener("click", addEight)
function addEight(){
    if(firstNum.includes("+")|| firstNum.includes("-")|| firstNum.includes("*")|| firstNum.includes("/")){
        secondNum += 8
        results.innerText = firstNum + secondNum
        return secondNum
    }
    else{firstNum += 8
    results.innerText = firstNum 
    return firstNum}
}
document.getElementById("nine").addEventListener("click", addNine)
function addNine(){
    if(firstNum.includes("+") || firstNum.includes("-")|| firstNum.includes("*")|| firstNum.includes("/")){
        secondNum += 9
        results.innerText = firstNum + secondNum
        return secondNum
    }
    else{firstNum += 9
    results.innerText = firstNum 
    return firstNum}
}
// Number Section End

// Operataion Section Start
document.getElementById("add").addEventListener("click", add)
function add(){
    results.innerText = firstNum
    firstNum = firstNum + "+" 
    return firstNum
} 
document.getElementById("minus").addEventListener("click", minus)
function minus(){
    results.innerText = firstNum
    firstNum = firstNum + "-" 
    return firstNum
}
document.getElementById("multiply").addEventListener("click", multiply)
function multiply(){
    results.innerText = firstNum
    firstNum = firstNum + "*" 
    
    return firstNum

}
document.getElementById("divide").addEventListener("click", divide)
function divide(){
    results.innerText = firstNum
    firstNum = firstNum + "/" 
    
    return firstNum
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


