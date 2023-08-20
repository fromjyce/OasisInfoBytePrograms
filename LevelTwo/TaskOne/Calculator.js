function handleNumber(number) {
  document.getElementById("numberInput").value += number;
}

function handleOperator(operator) {
    if (operator === '+') {
      document.getElementById("numberInput").value += operator;
    }
    else if (operator === "-") {
      document.getElementById("numberInput").value += operator;
    } 
    else if (operator === '/') {
        document.getElementById("numberInput").value += operator;
    }
    else if (operator === 'x') {
        operator = "*";
        document.getElementById("numberInput").value += operator;
    }
    else if (operator === '.') {
        document.getElementById("numberInput").value += operator;
    }
    else {
      document.getElementById("numberInput").value =
        "Error: Invalid operator ";
    }
}

function handleDelete() {
  var currentInput = document.getElementById("numberInput").value;
  document.getElementById("numberInput").value = currentInput.substring(
    0,
    currentInput.length - 1
  );
}

function handleClear() {
  document.getElementById("numberInput").value = "";
}

function handleEqual() {
  try {
    document.getElementById("numberInput").value = eval(
      document.getElementById("numberInput").value
    );
  } catch (error) {
    document.getElementById("numberInput").value = "Error";
  }
}
