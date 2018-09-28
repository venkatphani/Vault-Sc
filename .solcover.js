module.exports = {
  //   port: 8555,
  //   testCommand: "truffle test --network coverage",
  //   compileCommand: "truffle compile --network coverage",
  norpc: true,
  port: 8555,
  testrpcOptions: "-p 8555 --defaultBalanceEther=1000",
  accounts: 20,
  copyPackages: ["openzeppelin-solidity", "electusaction", "electusvoting", "electusprotocol"]
};
