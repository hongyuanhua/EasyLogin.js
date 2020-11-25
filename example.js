const lg = new LoginGenerator();
lg.createDiv("control");
lg.createInput("Email", "email");
lg.createInput("Password", "password");
lg.createSubmit("submit", "Login");
lg.centreLayout();
lg.changeBackground("background.jpg");
