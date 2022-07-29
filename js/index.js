function revelarResposta() {
  var resposta = document.querySelector("#resposta");
  resposta.classList.toggle("blur");
}

function proximaPergunta(proximaPergunta) {
  var pergunta = document.querySelector("#cardContainer");
  pergunta.innerHTML="";

  var cardDiv = document.createElement("div");

  cardDiv.classList.add("card", "animate__animated", "animate__flipInX");

  cardDiv.innerHTML=`
    <div class="card-pergunta centralizar">
      <h2>O que é ${proximaPergunta.title}?</h2>
    </div>

    <!-- Resposta do card -->
    <div id="resposta" class="card-resposta centralizar blur">
      <p>${proximaPergunta.description}</p>
    </div>
    `;

  pergunta.appendChild(cardDiv);
}

function buscarInformacao() {
  fetch("https://flash.quickstaart.com/random")
  .then(function(resultado) {
  return resultado.json()
  })
  .then(function(resultadoJson) {
  proximaPergunta(resultadoJson)
  });
}

window.addEventListener("load", buscarInformacao())
