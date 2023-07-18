import { TaskListContext } from "../../contexts/TaskListContext";
import { useContext } from "react";
import { Tag } from "@chakra-ui/react";

const TaskCount = () => {
  const { tasksList } = useContext(TaskListContext);

  const arrayFalse = tasksList.filter((task) => task.status === false);
  const countArray = arrayFalse.length;
  const colorScheme = countArray != 0 ? "gray" : "green";

  return (
    <>
      {tasksList.length != 0 && (
        <Tag
          size="lg"
          borderRadius="full"
          m="1em auto"
          p=".5em 1.5em"
          variant="subtle"
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
