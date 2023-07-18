 import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
    useColorModeValue
  } from '@chakra-ui/react';

import { EditIcon } from '@chakra-ui/icons';

import { useRef } from 'react';
import { useTasks } from '../../hooks/useTasks';

const EditTask = ({isOpen, onClose, name}) => {

    const colorIcon = useColorModeValue("blue.500","blue.200");
    const inputUpdateTask = useRef();
    const finalRef = useRef();
    const { setUpdateTask } = useTasks();

    //llamada de la Función del custom hook para actualizar el nombre de una tarea de la lista
    const handleUpdateTaskName = (e) => {
        setUpdateTask(e,name, inputUpdateTask.current.value);
        onClose();
    }

  return (
    <>
    <Modal
        initialFocusRef={inputUpdateTask}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update task</ModalHeader>
          <ModalCloseButton />
          <form>
            <Container centerContent>
              <EditIcon w={10} h={10} color={colorIcon}/>
            </Container>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Enter the new task name:</FormLabel>
              <Input defaultValue={name} ref={inputUpdateTask} placeholder='Enter the new task name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type='submit' colorScheme='blue' mr={3} onClick={handleUpdateTaskName}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      {/* <AlertDialog 
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Update task
            </AlertDialogHeader>
                <form>
            <AlertDialogBody>
                Enter the new task name:
                <Input m='.5em 0' defaultValue={name} ref={inputUpdateTask} placeholder='Enter a new task name' size='md' />
            </AlertDialogBody>
      
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button type='submit' colorScheme='blue' onClick={handleUpdateTaskName} ml={3}>
                Confirm
              </Button>
            </AlertDialogFooter>
                </form>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog> */}
    </>
  )

}

export default EditTask;
