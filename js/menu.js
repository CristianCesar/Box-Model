// MENU
(function() {
  const hamburguesa = document.querySelector('.main-menu__btnMenu__a');
  hamburguesa.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('main-menu__abierto');
  })
}());


$("#btnMenu").click(function(){
  $(".main-menu").after($("#showMenu").slideToggle("fast"))
})
// PRODUCTOS
$("#btnProductos").click(function(){
  if(window.matchMedia("(max-width:950px)").matches){
      $("#btnProductos").after($("#productos").slideToggle("fast"))
  }else{
      $(".main-menu").after($("#productos").slideToggle("fast"))
  }
})
// PERIFERICOS
$("#btnPerifericos").click(function(){
  if(window.matchMedia("(max-width:950px)").matches){
      $("#btnPerifericos").after($("#perifericos").slideToggle("fast"))
  }else{
      $(".main-menu").after($("#perifericos").slideToggle("fast"))
  }
})
// SERVIDORES
$("#btnServidores").click(function(){
  if(window.matchMedia("(max-width:950px)").matches){
      $("#btnServidores").after($("#servidores").slideToggle("fast"))
  }else{
      $(".main-menu").after($("#servidores").slideToggle("fast"))
  }
})
// HOSTING
$("#btnHosting").click(function(){
  if(window.matchMedia("(max-width:950px)").matches){
      $("#btnHosting").after($("#hosting").slideToggle("fast"))
  }else{
      $(".main-menu").after($("#hosting").slideToggle("fast"))
  }
})