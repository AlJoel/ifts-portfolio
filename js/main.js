document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-proyecto");
    const modalBody = document.getElementById("modal-body");
    const cerrarBtn = document.querySelector(".cerrar");
    const proyectos = document.querySelectorAll(".proyecto");

    const contenidos = {
        1: `
      <h2>Gestión de Equipos y Liderazgo Técnico</h2>
      <p>Como Project Manager y líder técnico, coordiné un equipo de desarrollo de 5 personas, 
      planificando sprints, gestionando prioridades y asegurando entregas eficientes con metodologías ágiles.</p>
      <ul>
        <li>Planificación de tareas y seguimiento en sprints quincenales.</li>
        <li>Comunicación con stakeholders y documentación técnica.</li>
        <li>Mentoría a desarrolladores juniors.</li>
      </ul>
      <iframe src="https://www.youtube.com/embed/HRNpMfTs_3w" title="Ejemplo de liderazgo"></iframe>
    `,
        2: `
      <h2>Desarrollo Full Stack (PHP, JS, MySQL, HTML y CSS)</h2>
      <p>Proyecto de desarrollo web completo para una aplicación de gestión de turnos en una clínica. 
      Implementación del backend en PHP, base de datos MySQL y un frontend responsivo con HTML, CSS y JavaScript.</p>
      <ul>
        <li>CRUD de pacientes y turnos usando PHP + MySQL.</li>
        <li>Maquetado con Flexbox y validaciones con JS.</li>
        <li>Integración de tareas asincrónicas mediante fetch y AJAX.</li>
      </ul>
        <video controls width="100%" poster="assets/img/proyecto2.jpg">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        </video>
    `
    };

    proyectos.forEach(proyecto => {
        proyecto.addEventListener("click", () => {
            const id = proyecto.getAttribute("data-proyecto");
            modalBody.innerHTML = contenidos[id] || "<p>Información no disponible.</p>";
            modal.style.display = "flex";
        });
    });

    cerrarBtn.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
});
