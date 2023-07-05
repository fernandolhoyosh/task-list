import "./Home.css";

const Home = () => {
  const appName = "To-do list app";

  return (
    <section className="home-section">
      <h2>{appName}</h2>
      <article>
        <p>
          Welcome to your to-do list app where you can organize your to-do
          activities, you can add, update or delete tasks as well as check
          completed tasks.
        </p>
      </article>
    </section>
  );
};

export default Home;
