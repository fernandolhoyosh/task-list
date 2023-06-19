export const TaskListReducer = (state, action) => {

  switch (action.type) {

    case "addTask":
        console.log(action)
        if(state.find(task => task.title === action.title)){
            alert("The task has already been registered");
            return state;
        }
      return [ ...state, {title: action.title, status: false}];

    case "updateTaskName":
      return {
        ...state,
      };

    case "deleteTask":
      return {
        ...state,
      };

    case "changeStatusTask":
    console.log(action)
      return state.map((task, index) =>
        action.payload === index ? {...task, status: action.status }: task
        );

    case "loadTasksLocalStorage":
        console.log(action)
        return action.loadTasks;
    
    case "resetTasksList":
        console.log(action)
        return []
  }
  return state;
};