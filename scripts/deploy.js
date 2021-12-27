const main = async () => {
  //compiling our pokemonnftgame contract and generating files with Hardhat / HRE which is used when hardhat script is run
  const gameContractFactory = await hre.ethers.getContractFactory(
    'PokemonNFTGame'
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
    [
      "https://imgur.com/Mh3c0En.png", //pikachu
      "https://imgur.com/KdHApgB.png", //dialga
      "https://imgur.com/RLyAhFB.png", //hooh
      "https://imgur.com/ZFW0zUW.png", //celebi
      "https://imgur.com/JXe3OIS.png", //mew
      "https://imgur.com/kat7amg.png", //mewtwo
      "https://imgur.com/4fIiLjQ.png", //rayquaza
      "https://imgur.com/WtJ7ojs.png", //zapdos
      "https://imgur.com/2aBJEPM.png", //groudon
      "https://imgur.com/qVPJHgI.png", // giratina
      "https://imgur.com/tR0pseZ.png", //deoxyx
      "https://imgur.com/ZZtjWgL.png", //kyurem
      "https://imgur.com/LOnBZ79.png", //virizion
      "https://imgur.com/EVbSrLG.png", //tornadus
      "https://imgur.com/0iUZCmB.png", //reshiram
      "https://imgur.com/Kd3Q1Tu.png", //xerneas
      "https://imgur.com/GxXuW2P.png", //silvally
      "https://imgur.com/yunU1jQ.png", //cosmoem
      "https://imgur.com/M22x3Hm.png", //zacian
      "https://imgur.com/9A71er8.png", //eternatus
      "https://imgur.com/1BiEkkH.png", //galarian moltres
      "https://imgur.com/8oRoBQd.png", //calyrex
    ],
    [
      72, 183, 193, 183, 183, 193, 191, 166, 183, 268, 98, 225, 168, 147, 183,
      227, 174, 86, 169, 251, 166, 183,
    ],
    [
      112, 301, 263, 210, 210, 330, 312, 253, 296, 206, 345, 270, 192, 265,
      301,275, 198, 54, 279, 305, 251, 162,
    ],
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
    ],"Arceus",
    "https://imgur.com/pXlyFN1.png",
    800,
    225,
    "Creator"
  );
  await gameContract.deployed(); //hardhat creating our local network and deploying it
  console.log("Contract deployed to:", gameContract.address);
   
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
