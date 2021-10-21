var txt=" Portafolio - Corporación Muñoz |";
var espera=200;
var refresco=null;
function rotulo_title() {
    document.title=txt;
    txt=txt.substring(1,txt.length)+txt.charAt(0);        
    refresco=setTimeout("rotulo_title()",espera);}
rotulo_title();

function MM_displayStatusMsg(_msgStr) {
  document.MM_returnValue = true;
}

function MM_openBrWindow(theURL,winName,features) {
  window.open(theURL,winName,features);
}