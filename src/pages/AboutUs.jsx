import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <h2>About Us</h2>
      <h3>App features:</h3>
      <ul className="funtion-list">
        <li>Add tasks</li>
        <li>Adding a description to a task (Not required)</li>
        <li>Validate the form</li>
        <li>Mark a task as completed or pending</li>
        <li>Delete tasks from the list button</li>
        <li>Save and read tasks and their status in the localStorage</li>
        <li>Update the name of a task</li>
        <li>Delete a specific task</li>
        <li>Counter of tasks with pending status</li>
        <li>Navigation menu</li>
      </ul>
      <h3>Technologies used in the app:</h3>
      <ul className="funtion-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>React Router</li>
        <li>React Lazy</li>
        <li>React icons</li>
      </ul>
    </section>
  );
};

export default AboutUs;
