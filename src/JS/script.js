function validate() {
    // geting age from user
  let age = document.getElementById("age");
//   getting weight from user
  let weight = document.getElementById("weight");
//   message variable to display message
  let message;
//   err variable from dealing with negative values only
  let err;
  if (age.value < 0) {
    err = "****Age cannot be negative***";
    document.getElementById("ageError").innerHTML = err;
  }
  if (weight.value < 0) {
    err = "***weight cannot be negative***";
    document.getElementById("weightError").innerHTML = err;
  }
  if (age.value >= 5 && age.value <= 7) {
    if (weight.value >= 15 && weight.value <= 20) {
      message = "You are fit";
      document.getElementById("message").innerHTML = message;
      document.getElementById("message").style.color = "green";
    } else if (weight.value > 20) {
      message = "overweight";
      document.getElementById("message").innerHTML = message;
      document.getElementById("message").style.color = "red";
    } else {
      if (weight.value >= 0) {
        message = "underweight";
        document.getElementById("message").innerHTML = message;
        document.getElementById("message").style.color = "red";
      }
    }
  }
  if (age.value >= 8 && age.value <= 10) {
    if (weight.value >= 21 && weight.value <= 25) {
      message = "You are fit";
      document.getElementById("message").innerHTML = message;
      document.getElementById("message").style.color = "green";
    } else if (weight.value > 25) {
      message = "overweight";
      document.getElementById("message").innerHTML = message;
      document.getElementById("message").style.color = "red";
    } else {
      if (weight.value >= 0) {
        message = "underweight";
        document.getElementById("message").innerHTML = message;
        document.getElementById("message").style.color = "red";
      }
    }
  }
  if (age.value >= 11 && age.value <= 15) {
    if (weight.value >= 26 && weight.value <= 30) {
      message = "You are fit";
      document.getElementById("message").innerHTML = message;
      document.getElementById("message").style.color = "green";
    } else if (weight.value > 30) {
      message = "overweight";
      document.getElementById("message").innerHTML = message;
      document.getElementById("message").style.color = "red";
    } else {
      if (weight.value >= 0) {
        message = "underweight";
        document.getElementById("message").innerHTML = message;
        document.getElementById("message").style.color = "red";
      }
    }
  }
  if (age.value >= 16 && age.value <= 20) {
    if (weight.value >= 31 && weight.value <= 40) {
      message = "You are fit";
      document.getElementById("message").innerHTML = message;
      document.getElementById("message").style.color = "green";
    } else if (weight.value > 40) {
      message = "overweight";
      document.getElementById("message").innerHTML = message;
      document.getElementById("message").style.color = "red";
    } else {
      if (weight.value >= 0) {
        message = "underweight";
        document.getElementById("message").innerHTML = message;
        document.getElementById("message").style.color = "red";
      }
    }
  } else {
    if (age.value < 5 || age.value > 20) {
      message = "Please enter the valid age";
      document.getElementById("message").innerHTML = message;
      document.getElementById("message").style.color = "red";
    }

    if (weight.value < 15 || weight.value > 40) {
      message = "Please enter the valid weight";
      document.getElementById("message").innerHTML = message;
      document.getElementById("message").style.color = "red";
    }
  }
//   return false so that my output stays on the page
  return false;
}
