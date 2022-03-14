function btnClear() {
    input.innerText ='';
    output.innerText ='0';
}

function btuDelete() {
    input.innerText = input.innerText.toString().slice(0, -1);
}

function btnClick(elm) {
    input.innerText += elm.innerText; 
}

function btnEqual() {
    output.innerText = eval(input.innerText);
    input.innerText ='';
}
