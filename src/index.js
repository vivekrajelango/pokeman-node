const express = require("express");   

const app = express();

app.get("/", (req, res) => {
    
    const axios = require('axios');
  
    async function getEvolutionChain(pokemonName) {
      
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        console.log('data', response);
        
        const evolutionChain = data.evolution_chain.url;
        const evolutionChainResponse = await axios(evolutionChain);
        const evolutionChainData = await evolutionChainResponse.json();
    
        
        const pokemonName = evolutionChainData.chain.species.name;
        const pokemonVariations = evolutionChainData.chain.evolves_to;
    
        
        const pokemon = { name: pokemonName, variations: [] };
    
        
        const getVariations = (variations) => {
          variations.forEach((variation) => {
            const variationObject = { name: variation.species.name, variations: [] };
            pokemon.variations.push(variationObject);
            if (variation.evolves_to.length > 0) {
              getVariations(variation.evolves_to);
            }
          });
        };
    
        
        getVariations(pokemonVariations);
        return JSON.stringify(pokemon);
      } 
    
    getEvolutionChain("caterpie");
});

app.listen(8080);
