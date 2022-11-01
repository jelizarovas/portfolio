import { Project } from "./Project";
import React from "react";

function App() {
  const [showProject, setShowProject] = React.useState(null);

  const close = () => setShowProject(null);
  const select = (e) => setShowProject(e.target.name);

  return (
    <div className="App">
      <h1>Portfolio of Arnas Jelizarovas</h1>

      <ul className="">
        <li>
          <button name="leafautos.com" type="button" onClick={select}>
            Leaf Autos {">"} leafautos.com
          </button>
        </li>
        <li>
          <button name="admin.leafautos.com" type="button" onClick={select}>
            Leaf Autos Admin {">"} admin.leafautos.com
          </button>
        </li>
      </ul>
      {showProject && <Project close={close} project={showProject} />}
    </div>
  );
}

export default App;
