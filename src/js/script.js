document.addEventListener('DOMContentLoaded', function(){
    //Lista de Declarações a serem manipuladas
    const formulario = document.querySelector("#forms");
    const inputNome = document.querySelector("#idNome");
    const btnAdicionar = document.querySelector("#btnAdicionar");
    
    //Função para Adicionar um nome na Lista
    let arrayNomes = [];

    function addNomesArray(nome){
        if(nome != undefined && nome != ""){
            arrayNomes.push(nome);
            renderizaArray();
            inputNome.value = "";
            console.log("Nome inserido com Sucesso");
        }else{
            console.log("Insir um Nome!");
        }
    }

    //Função para imprimir os dados de forma eficiente
    function renderizaArray(){
        lista.innerHTML = "";
        for(let i = 0; i < arrayNomes.length; i++){
            const liElement = document.createElement("li");
            liElement.textContent = arrayNomes[i];
            lista.appendChild(liElement);
        }
    }

    //Chamando as funções
    btnAdicionar.addEventListener("click", (event)=>{
        event.preventDefault();
        addNomesArray(inputNome.value);
    })
})