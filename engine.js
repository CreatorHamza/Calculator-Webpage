let string = "";
let inputBox = document.getElementById("inputBox");

let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    try {
      if (e.target.innerHTML == '=') {
        string = eval(string);
        inputBox.value = string;
      } else if (e.target.innerHTML == 'C') {
        string = "";
        inputBox.value = string;
      } 
      else if(e.target.innerHTML =='X')
      {
        string = string + '*';
        inputBox.value = string;
      }
      else if(e.target.innerHTML =='÷')
      {
        string = string + '/';
        inputBox.value = string;
      }
      else {
        string = string + e.target.innerHTML;
        inputBox.value = string;
      }
    } catch (error) {
      showError(error); 
    }
  });
});

document.getElementById("btnx2").addEventListener("click", function() {
  try {
    var value = parseFloat(inputBox.value);
    if (isNaN(value)) {
      throw new Error("Invalid input");
    }
    var result = value * value;
    inputBox.value = result;
  } catch (error) {
    showError(error);
  }
});



function showError(error) {
  inputBox.value = "                 Error  ";
}
