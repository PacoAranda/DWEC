function init(){
    document.getElementById("pulsador").addEventListener("click", function(){
        cambiarTexto();
    });
    document.getElementById("borrar").addEventListener("click", function(){
        location.reload();
    })
}
function cambiarTexto(){
    document.getElementById(`texto`).innerHTML = "<p style='color:red'>hola mundo</p>"
}
