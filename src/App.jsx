import { Project } from "./Project";
import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import projects from "./projects.json";

function App() {
  const [showProject, setShowProject] = React.useState(null);

  const close = () => setShowProject(null);
  const select = (url) => (event) => setShowProject(url);

  return (
    <div className="App min-h-screen w-full h-full flex flex-col font-sans">
      <Header />
      <div className="flex-grow  container mx-auto">
        <h2 className="px-2 md:px-4 py-1 mt-2 md:py-2 opacity-60 select-none text-sm ">
          Projects
        </h2>
        <ul className="">
          {projects.map((p) => (
            <ListItem {...p} select={select} />
          ))}
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
        onClick={props?.select(props?.folder)}
        className="flex  p-2 w-full "
      >
        <span
          className="rounded p-2 w-12 mr-2 h-full flex justify-center items-center"
          style={{
            backgroundColor: props?.background || "black",
          }}
        >
          <img src={props.logo} alt="dealership logo" className="" />
        </span>
        <div className="flex flex-col ">
          <span className="">{props?.name}</span>
          <span className="text-gray-500 text-xs">{props?.displayUrl}</span>
        </div>
      </button>
      <div className="flex items-center">
        {props?.linkUrl && (
          <a
            className="flex flex-col text-md items-center justify-center space-y-1 disabled:text-gray-400 hover:bg-slate-100 h-full p-2"
            disabled={!props?.linkUrl}
            href={props?.linkUrl}
            target="_blank"
          >
            <BiWorld />
            <span className=" px-1 py-0.5 rounded text-[10px]">
              {props?.linkUrl ? "Visit" : "Private"}
            </span>
          </a>
        )}
        {props?.source && (
          <a
            className="flex flex-col text-md items-center justify-center space-y-1 disabled:text-gray-400 hover:bg-slate-100 h-full p-2"
            disabled={!props?.source}
            href={props?.source}
            target="_blank"
          >
            <RxGithubLogo />
            <span className=" px-1 py-0.5 rounded text-[10px]">
              {props?.source ? "Source" : "Private"}
            </span>
          </a>
        )}
      </div>
    </li>
  );
};

const Header = () => {
  return (
    <div className="h-36 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto md:px-10 items-center h-full flex flex-col md:flex-row justify-end md:justify-between">
        <h1 className="text-white flex flex-col select-none">
          <span className="text-sm  leading-none"> Portfolio of</span>
          <span className="uppercase text-2xl border-2  border-white px-4 md:px-6 py-2 md:py-4 my-1 md:my-2">
            Arnas Jelizarovas
          </span>
        </h1>
        <div className="flex md:flex-col md:space-y-2 text-sm text-white">
          <LinkButton
            label="jelizarovas@gmail.com"
            url="mailto:jelizarovas@gmail.com"
            Icon={MdEmail}
          />
          <LinkButton
            label="github.com/jelizarovas"
            url="https://github.com/jelizarovas/"
            Icon={RxGithubLogo}
          />
        </div>
      </div>
    </div>
  );
};

const LinkButton = (props) => (
  <a
    className=" px-4 py-2 mx-4 my-2 text-center flex space-x-2 items-center transition-all bg-black bg-opacity-0 hover:bg-opacity-25 "
    href={props?.url}
    target="_blank"
  >
    {props?.Icon && <props.Icon />}
    <span>{props?.label}</span>
  </a>
);

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
