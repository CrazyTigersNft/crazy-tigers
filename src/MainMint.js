import React, {useState} from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import crazytigers from './CrazyTigers.json'
import { Buffer } from "buffer/";
window.Buffer = window.Buffer || Buffer;
//import {MerkleTree} from "merkletreejs";
//import keccak256 from "keccak256";
//import allowListAddresses from './allow.js';

const {MerkleTree} =  require('merkletreejs');
const keccak256 = require('keccak256');
//const SHA256 = require('crypto-js/sha256')
const allowlist = require ('./allowlist');

const crazyTigersAddress = '0x46f678733dbe4cbc8669F52FF9730897B2d12A50';
//const allowList = allowListAddresses();
const allowList = allowlist.allowListAddresses();
let leafNodes = allowList.map(addr => keccak256(addr));
let merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});




const MainMint = ({ accounts, setAccounts }) => {

    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function getTotalSupply() {
        
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            crazyTigersAddress,
            crazytigers.abi,
            signer
        );
        try {
            const response = await contract.totalSupply();
            alert(`${response}/3333 Crazy Tigers have been MInted!`);
            console.log('response: ', response)
        } 
        catch (err) {
            console.log('error', err )
        }
    
    }

/*   
    async function getAccountIndex() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        let address = await signer.getAddress();
        //console.log(address);
        let index = allowList.indexOf(address);
        let isOnAllowed = false;
        
        if (index >= 0) {
            isOnAllowed = true;
            
        } else {
            isOnAllowed = false;
        }

        return isOnAllowed;
    } 
*/
    

    
/*    
    async function handlePublicMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                crazyTigersAddress,
                crazytigers.abi,
                signer
            );
            try {
                const response = await contract.publicMint(BigNumber.from(mintAmount), {value: ethers.utils.parseEther((0.009 * mintAmount).toString())});
                console.log('response: ', response)
            } 
            catch (err) {
                console.log('error', err )
            }
        }
    }
*/
/*
    async function handleVipMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = (await signer.getAddress()).toString();
            console.log(address)
            let index = allowList.indexOf(address);
            console.log(index)
            const contract = new ethers.Contract(
                crazyTigersAddress,
                crazytigers.abi,
                signer
            );
            if (index === -1) {
                alert('You must be allowlisted to mint these Crazy Tigers!!!');
                return;
            } else {
                try {
                    let clamingAddress = leafNodes[index];
                    let hexProof = merkleTree.getHexProof(clamingAddress);
                    const response = await contract.vipMint(BigNumber.from(mintAmount), hexProof);
                    console.log('response: ', response)
                } 
                catch (err) {
                    console.log('error', err )
                    
                }
            }
            
        }
    }
*/
    async function handleAllowListMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = (await signer.getAddress()).toString();
            console.log(address)
            let index = allowList.indexOf(address);
            console.log(index)
            
            const contract = new ethers.Contract(
                crazyTigersAddress,
                crazytigers.abi,
                signer
            );
            if (index === -1) {
                alert('You must be allowlisted to mint these Crazy Tigers!!!');
                return;
            } else {
                try {
                    let clamingAddress = leafNodes[index];
                    let hexProof = merkleTree.getHexProof(clamingAddress);
                    const response = await contract.allowListMint(BigNumber.from(mintAmount), hexProof, {value: ethers.utils.parseEther((0.009 * mintAmount).toString())});
                    console.log('response: ', response)
                } 
                catch (err) {
                    console.log('error', err )
                    
                }
            }  
        }
    }


    const handleDecrement = () => {
        if (mintAmount <= 1 ) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 2 ) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <div className='moving-backround'>
            <Flex justify='center' align='center' height='100vh' paddingBottom='150px'>
                <Box width='520px'>
                    <div>
                        <Text></Text>
                        <Text></Text>
                    </div>
                
                    {isConnected ? (
                        <div>
                            <Flex align='center' justify='center'>
                                <Button 
                                    backgroundColor='#571252'
                                    _hover={{ bg: '#f9e522'}}
                                    borderRadius='5px'
                                    boxShadow='0px 2px 2px 1px #0F0F0F'
                                    color='#000000'
                                    cursor='pointer'
                                    fontFamily='inherit'
                                    padding='15px'
                                    marginTop='600px'
                                    onClick={handleDecrement}>-
                                </Button>
                                <Input 
                                    readOnly
                                    textAlign='center'
                                    height='40px'
                                    width='100px'
                                    fontFamily='inherit'
                                    paddingLeft='19px'
                                    marginTop='600px'
                                    type='number' 
                                    value={mintAmount}/>
                                <Button 
                                    backgroundColor='#571252'
                                    _hover={{ bg: '#f9e522'}}
                                    borderRadius='5px'
                                    boxShadow='0px 2px 2px 1px #0F0F0F'
                                    color='#000000'
                                    cursor='pointer'
                                    fontFamily='inherit'
                                    padding='15px'
                                    marginTop='600px'
                                    onClick={handleIncrement}>+
                                </Button>
                            </Flex>
                            <Button 
                                backgroundColor='#571252'
                                _hover={{ bg: '#f9e522'}}
                                borderRadius='5px'
                                boxShadow='0px 2px 2px 1px #0F0F0F'
                                color='#000000'
                                cursor='pointer'
                                fontFamily='inherit'
                                padding='15px'
                                marginTop='10px'
                                onClick={handleAllowListMint}>Mint Now
                            </Button>
                            <Button 
                                backgroundColor='#571252'
                                _hover={{ bg: '#f9e522'}}
                                borderRadius='5px'
                                boxShadow='0px 2px 2px 1px #0F0F0F'
                                color='#000000'
                                cursor='pointer'
                                fontFamily='inherit'
                                padding='15px'
                                marginTop='10px'
                                onClick={getTotalSupply}>#Minted?
                            </Button>
                        </div>
                    ) : (
                        <p className='paragraphs'>You must be connected to mint these Crazy Tigers!!! </p>
                    )}
                </Box>
            </Flex>
        </div>
    );
}

export default MainMint;
