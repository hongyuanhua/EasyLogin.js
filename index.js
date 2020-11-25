"use strict";
function LoginGenerator() {}

LoginGenerator.prototype = {
  createDiv: function (className) {
    const div = document.createElement("div");
    div.className = className;
    const body = $("body");
    body.append(div);
  },

  //   createTab: function(){

  //   }
  createInput: function (title, type) {
    const tag = document.createElement("p");
    const box = document.createElement("input");
    tag.innerHTML = title;
    box.style =
      "border-radius:20px; padding:10px; margin: 10px 0; border:1px solid #999; outline:none";
    box.type = type;
    box.placeholder = title;
    const control = $(".control");
    control.append(tag);
    control.append(box);
  },

  createSubmit: function (type, value) {
    const submit = document.createElement("input");
    const br = document.createElement("br");
    submit.type = type;
    submit.value = value;
    const control = $(".control");
    control.append(br);
    control.append(submit);
  },

  centreLayout: function () {
    // const control = $(".control");
    $(".control")[0].style =
      "width: 340px; background: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); border-radius: 5px;";
  },
  changeBackground(src) {
    const body = $("body");
    body[0].style.backgroundImage = "url(" + src + ")";
  },
};
