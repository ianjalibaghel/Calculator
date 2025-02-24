const display= $(".display");
const specialChars = ["%", "*", "/", "-", "+", "="];

let output="";

function calculate(btnvalue){
    display.focus();

    if(btnvalue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }

    else if(btnvalue ==="AC"){
        output="";
    }
    else if(btnvalue==="DEL"){
        output = output.toString().slice(0, -1);
    }
    else{
        if(output==="" && specialChars.includes(btnvalue)) return;
        output +=btnvalue;
    }

    display.val(output);
}

$("button").on("click",function(){
    calculate($(this).data("value"));
});
