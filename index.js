//Gera os textos ao clicar nas imagens 

//função ativa quando o usuário clica no botão de id correspondete

document.getElementById("button-diferenca").onclick = function() {
    document.getElementById("diferenca").style.display = "block";
    document.getElementById('assista').style.display='none';
    document.getElementById('planos').style.display='none';
}

document.getElementById("button-assista").onclick = function() {
    document.getElementById("diferenca").style.display = "none";
    document.getElementById('assista').style.display='block';
    document.getElementById('planos').style.display='none';
}

document.getElementById("button-planos").onclick = function() {
    document.getElementById("diferenca").style.display = "none";
    document.getElementById('assista').style.display='none';
    document.getElementById('planos').style.display='block';
}


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }