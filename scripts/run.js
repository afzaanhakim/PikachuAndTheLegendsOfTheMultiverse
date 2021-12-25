const main = async () => {
  //compiling our pokemonnftgame contract and generating files with Hardhat / HRE which is used when hardhat script is run
  const gameContractFactory = await hre.ethers.getContractFactory(
    "PokemonNFTGame"
  );
  const gameContract = await gameContractFactory.deploy(
    //names
    [
      "Pikachu",
      "Dialga",
      "Ho-Oh",
      "Celebi",
      "Mew",
      "Mewtwo",
      "Rayquaza",
      "Zapdos",
      "Groudon",
      "Giratina",
      "Deoxys",
      "Kyurem",
      "Virizion",
      "Tornadus",
      "Reshiram",
      "Xerneas",
      "Silvally",
      "Cosmoem",
      "Zacian",
      "Eternatus",
      "Galarian Moltres",
      "Calyrex",
    ],
    //images
    [
      "https://media.giphy.com/media/rrZIZOMy4xL1e/giphy.gif",
      "https://media.giphy.com/media/ZUtfOfEjrgUV2/giphy.gif",
      "https://giphy.com/gifs/pokemon-ho-oh-heartgold-QxlkywzaeKJCE",
      "https://media.giphy.com/media/airM5xYa5HxAfDzFyZ/giphy.gif",
      "https://media.giphy.com/media/jOQ91yKFFdSgu7HZqh/giphy.gif",
      "https://media.giphy.com/media/Q9Sk5zq0PWyxq/giphy.gif",
      "https://media.giphy.com/media/jP4pPl5z1lccFcGvR0/giphy.gif",
      "https://media.giphy.com/media/35KvN2htUgOcx4RdQY/giphy.gif",
      "https://media.giphy.com/media/PxMLQ3ro9Tcmdqv0Wv/giphy.gif",
      "https://media.giphy.com/media/v7b5SQJiLlDFK/giphy.gif",
      "https://media.giphy.com/media/jYpSOnXqy5Spy/giphy-downsized-large.gif",
      "https://media.giphy.com/media/UryPOqYlE3GY8/giphy.gif",
      "http://tonsoffacts.com/wp-content/uploads/2020/05/Virizion_M15.0.jpg",
      "https://areajugones.sport.es/wp-content/uploads/2021/03/pokemon-go-tornadus.jpeg",
      "https://media.giphy.com/media/JnbnlmEYYCQ0w/giphy.gif",
      "https://www.dexerto.com/wp-content/uploads/2021/01/Xerneas-Pokemon.jpg",
      "https://media.giphy.com/media/Q91XCQ2xefMX3XyIy5/giphy.gif",
      "http://tonsoffacts.com/wp-content/uploads/2020/07/Nebby_Cosmoem-1180x664.png",
      "https://media.giphy.com/media/MB0KxRkJsrkW1nT2gg/giphy.gif",
      "https://media.giphy.com/media/QvMu5TQnRl0aKuQp1B/giphy.gif",
      "https://www.gamerguides.com/assets/guides/resize1140x-/168/DLC2_048_Galarian_Moltres.jpg",
      "http://tonsoffacts.com/wp-content/uploads/2020/08/calyrex_pokemon_sword_and_shield_screenshot-1024x576.jpg",
    ],
    //HP Values
    [
      72, 183, 193, 183, 183, 193, 191, 166, 183, 268, 98, 225, 168, 147, 183,
      227, 174, 86, 169, 251, 166, 183,
    ],
    //ATTACK DAMAGE VALUES
    [
      112,
      301,
      263,
      210,
      210,
      330,
      312,
      253,
      296,
      252,
      206,
      345,
      270,
      192,
      265,
      301,
      198,
      54,
      279,
      305,
      251,
      162,
    ],
    //TYPE
    [
      "Electric",
      "Steel/Dragon",
      "Fire/Flying",
      "Psychic/Grass",
      "Psychic",
      "Psychic",
      "Dragon/Flying",
      "Electric/Flying",
      "Ground",
      "Ghost/Dragon",
      "Psychic",
      "Dragon/Ice",
      "Grass/Fighting",
      "Flying",
      "Dragon/Fire",
      "Fairy",
      "Normal",
      "Psychic",
      "Fairy",
      "Poison/Dragon",
      "Fire/Flying",
      "Psychic/Grass",
    ]
  );
  await gameContract.deployed(); //hardhat creating our local network and deploying it
  console.log("Contract deployed to:", gameContract.address); //getting address of our deployed contract on the chain
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log("Deployment Failed", error);
    process.exit(1);
  }
};

runMain();
