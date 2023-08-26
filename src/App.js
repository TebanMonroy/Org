import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/TebanMonroy.png",
      nombre: "Teban Monroy",
      puesto: "Estudiante",
      fav: true,
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/TebanMonroy.png",
      nombre: "Teban Monroy",
      puesto: "Estudiante",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Data Science",
      foto: "https://github.com/TebanMonroy.png",
      nombre: "Teban Monroy",
      puesto: "Estudiante",
      fav: true,
    },
    {
      id: uuidv4(),
      equipo: "Devops",
      foto: "https://github.com/TebanMonroy.png",
      nombre: "Teban Monroy",
      puesto: "Estudiante",
      fav: true,
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/TebanMonroy.png",
      nombre: "Teban Monroy",
      puesto: "Estudiante",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Móvil",
      foto: "https://github.com/TebanMonroy.png",
      nombre: "Teban Monroy",
      puesto: "Estudiante",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/TebanMonroy.png",
      nombre: "Teban Monroy",
      puesto: "Estudiante",
      fav: true,
    },
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9",
    },

    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf",
    },
  ]);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //         --> condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }]);
  };

  // Dar favorito
  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador
    });
    actualizarColaboradores(colaboradoresActualizados)
  };

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <div></div>} */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
