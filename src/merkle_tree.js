const {MerkleTree} =  require('merkletreejs');
const keccak256 = require('keccak256');

const allowlist = require ('./allowlist');

let allowListAddresses = allowlist.allowListAddresses();




const leafNodes = allowListAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});

console.log(leafNodes);
console.log(merkleTree);

const rootHash = merkleTree.getRoot();
console.log('WL merkle tree/n', merkleTree.toString());
console.log('root hash: ', rootHash )

const clamingAddress = leafNodes[0]; 



let hexproof = merkleTree.getHexProof(clamingAddress);

let hex_Proof = hexproof.toString();
let hexProof = "[" + hex_Proof + "]";

console.log('hex Proof: ',hexProof)
console.log('hex Proof: ',hexproof)
//let index = allowListAddresses.indexOf(address);
let index = allowListAddresses.indexOf("0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2")

console.log(index)
//console.log(leafNodes[2])

console.log(merkleTree.verify(hexproof, clamingAddress, rootHash));



/*
[
  "0x04a10bfd00977f54cc3450c9b25c9b3a502a089eba0097ba35fc33c4ea5fcb54",
  "0x455e3e1e9d547a8f089eb3c1aa33c26e60ab0f0e0fa382f2b4c41e741c034ba1",
  "0xda2a605bdf59a3b18e24cd0b2d9110b6ffa2340f6f67bc48214ac70e49d12770"
]
*/