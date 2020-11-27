"use strict";
function inputListener(id, type) {
  const box = $(id);
  if (type === "email") {
    box[0].addEventListener("input", function () {
      emailValidate(box);
    });
  } else if (type === "text") {
    box[0].addEventListener("input", function () {
      textValidate(box);
    });
  } else if (type === "pwd") {
    box[0].addEventListener("input", function () {
      pwdValidate(box);
    });
  } else if (type === "repwd") {
    box[0].addEventListener("input", function () {
      //   pwdValidate(box);
      repwdValidate(box);
    });
  }
}

function pwdValidate(box) {
  if (box[0].value === "") {
    box.next()[0].innerHTML = "<br>Password cannot be empty!";
  } else if (
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
      box[0].value
    )
  ) {
    box.next()[0].innerHTML = "<br>Password is valid!";
  } else {
    box.next()[0].innerHTML =
      "<br>Password should between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character!";
  }
}

function repwdValidate(box) {
  if (box[0].value === "") {
    box.next()[0].innerHTML = "<br>Password cannot be empty!";
  } else if ($("#rpwd")[0].value === box[0].value) {
    box.next()[0].innerHTML = "<br>Password is matched!";
  } else {
    box.next()[0].innerHTML = "<br>Password does not match!";
  }
}
function textValidate(box) {
  if (box[0].value === "") {
    box.next()[0].innerHTML = "<br>Input cannot be empty!";
  } else if (/\d/.test(box[0].value)) {
    box.next()[0].innerHTML = "<br>Input should not contain numbers!";
  } else {
    box.next()[0].innerHTML = "<br>Input is valid!";
  }
}
function emailValidate(box) {
  //   console.log(box[0].value);
  //   console.log(box.next());
  if (box[0].value === "") {
    box.next()[0].innerHTML = "<br>Input cannot be empty!";
  } else if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      box[0].value
    )
  ) {
    box.next()[0].innerHTML = "<br>The email address is valid!";
  } else {
    box.next()[0].innerHTML = "<br>This is not a valid email address!";
  }
}
