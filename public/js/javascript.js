//jshint esversion:6

var BotonEnviar=document.querySelector(".botonEnviar");
BotonEnviar.addEventListener("click", function(){
  let tipoCasas=formulario.tipoVivienda.value;
  let annos=formulario.annos.value;
  let interes=formulario.interes.value;

  if((tipoCasas=="...")||(annos=="...")||(interes=="...")){
    alert("El formulario esta incompleto");
    return false;
  }
  formulario.submit();
});

//Voy a poner a escuchar los cambios
//que realice el usuario en la lista del
//tipo de vivienda para cambiar la foto

var tipoVivienda = formulario.tipoVivienda;
tipoVivienda.addEventListener("change", function() {
  //Cambiamos la foto de la Vivienda
  var nuevaVivienda = formulario.tipoVivienda.value;
  //Selecciono la foto
  var foto = document.querySelector(".fotoCasa");
  //cambio la imagen de la foto
  switch (nuevaVivienda) {
    case "piso":
      foto.src = "../imagenes/piso.jpg";
      break;
    case "chalet":
      foto.src = "../imagenes/chalet.jpg";
      break;
    case "duplex":
      foto.src = "../imagenes/duplex.jpg";
      break;
  }

});
