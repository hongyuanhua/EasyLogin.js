const lg = new LoginGenerator();
lg.createDiv("control", "body", "");
lg.createTab();
lg.loginModule();
lg.registerModule();
lg.changeTab();
lg.leftLayout();
lg.changeBackground("background.jpg");
inputListener("#lemail", "email");
inputListener("#remail", "email");
inputListener("#fname", "text");
inputListener("#lname", "text");
inputListener("#lpwd", "pwd");
inputListener("#rpwd", "pwd");
inputListener("#rpwd2", "repwd");
