function BGColorChanger(){
    this.currentBg  = document.body.style.background;
    this.bgcolor = "#ff0000";
}
var com_testnavExtesnion_bgcolorchangerlogin =  new BGColorChanger();
BGColorChanger.prototype.changeBackgroundColor = function(color) {
    document.body.style.background = color;
}

BGColorChanger.prototype.stopExtension = function() {
    document.removeEventListener('keydown', this.onkeyDown);
    document.body.style.background = com_testnavExtesnion_bgcolorchangerlogin.currentBg;
    changeBackgroundColor = undefined;
}

BGColorChanger.prototype.onkeyDown = function(e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (e.ctrlKey && code === 69) { 
        com_testnavExtesnion_bgcolorchangerlogin.changeBackgroundColor(com_testnavExtesnion_bgcolorchangerlogin.bgcolor);
    }
}

BGColorChanger.prototype.startExtension = function() {
    this.buildSigninPage();
    document.addEventListener('keydown', this.onkeyDown);
}

BGColorChanger.prototype.buildSigninPage = function() {
    var tempDiv = document.createElement('div');
    var ifrm = document.createElement('iframe');
    ifrm.style.width = '100%';
    ifrm.style.height = '100%';
    ifrm.setAttribute('src', 'https://interim-tn8-testui.s3.amazonaws.com/ExtLoginPage.html'); 
    tempDiv.appendChild(ifrm);
    window.testnavExtensions.displayView(window.testnavExtensions.VIEW_LOGIN_TYPE,tempDiv.innerHTML);
}

window.addEventListener("message", function(event) {
    /*if (event.origin != 'http://javascript.info') {
      return;
    }*/
  
    console.log( "received: " + event.data );
    console.log("=======cred===== "+event.data.credentials);
    if(event.data && event.data.credentials) {
        if(event.data.credentials === "testnav" || event.data.credentials.indexOf("pearson.com") !== -1) {
            console.log("=======cred===== 1111"+event.data.credentials)
            com_testnavExtesnion_bgcolorchangerlogin.bgcolor = "#ffff00";
        }
        console.log("=======cred===== 2222"+event.data.credentials)
        window.testnavExtensions.trigger(window.testnavExtensions.INSTALLED,{"success":true});
        console.log("=======cred===== Done"+event.data.credentials)
        return;
    }

    if(event.data && event.data.close) {
        window.testnavExtensions.hideDisplayView();
        window.testnavExtensions.trigger(window.testnavExtensions.UNINSTALLED,{"success":false});
        return;
    }
  
    // can message back using event.source.postMessage(...)
});

