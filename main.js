// display function
console.log("calculator");
 function display(val){
  document.getElementById('result').value += val
  return val
 }
// solve function
function solve(){
  let x = document.getElementById('result').value;
  let y = eval(x);
  document.getElementById('result').value = y
  return y
}

// clear function
function clearScreen(){
  document.getElementById('result').value = 0;
}

// backspace function

  function backSpace(){
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
   
  }
