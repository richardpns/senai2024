
const key = "eb1fcd935ede98a7c4bcc9f082499981"

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em" + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "Cº"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    
}

function buscarCidade(cidade) {
    const dados = await fetch ('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}')
}

