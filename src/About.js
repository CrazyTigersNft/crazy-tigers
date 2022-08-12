import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import AboutTiger from './assets/background/About-tiger.png';

function About() {
  return (
    <div className='about-moving-backround'>
      <Image className='headings' src={AboutTiger}/>
        <Flex justify='center' align='center' height='40vh' paddingBottom='150px'>
            <Box width='520px'>
                <div>
                    <Text>5555 Crazy Tigers let Loose in the Wild to Dominate the entire Metaverse</Text>
                    <Text>Are You Ready to get Wild!!!</Text>
                </div>
            </Box>
        </Flex>
    </div>
  );
}

export default About;
