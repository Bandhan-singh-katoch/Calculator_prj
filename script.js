let buttons = document.querySelectorAll(".btn");
let string = "";

Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.slice(0, -1)
        }
        else{
            string+= e.target.innerHTML;
        }
        document.querySelector(".output").value = string;
        
    })
})


