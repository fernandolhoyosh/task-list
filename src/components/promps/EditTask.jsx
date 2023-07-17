import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    Input,
    FormControl
  } from '@chakra-ui/react'

  import { useRef } from 'react';
import { useTasks } from '../../hooks/useTasks';

const EditTask = ({isOpen, onClose, name}) => {

    const cancelRef = useRef();
    const inputUpdateTask = useRef();
    const { setUpdateTask } = useTasks();

    //llamada de la Función del custom hook para actualizar el nombre de una tarea de la lista
    const handleUpdateTaskName = (e) => {
        setUpdateTask(e, name, inputUpdateTask.current.value);
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
      </AlertDialog>
    </>
  )

}

export default EditTask;
