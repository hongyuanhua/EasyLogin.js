window.onload = function () {
  const lg = new LoginGenerator();
  lg.createDiv("control", "body", "");
  // lg.createDiv("");
  lg.createTab();
  // lg.createInput("Email", "email");
  // lg.createInput("Password", "password");
  // lg.createSubmit("submit", "Login");
  lg.loginModule();
  //   lg.registerModule();
  //   lg.inputListener();
  lg.changeTab();
  lg.rightLayout();
  lg.changeBackground("background.jpg");
  lg.inputListener();
};
