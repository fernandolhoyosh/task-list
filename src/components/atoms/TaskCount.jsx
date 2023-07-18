import { TaskListContext } from "../../contexts/TaskListContext";
import { useContext } from "react";
import { useColorModeValue, Tag } from "@chakra-ui/react";

const TaskCount = () => {
  const { tasksList } = useContext(TaskListContext);
  const tagVariant = useColorModeValue("subtle","solid");
  const arrayFalse = tasksList.filter((task) => task.status === false);
  const countArray = arrayFalse.length;
  const colorScheme = countArray != 0 ? "gray" : "green";

  return (
    <>
      {tasksList.length != 0 && (
        <Tag
          size="lg"
          m="1em auto"
          p=".8em"
          variant={tagVariant}
          colorScheme={colorScheme}
        >
          {countArray !== 0
            ? `⏳ Pending tasks: ${countArray}`
            : `✅ Completed tasks: ${countArray} `}
        </Tag>
      )}
    </>
  );
};

export default TaskCount;
