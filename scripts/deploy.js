const hre = require("hardhat");

async function main() {
	const Horoscope = await hre.ethers.deployContract(
		"contracts/horoscopeNFT.sol:horoscopeNFT"
	);
	const horoscope = await Horoscope.waitForDeployment();

	console.log("Deploying Contract...");
	console.log("Contract deployed to address:", await horoscope.getAddress());
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
