import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <h3>Funcionalidades actuales:</h3>

      <ul>
        <li>Agregar tareas</li>
        <li>Añadir una descripción a una tarea (No obligatorio)</li>
        <li>Validación del formulario</li>
        <li>Marcar una tarea como terminada o pendiente</li>
        <li>Botón eliminar tareas de la lista</li>
        <li>Guardar y leer las tareas y su estado en el localStorage</li>
        <li>Actualizar el nombre de una tarea</li>
        <li>Eliminar una tarea especifica</li>
        <li>Contador de tareas con estado pendiente</li>
        <li>Implementación de React Router y Lazy</li>
        <li>Menu de navegación</li>
      </ul>
    </section>
  );
};

export default AboutUs;
