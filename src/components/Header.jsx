import "../index.css";

function Header() {
  return (
    <>
      <header>
        <h2>Task List</h2>
      </header>
      <div className="text-header">
        <p>
          Welcome to your to-do list app where you can organize your to-do
          activities, you can add, update or delete tasks as well as check
          completed tasks.
        </p>
        <p>
          <strong>Note: </strong>
          The add a description field is not mandatory, if you add it you can see
          the description of the task by hovering the cursor over the task.
        </p>
      </div>
    </>
  );
}

export default Header;
