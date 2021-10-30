const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    [
      "Jon Snow",
      "Daenerys Targaryen",
      "Sansa Stark",
      // "Arya Stark"], //Names
    ],
    [
      "QmXGjpcPhjQ3XakCo4WjmcV8M9cqNAdYw9kSC5gLPmmwbc",
      "QmNc8gETsvCKnbHHtr1wEssTaeX1zD7q2wqnFwa3zFaN7D",
      "QmZd41XtAeRpWLDUsKeGq52AJU55RTf4QWoMw9hwj4z3tm",
      // "https://imgur.com/TwIedHp",
    ], //Images URL
    [200, 400, 250], //HP values
    [90, 50, 75], //Attack damage values
    "Night King", //boss name
    "QmWaNQKSKMPWBUEtZCt7xowXonozJGQcKJjkZQyacHLutY", //boss image URI
    10000, //boss hp
    70 //boss attack damage
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  // let txn;

  // txn = await gameContract.mintCharacterNFT(0);
  // await txn.wait();
  // console.log("Minted NFT #1");

  // txn = await gameContract.mintCharacterNFT(1);
  // await txn.wait();
  // console.log("Minted NFT #2");

  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();
  // console.log("Minted NFT #3");

  // txn = await gameContract.mintCharacterNFT(3);
  // await txn.wait();
  // console.log("Minted NFT #4");

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // console.log("Done deploying and minting!");

  //Get the value of the NFT's URI.
  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri);
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
