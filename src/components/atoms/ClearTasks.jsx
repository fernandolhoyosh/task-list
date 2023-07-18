import "./ClearTasks.css";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
    Button,
    Container,
    useColorModeValue
  } from '@chakra-ui/react'
import {WarningTwoIcon} from '@chakra-ui/icons';
import { useRef } from "react";
import { useTasks } from "../../hooks/useTasks";

export const ClearTasks = () => {
  const colorIcon = useColorModeValue("red.500","red.200");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const { setResetTasksList } = useTasks(); // uso la funcion resetTaskList del custom hook useTasks

  return (
    <>
      <Button id="btn-reset" colorScheme="red" onClick={onOpen}>Clear All</Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete tasks
            </AlertDialogHeader>
            <AlertDialogCloseButton/>

            <Container centerContent>
              <WarningTwoIcon w={10} h={10} color={colorIcon}/>
            </Container>

            <AlertDialogBody textAlign='center'>
            Do you really want to eliminate all tasks?
            </AlertDialogBody>

            <AlertDialogFooter justifyContent='center'>
              <Button ref={cancelRef} onClick={onClose}>Cancel</Button>
              <Button colorScheme='red' onClick={setResetTasksList} ml={3}>confirm</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
