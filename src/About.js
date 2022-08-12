import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import AboutTiger from './assets/background/About-tiger.png';

function About() {
  return (
    <div className='about-moving-backround'>
      <Image className='headings' src={AboutTiger}/>
        <Flex justify='center' align='center' height='40vh' paddingBottom='150px'>
            <Box marginTop='250px' width='520px'>
                <div>
                    <Text>3333 Crazy Tigers live on Planet Panthera, it is under the threat of alien invasion. The Aliens abduct tigers putting them to work on their giant space stations. </Text>
                    <Text>Tigers live their lives as normal most of the time, working, having fun and making cubs ;). Sometimes they are recruited to go into space to fight off alien attacks. Their currency is $meat coin that they work to buy food - meat.</Text>
                </div>
            </Box>
        </Flex>
    </div>
  );
}

export default About;
/*
 

 

Tigers live their lives as normal most of the time, working, having fun and making cubs ;). Sometimes they are recruited to go into space to fight off alien attacks. Their currency is $meat coin that they work to buy food - meat.



*/