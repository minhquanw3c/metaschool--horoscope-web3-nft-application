const { ethers } = require("hardhat");

async function main() {
	const Greeter = await ethers.getContractFactory("Greeter");
	const greeter = await Greeter.deploy("Hello, Hardhat!");

	await greeter.waitForDeployment();

	console.log("Greeter deployed to:", await greeter.getAddress());
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
