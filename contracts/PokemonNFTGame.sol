// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// NFT contract inheritance

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Helper functions OpenZeppelin provides.
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";
// Helper we wrote to encode in Base64
import "./libraries/Base64.sol";

contract PokemonNFTGame is ERC721 {
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
  // The tokenId is the NFTs unique identifier, it's just a number that goes
  // 0, 1, 2, 3, etc.
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  PokemonAttributes[] defaultPokemons; //storing each character in an array

  //creating two mappings (state variables) one for the tokenId => nbftAttributes and the other for the address of the ownerr who owns the nft and reff it later
  mapping(uint256 => PokemonAttributes) public nftHolderAttributes;
  struct MultiverseGod {
    string name;
    string imageURI;
    uint256 hp;
    uint256 maxHp;
    uint256 attackDamage;
    string godType;
  }

  MultiverseGod public multiverseGod;

  mapping(address => uint256) public nftHolders;
  event PokemonNFTMinted(address sender, uint256 tokenId, uint256 pokemonIndex);
  event AttackComplete(uint256 newGodHp, uint256 newPlayerHp);

  constructor(
    string[] memory pokemonNames,
    string[] memory pokemonImageURIs,
    uint256[] memory pokemonHp,
    uint256[] memory pokemonAttackDmg,
    string[] memory pokemonTypes,
    string memory godName,
    string memory godImageURI,
    uint256 godHp,
    uint256 godAttackDamage,
    string memory godType
  )
    //special indentifiers symbol for NFT

    ERC721("Pikachu And The Monsters Of The Multiverse", "Multiverse Legendary")
  {
    // Initialize the boss. Save it to our global "bigBoss" state variable.
    multiverseGod = MultiverseGod({
      name: godName,
      imageURI: godImageURI,
      hp: godHp,
      maxHp: godHp,
      attackDamage: godAttackDamage,
      godType: godType
    });
    console.log(
      "Done initializing boss %s w/ HP %s, img %s",
      multiverseGod.name,
      multiverseGod.hp,
      multiverseGod.imageURI
    );

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
        "Done initializing %s w/ type %s, image %s",
        c.name,
        c.pokemonType,
        c.imageUri
      );
    }

    _tokenIds.increment(); //incrementing token ids
  }

  function mintPokemonNFT(uint256 _pokemonIndex) external {
    // Get current tokenId (starts at 1 since we incremented in the constructor).
    uint256 newItemId = _tokenIds.current();

    _safeMint(msg.sender, newItemId); //assigns the token id to the owners eth address

    //mapping tokenId => character attributes
    nftHolderAttributes[newItemId] = PokemonAttributes({
      pokemonIndex: _pokemonIndex,
      name: defaultPokemons[_pokemonIndex].name,
      imageUri: defaultPokemons[_pokemonIndex].imageUri,
      pokemonType: defaultPokemons[_pokemonIndex].pokemonType,
      hp: defaultPokemons[_pokemonIndex].hp,
      maxHp: defaultPokemons[_pokemonIndex].maxHp,
      attackDamage: defaultPokemons[_pokemonIndex].attackDamage
    });

    console.log(
      "Minted NFT w/ tokenId %s and characterIndex %s",
      newItemId,
      _pokemonIndex
    );

    // Keep an easy way to see who owns what NFT.
    nftHolders[msg.sender] = newItemId;

    // Increment the tokenId for the next person that uses it.
    _tokenIds.increment();

    emit PokemonNFTMinted(msg.sender, newItemId, _pokemonIndex);
  }

  function tokenURI(uint256 _tokenId)
    public
    view
    override
    returns (string memory)
  {
    PokemonAttributes memory pokeAttributes = nftHolderAttributes[_tokenId];

    string memory strHp = Strings.toString(pokeAttributes.hp);
    string memory strMaxHp = Strings.toString(pokeAttributes.maxHp);
    string memory strAttackDamage = Strings.toString(
      pokeAttributes.attackDamage
    );

    string memory json = Base64.encode(
      bytes(
        string(
          abi.encodePacked(
            '{"name": "',
            pokeAttributes.name,
            " -- NFT #: ",
            Strings.toString(_tokenId),
            '", "description": "This is an NFT that lets people play in the game Pikachu And The Legends Of The Multiverse!", "image": "',
            pokeAttributes.imageUri,
            '", "type":"',
            pokeAttributes.pokemonType,
            '", "attributes": [{ "trait_type": "Health Points", "value": ',
            strHp,
            ', "max_value":',
            strMaxHp,
            '}, { "trait_type": "Attack Damage", "value": ',
            strAttackDamage,
            "} ]}"
          )
        )
      )
    );
    string memory output = string(
      abi.encodePacked("data:application/json;base64,", json)
    );
    return output;
  }

  function attackGod() public {
    uint256 nftTokenIdOfPlayer = nftHolders[msg.sender];
    // Get the state of the player's NFT.
    PokemonAttributes storage player = nftHolderAttributes[nftTokenIdOfPlayer];
    console.log(
      "\nPlayer w/ character %s about to attack. Has %s HP and %s AD",
      player.name,
      player.hp,
      player.attackDamage
    );
    console.log(
      "Boss %s has %s HP and %s AD",
      multiverseGod.name,
      multiverseGod.hp,
      multiverseGod.attackDamage
    );

    require(
      player.hp > 0,
      "Error: Pokemon Must Have HP to Attack The Creator."
    ); //player should have HP to attack god

    require(
      multiverseGod.hp > 0,
      "Error: Creator must have HP to attack Player." //God should HP to attack
    );

    if (multiverseGod.hp < (player.attackDamage / 10)) {
      multiverseGod.hp = 0;
    } else {
      multiverseGod.hp = multiverseGod.hp - (player.attackDamage / 10);
    }

    if (player.hp < (multiverseGod.attackDamage / 10)) {
      player.hp = 0;
    } else {
      player.hp = player.hp - (multiverseGod.attackDamage / 10);
    }

    // Console for ease.
    console.log("Player attacked boss. New boss hp: %s", multiverseGod.hp);
    console.log("Boss attacked player. New player hp: %s\n", player.hp);

    emit AttackComplete(multiverseGod.hp, player.hp);
  }

  function checkIfUserHasNFT() public view returns (PokemonAttributes memory) {
    // Get the tokenId of the user's character NFT

    uint256 playerNftTokenId = nftHolders[msg.sender];

    // If the user has a tokenId in the map, return their character.

    if (playerNftTokenId > 0) {
      return nftHolderAttributes[playerNftTokenId];
    } else {
      PokemonAttributes memory emptyStruct;
      return emptyStruct;
    }
  }

  //getting all default pokemon!

  function getAllDefaultPokemon()
    public
    view
    returns (PokemonAttributes[] memory)
  {
    return defaultPokemons;
  }

  //function to get data of God pokemon
  function getGod() public view returns (MultiverseGod memory) {
    return multiverseGod;
  }
}
