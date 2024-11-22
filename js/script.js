function Limpar(){
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("ibge").value = "";
}

function meucallback(conteudo){
    if(!("erro" in conteudo)){
    document.getElementById("rua").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("uf").value = conteudo.uf;
    document.getElementById("ibge").value = conteudo.ibge;
    }
    else{
        Limpar();
        alert("CEP não encontrado!");
    }
}

function PesquisaCEP(valor){
    // Permite a Digitação de Apenas Números
    var cep = valor.replace(/\D/g,'');

    if(cep!= ""){
        // Expressão Regular para Aceitar APENAS números de 0 a 0, Com Limite de Tamanho 8
        var validacep = /^[0-9]{8}$/;


        if(validacep.test(cep)){
            // Verificação se é um CEP dentro das Regras Permitidas
            document.getElementById("rua").value = "...";
            document.getElementById("bairro").value = "...";
            document.getElementById("cidade").value = "...";
            document.getElementById("uf").value = "...";
            document.getElementById("ibge").value = "...";

            // Cria um Elemento Javascript
            var script = document.createElement("script");

            // Associa a Function "meucallback"
            script.src = "https://viacep.com.br/ws/" + cep + "/json/?callback=meucallback";

            // Insere o Script no Documento e Carrega o conteúdo das Inputs
            document.body.appendChild(script);
        }
        else{
            Limpar();
            alert("Formato de CEP Invalido!");
        }
    }
    else{
        Limpar();
        alert("Campo Vazio!");
    }
}