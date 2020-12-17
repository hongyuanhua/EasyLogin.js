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
  createInput: function (id, title, type, location) {
    const tag = document.createElement("p");
    const box = document.createElement("input");
    const message = document.createElement("span");
    tag.innerHTML = title;
    box.className = "textbox";
    message.className = "message_warning";
    box.type = type;
    box.placeholder = title;
    box.id = id;
    const place = $(location);
    place.append(tag);
    place.append(box);
    place.append(message);
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

  createButton: function (value, location) {
    const button = document.createElement("button");
    // button.value = value;
    button.innerHTML = value;
    button.onclick = function () {
      openLoginForm();
    };
    const place = $(location);
    place.append(button);
  },

  createPopup_close: function () {
    this.createDiv("close", ".control", "×");
    $(".close")[0].onclick = function () {
      closeLoginForm();
    };
  },

  loginModule: function () {
    this.createDiv("content", ".control", "");
    this.createDiv("current", ".content", "");
    this.createInput("lemail", "Email", "email", ".current");
    this.createInput("lpwd", "Password", "password", ".current");
    this.createSubmit("submit", "Login", ".current");
  },

  registerModule: function () {
    this.createDiv("past", ".content", "");
    this.createInput("remail", "Email", "email", ".past");
    this.createInput("fname", "First Name", "text", ".past");
    this.createInput("lname", "Last Name", "text", ".past");
    this.createInput("rpwd", "Password", "password", ".past");
    this.createInput("rpwd2", "Re-enter Password", "password", ".past");
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

function openLoginForm() {
  document.body.classList.add("showLoginForm");
}

function closeLoginForm() {
  document.body.classList.remove("showLoginForm");
}
