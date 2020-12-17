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
    box.next()[0].innerHTML = "Password cannot be empty!";
    box.next().attr("class", "message_warning");
  } else if (
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
      box[0].value
    )
  ) {
    box.next()[0].innerHTML = "Password is valid!";
    box.next().attr("class", "message");
  } else {
    box.next()[0].innerHTML =
      "Password should between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character!";
    box.next().attr("class", "message_warning");
  }
}

function repwdValidate(box) {
  if (box[0].value === "") {
    box.next()[0].innerHTML = "Password cannot be empty!";
    box.next().attr("class", "message_warning");
  } else if ($("#rpwd")[0].value === box[0].value) {
    box.next()[0].innerHTML = "Password is matched!";
    box.next().attr("class", "message");
  } else {
    box.next()[0].innerHTML = "Password does not match!";
    box.next().attr("class", "message_warning");
  }
}
function textValidate(box) {
  if (box[0].value === "") {
    box.next()[0].innerHTML = "Input cannot be empty!";
    box.next().attr("class", "message_warning");
  } else if (/\d/.test(box[0].value)) {
    box.next()[0].innerHTML = "Input should not contain numbers!";
    box.next().attr("class", "message_warning");
  } else {
    box.next()[0].innerHTML = "Input is valid!";
    box.next().attr("class", "message");
  }
}
function emailValidate(box) {
  //   console.log(box[0].value);
  //   console.log(box.next());
  if (box[0].value === "") {
    box.next()[0].innerHTML = "Input cannot be empty!";
    box.next().attr("class", "message_warning");
  } else if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      box[0].value
    )
  ) {
    box.next()[0].innerHTML = "The email address is valid!";
    box.next().attr("class", "message");
  } else {
    box.next()[0].innerHTML = "This is not a valid email address!";
    box.next().attr("class", "message_warning");
  }
}
