let x="";
let y="";
let operation="";
let onoff=false;
const numbers=document.querySelector(".numbers");
const display=document.querySelector(".display");

for (let i=1;i<10;i++) {
    const digit=document.createElement("button");
    digit.classList.add("number-button");
    digit.textContent=i;
    numbers.insertBefore(digit,zero);
};

function clean(n) {
    return parseFloat(n.toFixed(8));
}

function operate(newop) {
    switch (operation) {
        case "+":
            x=clean(Number(x)+Number(y));
            display.textContent=x+newop;
            break;
        case "-":
            x=clean(Number(x)-Number(y));
            display.textContent=x+newop;
            break;
        case "*":
            x=clean(Number(x)*Number(y));
            display.textContent=x+newop;
            break;
        case "/":
            x=clean(Number(x)/Number(y));
            display.textContent=x+newop;
            break;
    }
    y="";
    operation=newop;
    
};

function pressedNum(event) {
    if (event.target.textContent == ".") {
        if (y.includes(".")){
            return;
        }
        else if (y == "" && x.includes(".")) {
            return;
        }
    }
    if (operation.length==0) {
        x+=event.target.textContent;
        display.textContent=x+operation+y;
    }
    else {
        y+=event.target.textContent;
        display.textContent=x+operation+y;
    }
}
function pressedOp(event){
    if (x !== ""){
        if (event.target.textContent== "=" ) {
            if (operation !== "" && y == ""){
                return;
            }
            operate(event.target.textContent);
            display.textContent=x;
            x="";
            operation="";
        }
        else if (operation.length<1) {
            operation+=event.target.textContent;
            display.textContent=x+operation;
        }
        else {
            if (y!==""){
                operate(event.target.textContent);
            }
            else {
                operation=event.target.textContent;
                display.textContent=x+operation;
            }
        }
    }
    else {
        if (event.target.textContent == "-") {
            x="-";
            display.textContent="-";
        }
        else {return;}
    }
}


const nums = document.querySelectorAll(".number-button");
const operators = document.querySelectorAll(".operators button");
const power = document.querySelector("#on");
const clear = document.querySelector("#clear");
const backspace = document.querySelector ("#backspace");

nums.forEach(num=>{num.addEventListener("click",e=>{if (onoff)(pressedNum(e))})});
operators.forEach(op=>{op.addEventListener("click",e=>{if (onoff)(pressedOp(e))})});
power.addEventListener("click",e => {
    onoff=!onoff;
    if (!onoff) {
        display.style.backgroundColor="black";
        display.textContent="";
        x="";
        y="";
        operation="";
    }
    else {
        display.style.backgroundColor="darkgreen";
    }
})
clear.addEventListener("click",e => {
    display.textContent = "";
    x="";
    y="";
    operation="";
})
backspace.addEventListener("click",e=> {
    if (y !== "") {
        y=y.slice(0,-1);
    }
    else if (operation !== "") {
        operation = "";
    }
    else {
        x=x.slice(0,-1);
    }
    display.textContent = x+operation+y;
})
