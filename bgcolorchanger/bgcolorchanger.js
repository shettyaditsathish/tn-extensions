function BGColorChanger(){
    this.currentBg  = document.body.style.background;
}
var bgcolorchanger =  new BGColorChanger();
BGColorChanger.prototype.changeBackgroundColor =  function(color) {
    document.body.style.background = color;
}

BGColorChanger.prototype.stopExtension =  function() {
    document.removeEventListener('keydown', this.onkeyDown);
    document.body.style.background = this.currentBg;
    changeBackgroundColor = undefined;
}

BGColorChanger.prototype.onkeyDown =  function(e) {
    var that = this;
    var code = e.keyCode ? e.keyCode : e.which;
    //Ctrl + e
    if (e.ctrlKey && code === 69    ) { 
        bgcolorchanger.changeBackgroundColor("#ff0000");
    }
}

BGColorChanger.prototype.startExtension =  function() {
    var that = this;
    document.addEventListener('keydown', that.onkeyDown);
}





