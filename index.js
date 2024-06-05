const display = document.getElementById("displays");

function buttontodisplay(input){
    display.value += input;
}
function clearall(){
    display.value = "";
}
function getresult(){
    try{display.value = eval(display.value);
}
    catch(error){
        display.value = "ERROR";
    }
}
function negativesign(){
    display.value = -parseFloat(display.value);
}
function percentage(){
    display.value *= 0.01; 
}
