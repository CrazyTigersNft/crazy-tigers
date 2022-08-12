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

const clamingAddress = leafNodes[4]; 



let hexproof = merkleTree.getHexProof(clamingAddress);

let hex_Proof = hexproof.toString();
let hexProof = "[" + hex_Proof + "]";

console.log('hex Proof: ',hexProof)
console.log('hex Proof: ',hexproof)
//let index = allowListAddresses.indexOf(address);
let index = allowListAddresses.indexOf("0x499A8EE5E07d9105F260d5baaF45c961B4623637")

console.log(index)
//console.log(leafNodes[2])

console.log(merkleTree.verify(hexproof, clamingAddress, rootHash));



// 0xc957addaa6f87602fd4d062f6bd02274b80e1d020984769655ad00c1f44771a4
// 0xb577a8e06a83235442a49f05c597cb8c4e932386d3aafa1dd0821abccf315815

// 0xeb01defd96711e47f18e48c44a2411e66ad2a5a8802359f156342fa836adcdfc
/*

[
  "0xdc941e8c4eba798a431ca40726ca69bda8c7067f1690340e5b0a08d83d00d9cb",
  "0x9d76a2c24e72f2d68b46ce02eb5dc46b432244cb81503089d42f24e3fed5464b"
]

*/

//["0xafe7c546eb582218cf94b848c36f3b058e2518876240ae6100c4ef23d38f3e07","0x9d76a2c24e72f2d68b46ce02eb5dc46b432244cb81503089d42f24e3fed5464b"]