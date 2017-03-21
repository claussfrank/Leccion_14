function agregarEnLista(){
  var nuevoElemento = document.getElementById("nuevoLi").value;
  if(nuevoElemento.length > 0)
  {
    var agregaLi = document.createElement("li");
    agregaLi.id = nuevoElemento;
    agregaLi.innerHTML = nuevoElemento;
    document.getElementById("lista").appendChild(agregaLi);
  }
 return false;
}
