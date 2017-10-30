var calc = prompt("What sort of calculator would you like to use? a) basic b) advanced c) BMI d) Trip");

switch (calc) {
  case "a":
  // basic calculator
      var total;
      var inNum = prompt("Please enter a number.");
      if(isNaN(inNum)==true){
        alert("This is not a number. Please try again.");
        break;
      }
      var secNum = prompt("Please enter another number.");
      if(isNaN(secNum)==true){
        alert("This is not a number. Please try again.");
        break;
      }
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
        if(isNaN(inNum)==true){
          alert("This is not a number. Please try again.");
          break;
        }
        var power = prompt("To the power of?");
        if(isNaN(power)==true){
          alert("This is not a number. Please try again.");
          break;
        }
        var total = Math.pow(inNum, power);
        alert(inNum + " to the power of " + power + " is " + total);
        break;
      case "b":
        var inNum = prompt("What number do you want?");
        if(isNaN(inNum)==true){
          alert("This is not a number. Please try again.");
          break;
        }
        var total = Math.sqrt(inNum);
        alert("Square root of " +inNum+ " is " + total);
        break;
      default:
        console.log("Please enter a correct choice.");
    }
    break;

  case "c":
  //BMI calculator
    var system = prompt("Would you like to calculate your BMI in imperial or metric system?");
    if(system == "imperial"){
      var weight = prompt("What is your weight in pounds?");
      if(isNaN(weight)==true){
        alert("This is not a number. Please try again.");
        break;
      }
      var height = prompt("What is your height in inches?");
      if(isNaN(height)==true){
        alert("This is not a number. Please try again.");
        break;
      }
      var bmi = (weight*703)/(Math.pow(height, 2));
      alert("Your BMI is " + bmi);
    }else if(system == "metric"){
      var weight = prompt("What is your weight in kilograms?");
      if(isNaN(weight)==true){
        alert("This is not a number. Please try again.");
        break;
      }
      var height = prompt("What is your height in metres?");
      if(isNaN(height)==true){
        alert("This is not a number. Please try again.");
        break;
      }
      var bmi = weight/(Math.pow(height,2));
      alert("Your BMI is " + bmi);
    }
    break;

  case "d":
  //Trip calculator
    var distance = prompt("Enter the distance (miles).");
    if(isNaN(distance)==true){
      alert("This is not a number. Please try again.");
      break;
    }
    var incost = prompt("Enter the cost for fuel per gallon (in pounds).");
    if(isNaN(incost)==true){
      alert("This is not a number. Please try again.");
      break;
    }
    var speed = prompt("How fast are you travelling(miles per hour)?");
    if(isNaN(speed)==true){
      alert("This is not a number. Please try again.");
      break;
    }
    var fuel = prompt("Enter fuel efficiency (miles per gallon).");
    if(isNaN(fuel)==true){
      alert("This is not a number. Please try again.");
      break;
    }else if(speed >60){
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
