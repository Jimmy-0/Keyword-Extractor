import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress,
    useToast
  } from '@chakra-ui/react';
  
  const KeywordsModal = ({ keywords, loading, isOpen, closeModal }) => {
    // const temp = "GPT-4, Model, Development, Performance, Inputs, Outputs, Large-scale, Multimodal, Professional, Report";
    const toast = useToast();

    const showToast = () =>{
        toast({
            title:'Copied',
            // description: 'Please enter something',
            status: 'success',
            duration: 3000,
            position:'top',
            isClosable: false
        });
    }
    

    return (
      <>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Keywords</ModalHeader>
            <ModalCloseButton />
            <ModalBody display='flex' alignItems='center' justifyContent='center'>
              {loading ? (
                <CircularProgress isIndeterminate color='yellow.300' />
              ) : (
                <Text>{keywords}</Text>
              )}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={closeModal}>
                Close
              </Button>
              <Button colorScheme='blue' mr={3} onClick={
                () => {navigator.clipboard.writeText(temp);
                    showToast();
                }}>
                Copy
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  export default KeywordsModal;