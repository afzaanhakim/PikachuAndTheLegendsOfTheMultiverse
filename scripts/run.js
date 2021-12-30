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
      "https://cloudflare-ipfs.com/ipfs/QmbsWwzGbHyYRqZpx5e4v7anS9MBsz1ai9wrr3VzD3kB6w", //pikachu
      "https://cloudflare-ipfs.com/ipfs/QmSWosLc34ec773ZhcnKJaQ3qTp4UDGDMJpKQShU59xNyA", //dialga
      "https://cloudflare-ipfs.com/ipfs/QmZyGYMZwmxYCvV2r98UvEX8M8ot7yX1DVTKXjLAzPArYZ", //hooh
      "https://cloudflare-ipfs.com/ipfs/QmW4k3oRsxb35KLGjbAwBP5nx1BCpeRWCN6TnjowyaMbNn", //celebi
      "https://cloudflare-ipfs.com/ipfs/QmYubr9TgHivfiUHALS4aSCV71As9SpQbTdUjHxTHZZRD9", //mew
      "https://cloudflare-ipfs.com/ipfs/QmZyH8Mt4bmLfDMXh55UcJiPByxR8Ago2aXx8jwcfYaiRE", //mewtwo
      "https://cloudflare-ipfs.com/ipfs/QmWfwuzUHMJ6U9nrNhQzGvPUC6nBVN9G5TENLZ2mduZ4Zb", //rayquaza
      "https://cloudflare-ipfs.com/ipfs/QmcdCXb3hVkeDdKQukwtqjPA4hthauAdSTcHfJkRuRhToT", //zapdos
      "https://cloudflare-ipfs.com/ipfs/QmXqGbaNfJbnDotf8K4qEt7tfM1koNfm9LiGnSs4qPvERG", //groudon
      "https://cloudflare-ipfs.com/ipfs/QmYSvLUyv8XYBeGeMV39HApmWT7Kph1J13XaMaxiY3RYBT", // giratina
      "https://cloudflare-ipfs.com/ipfs/QmVrxfxgaZR3uWN3sscgn6WZ3ZNF47Y9xyBcfRQ5nTbP6c", //deoxyx
      "https://cloudflare-ipfs.com/ipfs/Qmdrqt5v2LPhSEHnWpLz9rX3KwA46Sgr2pusrVtdUAH6mh", //kyurem
      "https://cloudflare-ipfs.com/ipfs/QmVuxJpr6B1RAh1sHSzmD5pASzHzmKSQqw2qpe7oXN54pk", //virizion
      "https://cloudflare-ipfs.com/ipfs/QmTE9pa5Y4b1XdQ5PTnSoYGjBAR1JvYtdQ2J1LyWu15yhT", //tornadus
      "https://cloudflare-ipfs.com/ipfs/QmWe1xiEF5GCNTEBvtZsJHEymx8AXV3TVifttvHqesHBDQ", //reshiram
      "https://cloudflare-ipfs.com/ipfs/QmWzogdssawk9EE6MxhZpsZ5x1cwN21ckFEESHJfhtp6wS", //xerneas
      "https://cloudflare-ipfs.com/ipfs/QmT2HXFUbjQaXK9pWn6SPMZZSvZ8vDwRxgMUieZK4CZS9d", //silvally
      "https://cloudflare-ipfs.com/ipfs/QmSU2zT1iLFYarguSdpEsXNcx7uZVKyXSuvLtq5qyyhckk", //cosmoem
      "https://cloudflare-ipfs.com/ipfs/QmYodE72iCWVtLEvZaYdZaoF39CNF5CGskb92Co3wDqoeT", //zacian
      "https://cloudflare-ipfs.com/ipfs/QmPMneZ9g1BB8z4MDNDoLYoQctsMTMgh17fSTCgqe57Uxv", //eternatus
      "https://cloudflare-ipfs.com/ipfs/Qmarfm8JWFdpZgJaX8nrqmEvcSRAaEiFchbiTVSHpLryNb", //galarian moltres
      "https://cloudflare-ipfs.com/ipfs/QmWF3QRcSNSdEbpXEmLzwb2bvx4UCBZ9xfiFbPPM1KkBDg", //calyrex
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
    ],
    "Arceus",
    "https://cloudflare-ipfs.com/ipfs/QmRDqcNVBcGTxiMwTj6ff17StGP94HRmkQFqkR7xLPbiZc",
    800,
    225,
    "Creator"
  );
  await gameContract.deployed(); //hardhat creating our local network and deploying it
  console.log("Contract deployed to:", gameContract.address);
  //getting address of our deployed contract on the chain

  let txn;
  txn = await gameContract.mintPokemonNFT(13);
  await txn.wait();
  console.log("Minted #14");

  txn = await gameContract.attackGod();
  await txn.wait();
  console.log("Attacked God Once");
  txn = await gameContract.attackGod();
  await txn.wait();
  console.log("Attacked God Twice");
  //Getting NFT's token URI
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
