import "./ClearTasks.css";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    /* AlertDialogCloseButton, */
    useDisclosure,
    Button,
    useToast,
  } from '@chakra-ui/react'
import { useRef } from "react";
import { useTasks } from "../../hooks/useTasks";

export const ClearTasks = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef()
  const toast = useToast();
  const { setResetTasksList } = useTasks(); // uso la funcion resetTaskList del custom hook useTasks

  const handleResetTasks = () => {
    setResetTasksList();
    toast({
        title: "Deleted tasks",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
    });
    
  }

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

            <AlertDialogBody textAlign='center'>
            Do you really want to eliminate all tasks?
            </AlertDialogBody>

            <AlertDialogFooter justifyContent='center'>
              <Button ref={cancelRef} onClick={onClose}>Cancel</Button>
              <Button colorScheme='red' onClick={handleResetTasks} ml={3}>Delete</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
