"use strict";
function LoginGenerator() {}

LoginGenerator.prototype = {
  createDiv: function (className, location, context) {
    const div = document.createElement("div");
    div.className = className;
    if (context) {
      div.innerText = context;
    }
    const place = $(location);
    place.append(div);
  },

  createTab: function () {
    this.createDiv("item", ".control", "");
    this.createDiv("active", ".item", "Login");
    this.createDiv("", ".item", "Register");
  },

  changeTab: function () {
    const items = $(".item");
    var item = items[0].getElementsByTagName("div");

    const contents = $(".content");
    const content = contents[0].getElementsByTagName("div");

    for (let i = 0; i < item.length; i++) {
      item[i].onclick = function () {
        for (let j = 0; j < item.length; j++) {
          item[j].className = "";
          content[j].className = "past";
        }
        this.className = "active";
        item[i].index = i;
        content[i].className = "current";
      };
    }
  },
  createInput: function (title, type, location) {
    const tag = document.createElement("p");
    const box = document.createElement("input");
    const message = document.createElement("p");
    tag.innerHTML = title;
    box.className = "textbox";
    message.className = type;
    box.type = type;
    // if (type === "email") {
    //   box.change(this.emailValidate(box.value));
    // }
    box.placeholder = title;
    const place = $(location);
    place.append(tag);
    place.append(box);
    place.append(message);
  },

  inputListener: function () {
    const inputs = $(".textbox")[0];
    // for (let i = 0; i < inputs.length; i++) {
    //   if (inputs[i].type === "email") {
    //     console.log(inputs[i]);
    //     inputs[i].change(this.emailValidate(inputs[i].value));
    //   }
    // }
    console.log(inputs);
    inputs.on(this.emailValidate(inputs.value));
  },
  emailValidate: function (value) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        value
      )
    ) {
      $(".email").innerHTML = "The email address is valid!";
    } else {
      $(".email").innerHTML = "This is not a valid email address!";
    }
  },
  createSubmit: function (type, value, location) {
    const submit = document.createElement("input");
    const br = document.createElement("br");
    submit.type = type;
    submit.value = value;
    submit.className = type;
    const place = $(location);
    place.append(br);
    place.append(submit);
  },

  loginModule: function () {
    this.createDiv("content", ".control", "");
    this.createDiv("current", ".content", "");
    this.createInput("Email", "email", ".current");
    this.createInput("Password", "password", ".current");
    this.createSubmit("submit", "Login", ".current");
  },

  registerModule: function () {
    this.createDiv("past", ".content", "");
    this.createInput("Email", "email", ".past");
    this.createInput("First Name", "text", ".past");
    this.createInput("Last Name", "text", ".past");
    this.createInput("Password", "password", ".past");
    this.createInput("Re-enter Password", "password", ".past");
    this.createSubmit("submit", "Register", ".past");
  },

  centreLayout: function () {
    // const control = $(".control");
    $(".control")[0].style =
      "width: 340px; background: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); border-radius: 5px;";
  },
  leftLayout: function () {
    $(".control")[0].style =
      "width: 340px; background: white; position: absolute; top: 50%; left: 15%; transform: translate(-50%,-50%); border-radius: 5px;";
  },
  rightLayout: function () {
    $(".control")[0].style =
      "width: 340px; background: white; position: absolute; top: 50%; left: 85%; transform: translate(-50%,-50%); border-radius: 5px;";
  },
  changeBackground(src) {
    const body = $("body");
    body[0].style.backgroundImage = "url(" + src + ")";
  },
};
