function consultarEndereco() {
    const cep = document.querySelector("input[name=cep]");
    const value = cep.value.replace(/[^0-9]+/, ''); // Remove caracteres não numéricos
 
    if (value.length === 8) { // Verifica se o CEP tem 8 dígitos
        const url = `https://viacep.com.br/ws/${value}/json/`;
 
        fetch(url)
            .then(response => response.json())
            .then(json => {
                if (json.erro) {
                    alert("CEP não encontrado!");
                } else {
                    document.querySelector('input[name=rua]').value = json.logradouro;
                    document.querySelector('input[name=bairro]').value = json.bairro;
                    document.querySelector('input[name=cidade]').value = json.localidade;
                    document.querySelector('input[name=uf]').value = json.uf;
                    document.querySelector('input[name=pais]').value = 'Brasil'; // País fixo
                }
            })
            .catch(err => alert("Erro ao buscar o CEP."));
    } else {
        alert("Por favor, insira um CEP válido com 8 dígitos.");
    }
}
 
function consultarEndereco() {
    const cep = document.querySelector("input[name=cep]");
    const value = cep.value.replace(/[^0-9]+/, ''); // Remove caracteres não numéricos
 
    if (value.length === 8) { // Verifica se o CEP tem 8 dígitos
        const url = `https://viacep.com.br/ws/${value}/json/`;
 
        fetch(url)
            .then(response => response.json())
            .then(json => {
                if (json.erro) {
                    alert("CEP não encontrado!");
                } else {
                    document.querySelector('input[name=rua]').value = json.logradouro;
                    document.querySelector('input[name=bairro]').value = json.bairro;
                    document.querySelector('input[name=cidade]').value = json.localidade;
                    document.querySelector('input[name=uf]').value = json.uf;
                    document.querySelector('input[name=pais]').value = 'Brasil'; // País fixo
                }
            })
            .catch(err => alert("Erro ao buscar o CEP."));
    } else {
        alert("Por favor, insira um CEP válido com 8 dígitos.");
    }
}
 
 