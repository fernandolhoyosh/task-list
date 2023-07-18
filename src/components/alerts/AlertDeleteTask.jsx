import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    Container,
    useColorModeValue
  } from '@chakra-ui/react'

import {DeleteIcon} from '@chakra-ui/icons';
import { useRef } from 'react';
import { useTasks } from '../../hooks/useTasks';

const AlertDeleteTask = ({isOpen, onClose, id, name}) => {

    const colorIcon = useColorModeValue("red.500","red.200");
    const cancelRef = useRef();
    const { setDeleteTask } = useTasks();

    //llamada de la Función del custom hook para eliminar una tarea de la lista
    const handleDeleteTask = () => {
        setDeleteTask(id);
    }
    
  return (
    <>
      <AlertDialog 
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete task
            </AlertDialogHeader>
            <AlertDialogCloseButton/>

            <Container centerContent>
              <DeleteIcon w={10} h={10} color={colorIcon}/>
            </Container>

            <AlertDialogBody textAlign={"center"}>
                Do you really want to delete the task: <strong>{name}</strong>?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDeleteTask} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default AlertDeleteTask;