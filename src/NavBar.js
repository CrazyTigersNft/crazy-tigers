import React, {} from "react";
import { Box, Button, Flex, Image, Spacer, Text} from "@chakra-ui/react";
import {NavLink} from 'react-router-dom';
import Discord from './assets/social-media-icons/discord.png';
import Twitter from './assets/social-media-icons/twitter.png';
import Opensea from './assets/social-media-icons/opensea.png';

const NavBar = ({ accounts, setAccounts }) => {
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
        <nav>
            <Flex justify='space-between' align='center' padding='30px'>
                {/* letft side - socials */}
                <Flex justify='space-around' width='40%' padding='0 75px'>
                    <a href='https://discord.gg/tPRE7kH2Hq' target='_blank' rel='noopener noreferrer'>
                        <Image src={Discord} boxSize='42px' margin='0 15px' alt='discord'/>
                    </a>
                    <a href='https://twitter.com/crazytigernft' target='_blank' rel='noopener noreferrer'>
                        <Image src={Twitter} boxSize='42px' margin='0 15px' alt='twitter'/>
                    </a>
                    <a href='https://opensea.io' target='_blank' rel='noopener noreferrer'>
                        <Image src={Opensea} boxSize='42px' margin='0 15px' alt='opensea'/>
                    </a>
                </Flex>
                {/* right side - sections and connect */}
                <Flex>
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
                    <Spacer/>
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
        </nav>
    );
}

export default NavBar;