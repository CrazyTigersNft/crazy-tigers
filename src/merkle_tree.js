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
let index = allowListAddresses.indexOf("0x499A8EE5E07d9105F260d5baaF45c961B4623637")

console.log(index)
//console.log(leafNodes[2])

console.log(merkleTree.verify(hexproof, clamingAddress, rootHash));



// 0xc957addaa6f87602fd4d062f6bd02274b80e1d020984769655ad00c1f44771a4
// 0xb577a8e06a83235442a49f05c597cb8c4e932386d3aafa1dd0821abccf315815

// 0xeb01defd96711e47f18e48c44a2411e66ad2a5a8802359f156342fa836adcdfc
/*

[
  "0xf6d82c545c22b72034803633d3dda2b28e89fb704f3c111355ac43e10612aedc",
  "0x3cd7024bf0d0699182ae75ccf93ed6a7b49dfd73195cc6e597d26888b8d5d3bd"
]

[0x472b5b59abd919088eff965a86b6e05afd4849e2fce88d70fa59937216e6452b,0xb0837f25b047613c219792e05114dd21f75e905a4c34300909882e474effa8c5,0xe7dd810acf7c2a0b66636c8eb0b505ea70dde018ed2cf10b5cbb899e61b6bcd4,0xda2a605bdf59a3b18e24cd0b2d9110b6ffa2340f6f67bc48214ac70e49d12770]
[0xec5bff066ef4f43eaff0b34132c554033c42da16b46ffbfa1bd84120a4186734,0x350ad63447313efdab75cb653686f81d1514809da8eb11f3e37bea0fae092b48,0xe7dd810acf7c2a0b66636c8eb0b505ea70dde018ed2cf10b5cbb899e61b6bcd4,0xda2a605bdf59a3b18e24cd0b2d9110b6ffa2340f6f67bc48214ac70e49d12770]

[
  "0x04a10bfd00977f54cc3450c9b25c9b3a502a089eba0097ba35fc33c4ea5fcb54",
  "0x01f5cea9396b94b4f3b94dd8d4f7ee42b00a0fd863b0fdd44e59ff0ece356746",
  "0xc957addaa6f87602fd4d062f6bd02274b80e1d020984769655ad00c1f44771a4",
  "0xda2a605bdf59a3b18e24cd0b2d9110b6ffa2340f6f67bc48214ac70e49d12770"
]

[
  "0x999bf57501565dbd2fdcea36efa2b9aef8340a8901e3459f4a4c926275d36cdb",
  "0x01f5cea9396b94b4f3b94dd8d4f7ee42b00a0fd863b0fdd44e59ff0ece356746",
  "0xc957addaa6f87602fd4d062f6bd02274b80e1d020984769655ad00c1f44771a4",
  "0xda2a605bdf59a3b18e24cd0b2d9110b6ffa2340f6f67bc48214ac70e49d12770"
]

//0xd525b15b95c16efa91ff391b696a1579cef04436179a48cfcab97dbc95d0624e

0x9c1cde6d17a5b74237388b4be3341f91221511d5b2d877f8f0f59e00b0e31af3
*/

//["0xafe7c546eb582218cf94b848c36f3b058e2518876240ae6100c4ef23d38f3e07","0x9d76a2c24e72f2d68b46ce02eb5dc46b432244cb81503089d42f24e3fed5464b"]