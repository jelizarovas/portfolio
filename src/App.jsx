import { Project } from "./Project";
import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

function App() {
  const [showProject, setShowProject] = React.useState(null);

  const close = () => setShowProject(null);
  const select = (url) => (event) => setShowProject(url);

  return (
    <div className="App min-h-screen w-full h-full flex flex-col ">
      <Header />
      <div className="flex-grow  container mx-auto">
        <h2 className="px-2 md:px-4 py-1 md:py-2 ">Projects</h2>
        <ul className="">
          <ListItem
            name="Leaf Autos"
            url="leafautos.com"
            select={select}
            github="https://github.com/jelizarovas/leafautos.com"
            link="https://leafautos.com/"
          />
          {/* <ListItem
            name="Leaf Autos Admin"
            url="admin.leafautos.com"
            select={select}
          /> */}
        </ul>
      </div>
      <Footer />
      {showProject && <Project close={close} project={showProject} />}
    </div>
  );
}

const ListItem = (props) => {
  return (
    <li className="md:px-4 md:my-2 hover:bg-slate-200 transition-all flex">
      <button
        type="button"
        onClick={props?.select(props?.url)}
        className="flex flex-col  p-2 w-full "
      >
        <span name={props?.url}> {props?.name}</span>
        <span name={props?.url} className="text-gray-500 text-xs">
          {props?.url}
        </span>
      </button>
      <div className="flex items-center">
        {props?.link && (
          <a
            className="flex flex-col text-md items-center justify-center space-y-1 disabled:text-gray-400 hover:bg-slate-100 h-full p-2"
            disabled={!props?.link}
            href={props?.link}
            target="_blank"
          >
            <BiWorld />
            <span className=" px-1 py-0.5 rounded text-[10px]">
              {props?.link ? "Visit" : "Private"}
            </span>
          </a>
        )}
        {props?.github && (
          <a
            className="flex flex-col text-md items-center justify-center space-y-1 disabled:text-gray-400 hover:bg-slate-100 h-full p-2"
            disabled={!props?.github}
            href={props?.github}
            target="_blank"
          >
            <RxGithubLogo />
            <span className=" px-1 py-0.5 rounded text-[10px]">
              {props?.github ? "Public" : "Private"}
            </span>
          </a>
        )}
      </div>
    </li>
  );
};

const Header = () => {
  return (
    <div className="h-32 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto md:px-10 items-center h-full flex flex-col md:flex-row justify-end md:justify-between">
        <h1 className="text-white flex flex-col">
          <span className="text-sm  leading-none"> Portfolio of</span>
          <span className="uppercase text-2xl border  border-white px-4 md:px-6 py-2 md:py-4 my-1 md:my-2">
            Arnas Jelizarovas
          </span>
        </h1>
        <div className="flex md:flex-col md:space-y-2 text-sm text-white">
          <a
            className=" px-4 py-2 text-center flex space-x-2 items-center"
            href="mailto:jelizarovas@gmail.com"
          >
            <MdEmail /> <span>jelizarovas@gmail.com</span>
          </a>
          <a
            className=" px-4 py-2  text-center flex space-x-2 items-center"
            href="https://github.com/jelizarovas/"
          >
            <RxGithubLogo />
            <span>github.com/jelizarovas</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="h-16 text-sm">
      <div className="container mx-auto flex items-center h-full">
        <a
          href="https://github.com/jelizarovas/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline px-4 py-2 flex space-x-2 items-center"
        >
          <RxGithubLogo /> <span>Source</span>
        </a>
      </div>
    </footer>
  );
};

export default App;
