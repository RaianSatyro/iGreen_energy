let botaoWhatsApp = document.getElementById("whatsapp")

botaoWhatsApp.addEventListener("click", function() {
  let whatsapplink = "https://api.whatsapp.com/send?phone=5524999349684&text=TESTE"; 
  // Use window.location.href para redirecionar para o novo URL
  window.open(whatsapplink, "_blank")
});
