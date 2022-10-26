var agora = new Date()
var ano = Number(agora.getFullYear())

function clicar() {
    var anonasc = Number(window.document.getElementById('txtn').value)
    var sexomasc = Boolean(window.document.getElementById('masc').value)
    var txtidade = window.document.getElementById('txtidade')
    
    var idade = ano - anonasc
    
    txtidade.innerHTML = `Dectamos ${sexomasc} com ${idade} anos`
}