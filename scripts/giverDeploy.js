const main = async () => {

  const Giver = await ethers.getContractFactory("giver");
  const giver = await Giver.deploy();

  await giver.deployed()
  console.log("Giver deployed to:", hcfh.address);

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
