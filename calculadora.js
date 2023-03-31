
function renderizarGUI(){

const divCalculadora=document.createElement("div");
divCalculadora.setAttribute("id","calculadora");
document.body.appendChild(divCalculadora);

const divPantalla=document.createElement("div");
divPantalla.setAttribute("id","divpantalla");
divCalculadora.appendChild(divPantalla);

const pantalla=document.createElement("input");
pantalla.setAttribute("id","pantalla");
pantalla.setAttribute("type","text");
pantalla.setAttribute("value","0");
pantalla.setAttribute("disabled","true");
divCalculadora.appendChild(pantalla);


const divBotones=document.createElement("div");
divBotones.setAttribute("id","botones");
divCalculadora.appendChild(divBotones);


}
renderizarGUI();