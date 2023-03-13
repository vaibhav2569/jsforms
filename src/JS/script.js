function validate() {
  // geting age from user
  let age = document.getElementById("age");
  //   getting weight from user
  let weight = document.getElementById("weight");
  //   message variable to display message
  let message = [
    "You are fit",
    "overweight",
    "underweight",
    "Please enter the  age within range",
    "Please enter the weight within range",
  ];
  var text = "";

  if (age.value >= 5 && age.value <= 7) {
    if (weight.value >= 15 && weight.value <= 20) {
      text = message[0];
    } else if (weight.value > 20) {
      text = message[1];
    } else  {
        text = message[2];
    }
  }
  else if (age.value >= 8 && age.value <= 10) {
    if (weight.value >= 21 && weight.value <= 25) {
      text = message[0];
    } else if (weight.value > 25) {
      text = message[1];
    } else {
      if (weight.value >= 0) {
        text = message[2];
      }
    }
  }
 else if (age.value >= 11 && age.value <= 15) {
    if (weight.value >= 26 && weight.value <= 30) {
      text = message[0];
      document.getElementById("message").style.color = "green";
    } else if (weight.value > 30) {
      text = message[1];
      document.getElementById("message").style.color = "red";
    } else {
      if (weight.value >= 0) {
        text = message[2];
        document.getElementById("message").style.color = "red";
      }
    }
  }
  else if (age.value >= 16 && age.value <= 20) {
    if (weight.value >= 31 && weight.value <= 40) {
      text = message[0];
    } else if (weight.value > 40) {
      text = message[1];
    } else {
      if (weight.value >= 0) {
        text = message[2];
      }
    }
  } 
  else {
    if (age.value < 5 || age.value > 20) {
      text = message[3];
    } else if (weight.value < 15 || weight.value > 40) {
      text = message[4];
    }
  }
  document.getElementById("message").innerHTML = text;
  text === message[0]
    ? (document.getElementById("message").style.color = "green")
    : (document.getElementById("message").style.color = "red");

  //   return false so that my output stays on the page
  return false;
}
