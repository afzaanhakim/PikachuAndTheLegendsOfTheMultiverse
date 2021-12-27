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
      "https://i.imgur.com/Icd15jl.png", //pikachu
      "https://imgur.com/dWxTpVV.png", //dialga
      "https://imgur.com/6FFzCoL.png", //hooh
      "https://imgur.com/GwWvre2.png", //celebi
      "https://imgur.com/vGzpDxV.png", //mew
      "https://imgur.com/T9T7kPk.png", //mewtwo
      "https://imgur.com/YJrP5SD.png", //rayquaza
      "https://imgur.com/3Hf5gcZ.png", //zapdos
      "https://imgur.com/tOEe1JJ.png", //groudon
      "https://imgur.com/YjFSlsd.png", // giratina
      "https://imgur.com/lQ89J94.png", //deoxyx
      "https://imgur.com/uu7Rf9Y.png", //kyurem
      "https://imgur.com/5YirvMb.png", //virizion
      "https://imgur.com/u6U1FBh.png", //tornadus
      "https://imgur.com/GaLVcXO.png", //reshiram
      "https://imgur.com/SLLp55E.png", //xerneas
      "https://imgur.com/21eglku.png", //silvally
      "https://imgur.com/Z6X3Rgj.png", //cosmoem
      "https://imgur.com/tJBLJS0.png", //zacian
      "https://imgur.com/4bKuCtq.png", //eternatus
      "https://imgur.com/RF52Qzc.png", //galarian moltres
      "https://imgur.com/N2OrjEF.png", //calyrex
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
    ]
  );
  await gameContract.deployed(); //hardhat creating our local network and deploying it
  console.log("Contract deployed to:", gameContract.address);
   //getting address of our deployed contract on the chain

   let txn;
   txn = await gameContract.mintPokemonNFT(13)
   await txn.wait();
console.log("Minted #14")

   //Getting NFT's token URI
   let returnedTokenURI = await gameContract.tokenURI(1);

   console.log("Token URI:", returnedTokenURI);
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
