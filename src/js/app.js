let botaoWhatsApp = document.getElementById("whatsapp")//Pega o elemento botão no HTML pelo ID
let numeroWhatsapp = 552499999999//SEU NUMERO AQUI COM CODIGO PAIS E DDD
let textoEnviado = 'SUA MENSAGEM AQUI'


botaoWhatsApp.addEventListener("click", function() { //CRIA E EXECULTA A FUNCAO QUANDO O BOTAO FOR CLICADO
  let whatsapplink = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${textoEnviado}`; 
  // Use window.open(LINK, AÇÃO) para redirecionar para o novo URL EM UMA NOVA ABA
  window.open(whatsapplink, "_blank")
});
