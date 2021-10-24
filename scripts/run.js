const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Jon Snow", "Daenerys Targaryen", "Sansa Stark", "Arya Stark"], //Names
    [
      "https://static.wikia.nocookie.net/gameofthrones/images/d/d0/JonSnow8x06.PNG/revision/latest/scale-to-width-down/343?cb=20190714094440",
      "https://static.wikia.nocookie.net/gameofthrones/images/4/4f/Daenerys_Season_8.jpg/revision/latest/scale-to-width-down/301?cb=20190415212013",
      "https://static.wikia.nocookie.net/gameofthrones/images/6/63/QueenSansa.PNG/revision/latest/scale-to-width-down/301?cb=20210215100224",
      "https://static.wikia.nocookie.net/gameofthrones/images/b/be/AryaShipIronThrone.PNG/revision/latest/scale-to-width-down/335?cb=20190520174300",
    ], //Images URL
    [200, 400, 250, 300], //HP values
    [90, 50, 75, 65] //Attack damage values
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;

  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
