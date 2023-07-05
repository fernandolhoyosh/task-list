import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <h2>Task List</h2>
      </header>
      <div className="text-header">
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
