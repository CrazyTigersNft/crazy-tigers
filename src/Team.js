import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Founder1 from './assets/team-photos/All-4.png';
import Founder2 from './assets/team-photos/All-5.png';
import Founder3 from './assets/team-photos/All-8.png';
import Founder4 from './assets/team-photos/All-10.png';
import TigerTeam from './assets/background/tiger-team.png';


function Team() {
  return (
    <div className='team-moving-backround'>
        <Image className='headings' src={TigerTeam}/>

        <Flex justify='center' align='center' height='60vh' paddingLeft='50px' paddingRight='50px' paddingBottom='150px'>
            <Box>
                <Image src={Founder1}/>
                <Box>
                    <a href='https://twitter.com/Ezekielnfts' target='_blank' rel='noopener noreferrer'>
                        <Text className='name' color='#f9e522'>Ezekiel</Text>
                    </a>
                    <Text className='job' as='i'>Founder</Text>
                </Box>
            </Box>
            <Box>
                <Image src={Founder2}/>
                <Box>
                    <a href='https://twitter.com/Artbyekene_' target='_blank' rel='noopener noreferrer'>
                        <Text className='name' color='#f9e522'>Ekene</Text>
                    </a>
                    <Text className='job' as='i'>Collabs</Text>
                </Box>
            </Box>
            <Box>
                <Image src={Founder3} />
                <Box>
                    <a href='https://twitter.com/0xGeeLoko' target='_blank' rel='noopener noreferrer'>
                        <Text className='name' color='#f9e522'>GeeLoko</Text>
                    </a>
                    <Text className='job' as='i'>Dev</Text>
                </Box>
            </Box>
            <Box>
                <Image src={Founder4} />
                <Box>
                    <a href='https://twitter.com/walshe_steve' target='_blank' rel='noopener noreferrer'>
                        <Text className='name' color='#f9e522'>Steve</Text>
                    </a>
                    <Text className='job' as='i'>Artist</Text>
                </Box>
            </Box>
        </Flex>
        </div>
  );
}

export default Team;
