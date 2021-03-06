/*Desafio2.1
    <button class='botao' id='btnCriar' onClick="criarQuadrado()">Criar</button>

    <div>
        <!--Desafio 2.4-->
        <input type="text" name="nome" id="nome" />
        <button onClick="adicionar()">Adicionar</button>
    </div>*/

//Desafio 1.1
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}
console.log(`O usuário mora em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com nº ${endereco.numero}`);

//Desafio 1.2
var x = 1
var y = 20

while (x < y) {
    if (x % 2 == 0) {
        console.log('O valor par é ' + x)
    }
    x++
}

//Desafio 1.3
function temHabilidade(skills) {
    if (skills.indexOf("Javascript") > -1) {
        console.log("true")
    } else {
        console.log("false")
    }
}
var skills = ["Javascript", "ReactJS", "React Native"]
temHabilidade(skills) // true ou false



//Desafio 1.4
function experiencia(anos) {
    if (anos <= 1) {
        console.log("Seu nível é Iniciante")
    } else if (anos <= 3) {
        console.log("Seu nível é Intermediario")
    } else if (anos <= 6) {
        console.log("Seu nível é Avançado")
    } else {
        console.log("Seu nível é Jedi Master")
    }
}
var anosEstudo = 6
experiencia(anosEstudo)

//Desafio 1.5
var usuarios = [{
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
}, {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
}];

for (var usuarios of usuarios) {
    console.log(`O ${usuarios.nome} possui as habilidades: ${usuarios.habilidades.join(', ')}.`)
};

//Desafio 2.1 e 2.2
var btnCriar = document.querySelector('#btnCriar')
btnCriar.style.color = '#fff'
btnCriar.style.fontWeight = 'bold';
btnCriar.style.backgroundColor = '#424242';
btnCriar.style.width = '200px';
btnCriar.style.height = '40px';
btnCriar.style.marginLeft = '45%';

btnCriar.onclick = function criarQuadrado() {
    var boxElement = document.createElement("div")
    boxElement.style.width = '180px'
    boxElement.style.height = '180px'
    boxElement.style.margin = '10px'
    boxElement.style.borderRadius = '10px'
    boxElement.style.backgroundColor = '#268'
    boxElement.addEventListener('mouseover', function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        boxElement.style.backgroundColor = color;
    })
    boxElement.classList.add('box')
    document.body.appendChild(boxElement);
}