let botaoWhatsApp = document.getElementById("whatsapp")
let numeroWhatsapp = 5524999349684
let textoEnviado = 'Testando'
botaoWhatsApp.addEventListener("click", function() {
  let whatsapplink = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${textoEnviado}`; 
  // Use window.location.href para redirecionar para o novo URL
  window.open(whatsapplink, "_blank")
});
