export const TaskListReducer = (state, action) => {

  switch (action.type) {

    case "addTask":
      console.log(action)     
      return [ ...state, {title: action.title, status: false, description: action.description}];

    case "updateTaskName":
      console.log(action)
      return state.map((task) => 
      action.oldTitle === task.title ? {...task, title: action.updateTitle}: task)

    case "deleteTask":
      console.log(action)
      return state.filter((task, index) => index !== action.payload);

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