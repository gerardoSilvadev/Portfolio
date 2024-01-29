const mensaje = "Bienvenido/a Mi Porfolio";
const velocidaDeEscritura = 50;


function escribirMensaje(index) {
  if (index < mensaje.length) {
    document.getElementById("mensaje-bienvenida").innerHTML +=
      mensaje.charAt(index);
    index++;
    setTimeout(() => {
      escribirMensaje(index);
    }, velocidaDeEscritura);
  } else {
    setTimeout(() => {
      document.getElementById("bienvenido").style.display = "none";
      document.getElementById("contenido").style.display = "block";
      document.querySelector(".center-content").classList.remove("vh-100");
    }, 1000);
  }
}

escribirMensaje(0);


const projectsData = [
  {
    title: "Carrito de Compras",
    imageUrl: "imagenes/carritodecompras.png",
    description: "Carrito de Compras con Javascript",
    githubLink: "https://github.com/gerardoSilvadev/CarritoDeCompras",
    demoLink: "https://carritodecompras2.netlify.app/"
  },
  {
    title: "Administrador de Pacientes",
    imageUrl: "/imagenes/administradordepacientes.png",
    description: "Administrador de pacientes con React y Vite, tailwindcss y localStorage",
    githubLink: "https://github.com/gerardoSilvadev/citas-react-",
    demoLink: "https://citas-react-five.vercel.app/"
  },{
    title: "Buscador de Imagenes Pixabay",
    imageUrl: "/imagenes/buscadorpixabay.png",
    description: "Descripción del proyecto 1",
    githubLink: "#",
    demoLink: "#"
  },{
    title: "Control de Presupuesto",
    imageUrl: "/imagenes/controldegastos.png",
    description: "Control de presupuesto con React , Tailwindcss y Localstorage",
    githubLink: "https://github.com/gerardoSilvadev/ControldePresupuesto",
    demoLink: "https://controlde-presupuesto.vercel.app/"
  },{
    title: "Cotizador Criptomonedas",
    imageUrl: "/imagenes/cotizadorcriptomonedas.png",
    description: "Cotizador De Criptomonedas en Vite, Styled Components y Custom Hooks",
    githubLink: "https://github.com/gerardoSilvadev/CotizadorDeCriptomonedas",
    demoLink: "https://cotizador-de-criptomonedas-theta.vercel.app/"
  },
  
  // Agrega más proyectos según sea necesario
];

// Función para generar las tarjetas de proyecto
function generateProjectCards() {
  const projectsContainer = document.getElementById("projectsContainer");

  projectsData.forEach(project => {
    const {imageUrl, title,description,githubLink,demoLink} = project;

    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");
    card.innerHTML = `
      <div class="card" style="width: 20rem;">
        <img src="${imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <div class="d-flex justify-content-between">
            <a href="${githubLink}" class="btn btn-outline-danger"><i class="bi bi-github"></i></a>
            <a href="${demoLink}" class="btn btn-outline-success  text-uppercase">Demo</a>
          </div>
        </div>
      </div>
    `;
    projectsContainer.appendChild(card);
  });
}

window.addEventListener("load", generateProjectCards);


// Fecha
const date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;





