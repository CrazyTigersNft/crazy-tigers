import React from "react";
import { Box, Button, Flex, Image, Spacer, Text} from "@chakra-ui/react";
import {NavLink} from 'react-router-dom';
import Discord from './assets/social-media-icons/discord.png';
import Twitter from './assets/social-media-icons/twitter.png';
import Opensea from './assets/social-media-icons/opensea.png';




function NavBar ({ accounts, setAccounts }) {
    const isConnected = Boolean(accounts[0]);

    


    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            setAccounts(accounts);
        }
    }

    let activeStyle = {
        color: "#571252",
      };
    
    
    return (

        <header>
            <Flex justify='space-evenly' align='center' paddingTop='20px'>
                {/* letft side - socials */}
                <Flex justify='space-evenly' width='10%' align='left'>
                    <Box className="socialBoxA"boxSize='42px'>
                        <a href='https://discord.gg/tPRE7kH2Hq' target='_blank' rel='noopener noreferrer'>
                            <Image src={Discord} boxSize='42px' margin='0 15px' alt='discord'/>
                        </a>
                    </Box>
                    <Spacer/>
                    <Box className="socialBoxB" boxSize='42px'>
                        <a href='https://twitter.com/crazytigernft' target='_blank' rel='noopener noreferrer'>
                            <Image src={Twitter} boxSize='42px' margin='0 15px' alt='twitter'/>
                        </a>
                    </Box>
                    <Spacer/>
                    <Box boxSize='42px'>
                        <a href='https://opensea.io' target='_blank' rel='noopener noreferrer'>
                            <Image src={Opensea} boxSize='42px' margin='0 15px' alt='opensea'/>
                        </a>
                    </Box>
                </Flex>
                {/* right side - sections and connect */}
                <nav>
                    <Flex align='center'>
                        <Box margin='15px 15px'>
                            <NavLink 
                            to ='/' 
                            style={({ isActive }) => isActive ? activeStyle : undefined}>
                                <Text _hover={{color: "#f9e522"}}>Mint</Text>
                            </NavLink>
                        </Box>
                        <Spacer/>
                        <Box margin='15px 15px' >
                            <NavLink 
                            to ='/about' 
                            style={({ isActive }) => isActive ? activeStyle : undefined}>
                                <Text _hover={{color: "#f9e522"}}>About</Text>
                            </NavLink>
                        </Box>
                        <Spacer/>
                        <Box margin='15px 15px'>
                            <NavLink 
                            to ='/team'
                            style={({ isActive }) => isActive ? activeStyle : undefined}>
                                <Text _hover={{color: "#f9e522"}}>Team</Text>
                            </NavLink> 
                        </Box>
                    </Flex>
                </nav>
                <Flex align='right'>
                    {/* connect */}
                    {isConnected ? (
                        <Button 
                            backgroundColor='#f9e522'
                            _hover={{ bg: '#f9e522' }}
                            borderRadius='5px'
                            boxShadow='0px 2px 2px 1px #0F0F0F'
                            fontSize= '15px'
                            color='#000000'
                            fontFamily='inherit'
                            padding='15px'
                            margin='0 15px'> Connected
                        </Button>
                    ) : (
                        <Button 
                            backgroundColor='#f9e522'
                            _hover={{ bg: '#571252'}}
                            borderRadius='5px'
                            boxShadow='0px 2px 2px 1px #0F0F0F'
                            color='#000000'
                            cursor='pointer'
                            fontFamily='inherit'
                            padding='15px'
                            margin='0 15px'
                            onClick={connectAccount}>Connect
                        </Button>
                    )}
                </Flex>
            </Flex>
        </header>
    );
}

export default NavBar;
