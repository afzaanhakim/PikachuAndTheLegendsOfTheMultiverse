// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract PokemonNFTGame {
  // storing pokemon data in a struct
  //each pokemonattribute holds the base attribute of each chaarcter
  struct PokemonAttributes {
    uint256 pokemonIndex;
    string name;
    string imageUri;
    string pokemonType;
    uint256 hp;
    uint256 maxHp;
    uint256 attackDamage;
  }

  PokemonAttributes[] defaultPokemons; //storing each character in an array

  constructor(
    string[] memory pokemonNames,
    string[] memory pokemonImageURIs,
    uint256[] memory pokemonHp,
    uint256[] memory pokemonAttackDmg,
    string[] memory pokemonTypes
  ) {
    for (uint256 i = 0; i < pokemonNames.length; i += 1) {
      defaultPokemons.push(
        PokemonAttributes({
          pokemonIndex: i,
          name: pokemonNames[i],
          imageUri: pokemonImageURIs[i],
          pokemonType: pokemonTypes[i],
          hp: pokemonHp[i],
          maxHp: pokemonHp[i],
          attackDamage: pokemonAttackDmg[i]
        })
      );

      PokemonAttributes memory c = defaultPokemons[i];
      console.log(
        "Done initializing %s w/ type %s, img %s",
        c.name,
        c.pokemonType,
        c.imageUri
      );
    }
  }
}
