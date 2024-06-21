import React from 'react';
import { Box, Text, VStack, HStack, Flex, List, ListItem, ListIcon , Icon  } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const WebDevelopers = () => {
  return (
    <Box bg="black" color="white" p={10}>
    <VStack spacing={8}>
      <Box border={'1px solid white'} w={'18vw'} h={'6vh'} borderRadius={'22px'} textAlign="center" fontSize="2rem" fontWeight="bold">
        WEB DEVELOPERS
      </Box>

      <Box>
        <Text fontSize="2rem" fontWeight="bold" textAlign={'center'} fontFamily={'Times New Roman'}>Services</Text>
        <Box mt={4}>
          <Text fontFamily={'Times New Roman'} fontSize={'1.1rem'}>We Provide Services</Text>
          <Text fontFamily={'Times New Roman'} fontSize={'1.1rem'}>- Website Design and Development @15000</Text>
            <Text fontFamily={'Times New Roman'} fontSize={'1.1rem'}>- Responsive Website Design @6000</Text>
            <Text fontFamily={'Times New Roman'} fontSize={'1.1rem'}>- eCommerce Solutions @16000 @12500 including logo designing, payment gateway</Text>
            
            <Text fontFamily={'Times New Roman'} fontSize={'1.1rem'}>- Website Maintenance and Support @1000/month</Text>
            <Text fontFamily={'Times New Roman'} fontSize={'1.1rem'}>- Web Application Development @15000</Text>
            <Text fontFamily={'Times New Roman'} fontSize={'1.1rem'}>- Performance Optimization @2500</Text>
            
            <Text fontFamily={'Times New Roman'} fontSize={'1.1rem'}>- Web Hosting and Domain Management @1000/year</Text>
            <Text fontFamily={'Times New Roman'} fontSize={'1.1rem'}>- API Development and Integration  @8000</Text>
        </Box>
      </Box>

      <Flex w="full" justify="space-between">
        <Box>
        <Text fontSize="2rem" fontWeight="bold"  fontFamily={'Times New Roman'}>Experience</Text>
          <Box mt={4}>
            <Text>- stylelox.com</Text>
            <Text>- delhisgotsstar.com</Text>
            <Text>- fancytemplates.com</Text>
            <Text>- bhartiyabasti.com</Text>
            <Text>- newsofnation.live</Text>
            <Text>- thetimesofgenz.com</Text>
            <Text>- cabjaipur.com</Text>
            <Text>- educationalmorph.com</Text>
            <Text>- arsheducationwelfaresociety.site</Text>
            <Text>- yatriduniya.site</Text>
            <Text>- primenews.live</Text>
            <Text>- punemirror.com</Text>
            <Text>- www.exclusiveadda.shop</Text>
            <Text>- +10 more</Text>
          </Box>
        </Box>

        <Box>
        <Text fontSize="2rem" fontWeight="bold"  fontFamily={'Times New Roman'}>Skills</Text>
          <Box mt={4}>
            <SkillItem skill="Wordpress" rating={5} />
            <SkillItem skill="react" rating={3} />
            <SkillItem skill="ASP.Net" rating={5} />
            <SkillItem skill="Logo designing" rating={5} />
           
            
          </Box>
        </Box>
      </Flex>
    </VStack>
  </Box>
);
};

const SkillItem = ({ skill, rating }) => {
return (
  <HStack spacing={2}>
    <Text>{skill}</Text>
    <HStack spacing={1}>
      {[...Array(5)].map((_, i) => (
        <Icon key={i} as={FaStar} color={i < rating ? 'orange' : 'gray.600'} />
      ))}
    </HStack>
  </HStack>
);
};

 

export default WebDevelopers;
