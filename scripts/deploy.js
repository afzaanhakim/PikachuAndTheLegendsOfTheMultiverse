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
    [
      "https://i.imgur.com/Icd15jl.png",
      "https://imgur.com/dWxTpVV.png",
      "https://imgur.com/6FFzCoL.png",
      "https://imgur.com/GwWvre2.png",
      "https://imgur.com/vGzpDxV.png",
      "https://imgur.com/T9T7kPk.png",
      "https://imgur.com/YJrP5SD.png",
      "https://imgur.com/3Hf5gcZ.png",
      "https://imgur.com/tOEe1JJ.png",
      "https://imgur.com/YjFSlsd.png",
      "https://imgur.com/lQ89J94.png",
      "https://imgur.com/uu7Rf9Y.png",
      "https://imgur.com/5YirvMb.png",
      "https://imgur.com/u6U1FBh.png",
      "https://imgur.com/GaLVcXO.png",
      "https://imgur.com/SLLp55E.png",
      "https://imgur.com/21eglku.png",
      "https://imgur.com/Z6X3Rgj.png",
      "https://imgur.com/tJBLJS0.png",
      "https://imgur.com/4bKuCtq.png",
      "https://imgur.com/RF52Qzc.png",
      "https://imgur.com/N2OrjEF.png",
    ],
    [
      72, 183, 193, 183, 183, 193, 191, 166, 183, 268, 98, 225, 168, 147, 183,
      227, 174, 86, 169, 251, 166, 183,
    ],
    [
      112, 301, 263, 210, 210, 330, 312, 253, 296, 206, 345, 270, 192, 265, 301,
      275, 198, 54, 279, 305, 251, 162,
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
  txn = await gameContract.mintPokemonNFT(18);
  await txn.wait();
  console.log("Minted NFT #19");

  let returnedTokenURI = await gameContract.tokenURI(1);

  console.log("Token URI:", returnedTokenURI);

  console.log("Done deploying and minting!");
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
