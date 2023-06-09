import { Heading, Image, Text } from "@chakra-ui/react";
import logo from '../assets/light-bulb-svgrepo-com.svg'

const Header = () => {
  return (
    <>
        <Image src={logo} alt="logo" width = {100} marginBottom="1rem"/>
        <Heading color='black' marginBottom='1rem'>
            AI Keyword Extractor
        </Heading>
        <Text fontSize={25} textAlign="center">
            Paste your content below and we will extract the keywords for you
        </Text>
    </>
  );
}
export default Header;