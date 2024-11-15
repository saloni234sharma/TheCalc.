let input = document.querySelector(".inputField");
let buttons = document.querySelectorAll("button");
let btnArr = Array.from(buttons);
let string = "";
btnArr.forEach((val) => {
  val.addEventListener("click", (event) => {
    if (event.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (event.target.innerHTML == "Reset") {
      string = "";
      input.value = string;                                    
    } else if(event.target.innerHTML == '='){
      string = eval(string);
      input.value = string;
    }
    else {
      string += event.target.innerHTML;
      input.value = string;
    }
  });
});
