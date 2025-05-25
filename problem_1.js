class Calculator {
    operate(a, b, operation) {
      switch (operation) {
        case "add":
          return a + b;
        case "subtract":
          return a - b;
        case "multiply":
          return a * b;
        case "divide":
          return b !== 0 ? a / b : "Error: Division by zero";
        default:
          return "Invalid operation";
      }
    }
  }
  
  // Example usage
  const calc = new Calculator();
  console.log("Add:", calc.operate(10.5, 5.2, "add"));
  console.log("Divide:", calc.operate(10.5, 0, "divide"));

  

  