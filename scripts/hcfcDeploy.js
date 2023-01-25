const main = async () => {

  const HCFC = await ethers.getContractFactory("HCFC");
  const hcfc = await HCFC.deploy();

  await hcfc.deployed()
  console.log("HCFC deployed to:", hcfc.address);

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
