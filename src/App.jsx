import { useState } from "react";
import {Container, Box} from "@chakra-ui/react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import TextInput from "./component/TextInput";
import KeywordsModal from "./component/KeywordModal";

// use box as wrapper component
const App = () => {
  const[keywords, setKeywords] = useState([]);
  const[isOpen, setIsOpen]= useState(false);
  const[loading, setLoading]= useState(false);

  const extractKeyword =  async (text) =>{

    setLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",

      headers: {
        'Content-Type': 'application/json', //
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },

      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: 'Extract 10 keywords from this text. Make the first letter of each word uppercase and separate with commas \n\n and sorted in order of importance to the content'+text+'',
        max_tokens: 0.5,
        temperature: 0.6,
        frequency_penality: 0.8
      }),
    };

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL,options);

    // will return an array of choices 
    const json = await response.json();
    // console.log(json);
    // const data = json.choices[0].text.trim();

    console.log(json);
    setKeywords(json[0]);
    setLoading(false);
  };

  const closeModal =()=>{
    setIsOpen(false);

  }

  return(
  <Box bg = 'yellow.300' color='black' height='100vh' paddingTop={120}>
    <Container maxW='3xl' centerContent>
      <Header />
      <TextInput extractKeyword = {extractKeyword}/>
      <Footer />
    </Container>
    <KeywordsModal
      keywords={keywords}
      loading={loading}
      isOpen = {isOpen}
      closeModal={closeModal}    
    />
  </Box> 
  )
}

export default App;