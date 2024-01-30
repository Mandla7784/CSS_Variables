//customising css var with js
var root = document.documentElement;
var rootStyles = getComputedStyle(root);
var btnTheme = document.getElementById('btn-theme');
var isBtnClicked = true;
var bodyColor = rootStyles.getPropertyValue('--background');


btnTheme.onclick = function(){

if(isBtnClicked === true){
    root.style.setProperty('--background','black');
    root.style.setProperty('--text-color','white');
    root.style.setProperty('--btn-background','white');
    root.style.setProperty('--btn-color','black');
    root.style.setProperty('--body--background','black')
}else{

    isBtnClicked = false;
}
   
}

