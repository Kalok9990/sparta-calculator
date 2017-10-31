var calc = prompt("What sort of calculator would you like to use? a) basic b) advanced c) BMI d) Trip");

function wrongNum(num){
  if(isNan(num)==true){
    alert("This is not a number. Please try again.");
    break;
  }
}

switch (calc) {
  case "a":
  // basic calculator
      var total;
      var inNum = prompt("Please enter a number.");
      wrongNum(inNum);
      var secNum = prompt("Please enter another number.");
      wrongNum(secNum);
      var sign = prompt("please enter a sign(+,-,/ or *).");
      switch (sign) {
        case "+":
          total = parseFloat(inNum) + parseFloat(secNum);
          break;
        case "-":
          total = parseFloat(inNum) - parseFloat(secNum);
          break;
        case "*":
          total = parseFloat(inNum) * parseFloat(secNum);
          break;
        case "/":
          total = parseFloat(inNum) / parseFloat(secNum);
          break;
        default:
        alert("This is not a correct sign. Please try again.");
        break;
      }
      alert(inNum + sign + secNum +"="+ total);
      break;

  case "b":
  //advanced calculator
    var choice = prompt("Would you like to a) power or b) square root?");
    switch (choice) {
      case "a":
        var inNum = prompt("What number do you want?");
        wrongNum(inNum);
        var power = prompt("To the power of?");
        wrongNum(power);
        var total = Math.pow(inNum, power);
        alert(inNum + " to the power of " + power + " is " + total);
        break;
      case "b":
        var inNum = prompt("What number do you want?");
        wrongNum(inNum);
        var total = Math.sqrt(inNum);
        alert("Square root of " +inNum+ " is " + total);
        break;
      default:
        prompt("Please enter a correct choice.");
    }
    break;

  case "c":
  //BMI calculator
    var system = prompt("Would you like to calculate your BMI in imperial or metric system?");
    if(system == "imperial"){
      var weight = prompt("What is your weight in pounds?");
      wrongNum(weight);
      var height = prompt("What is your height in inches?");
      wrongNum(height);
      var bmi = (weight*703)/(Math.pow(height, 2));
      alert("Your BMI is " + bmi);
    }else if(system == "metric"){
      var weight = prompt("What is your weight in kilograms?");
      wrongNum(weight);
      var height = prompt("What is your height in metres?");
      wrongNum(height);
      var bmi = weight/(Math.pow(height,2));
      alert("Your BMI is " + bmi);
    }
    break;

  case "d":
  //Trip calculator
    var distance = prompt("Enter the distance (miles).");
    wrongNum(distance);
    var incost = prompt("Enter the cost for fuel per gallon (in pounds).");
    wrongNum(incost);
    var speed = prompt("How fast are you travelling(miles per hour)?");
    wrongNum(speed);
    var fuel = prompt("Enter fuel efficiency (miles per gallon).");
    wrongNum(fuel);
    if(speed >60){
      fuel = fuel - ((speed - 60)*2);
      if(fuel <= 0){
        fuel = 1;
      }
    }
    var time = parseFloat(distance)/parseFloat(speed);
    var cost = parseFloat(incost)*(parseFloat(distance)/parseFloat(fuel));
    alert("Your trip will take " +time+ " hours and will cost be £" +cost);
    break;
  default:
}
