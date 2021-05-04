const inputNomePokemon = document.getElementById("nome-pokemon");
const botaoBuscar = document.getElementById("botao-buscar");
const imagemPokemon = document.getElementById("imagem-pokemon");
const erroDeBusca = document.getElementById("erro-busca");
const pokeApiUrl = "https://pokeapi.co/api/v2"

botaoBuscar.onclick = async function() {
    try {
        erroDeBusca.innerHTML = "";
        const nomeDoPokemon = inputNomePokemon.value.toLowerCase().trim();
        const response = await fetch(`${pokeApiUrl}/pokemon/${nomeDoPokemon}`);
        const data = await response.json();
        const imagemDoPokemon = data.sprites.other["official-artwork"].front_default;
        imagemPokemon.src = imagemDoPokemon;
    } catch(e) {
        imagemPokemon.src = "";
        erroDeBusca.innerHTML = "Pokemon não encontrado!"
    }
}