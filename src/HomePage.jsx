import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import { MdKeyboardArrowRight, MdRemoveRedEye } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import projects from "./projects.json";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="flex w-full  flex-col lg:flex-row justify-between xl:w-3/4 mx-auto   ">
      <Welcome />
      <div className="  container mx-auto max-w-xl ">
        <h2
          // className="px-2 md:px-4 py-1 mt-2 md:py-2 opacity-60 select-none text-sm ">
          className="block font-medium text-lg md:text-2xl leading-relaxed mx-4 my-2 md:my-4"
        >
          Project Menu
        </h2>
        <ul className="">
          {projects.map((p, i) => (
            <ListItem key={i} {...p} />
          ))}
        </ul>
        <div className="py-10 text-center opacity-40 text-xs">
          More projects coming soon!
        </div>
      </div>
    </div>
  );
};

const ListItem = (props) => {
  return (
    <li
      className={`md:mx-4 md:my-2 ${
        props?.disabled ? "cursor-help" : "hover:bg-slate-200"
      } transition-all flex`}
    >
      <Link
        type="button"
        to={`project/${props?.folder}`}
        // onClick={props?.select(props?.folder)}
        className={`flex  p-2 w-full ${
          props?.disabled ? "cursor-help" : "hover:bg-slate-100"
        } `}
        disabled={props?.disabled}
      >
        <span
          className="rounded p-2 w-12 mr-2 h-full flex justify-center items-center"
          style={{
            backgroundColor: props?.background || "black",
          }}
        >
          {props.logo && (
            <img src={props.logo?.slice(1)} alt="project logo" className="" />
          )}
        </span>
        <div className="flex flex-col flex-grow  justify-start items-start">
          <span className="">{props?.name}</span>
          <span className="text-gray-500 text-xs">{props?.displayUrl}</span>
        </div>
        <div className={` flex flex-col  items-center justify-center space-y-1  h-full px-2 ${props?.disabled ? "opacity-25" : "" }`}>
          <MdRemoveRedEye />
          <span className="  px-1  rounded text-[10px]">Details</span>
        </div>
      </Link>
      <div className="flex  items-center ">
        {props?.linkUrl && (
          <a
            className=" flex flex-col  items-center justify-center space-y-1 disabled:text-gray-400 hover:bg-slate-100 h-full p-2"
            disabled={!props?.linkUrl}
            href={props?.linkUrl}
            target="_blank"
          >
            <BiWorld />
            <span className="  px-1  rounded text-[10px]">
              {props?.linkUrl ? "Visit" : "Private"}
            </span>
          </a>
        )}
        {props?.source && (
          <a
            className="flex flex-col items-center justify-center space-y-1 disabled:text-gray-400 hover:bg-slate-100 h-full p-2"
            disabled={!props?.source}
            href={props?.source}
            target="_blank"
          >
            <RxGithubLogo />
            <span className=" px-1  rounded text-[10px]">
              {props?.source ? "Source" : "Private"}
            </span>
          </a>
        )}
      </div>
    </li>
  );
};

const Welcome = () => {
  return (
    <div className="   w-full flex-grow pl-20  md:pl-0 sm:pl-0  px-2 py-2  md:py-10 font-thin text-sm md:text-xl  relative flex items-center justify-center lg:flex-col">
      <img
        src="images/wezard.png"
        alt="wizard"
        className="mx-auto h-32 md:h-64 lg-96 md:-mb-4 lg:-mt-20 absolute -left-0 top-10 sm:relative"
      />
      <div className="mx-auto max-w-xl space-y-2  px-10 py-10">
        <span className="block font-medium text-lg md:text-2xl leading-relaxed my-2 md:my-4">
          Welcome to my digital domain!
        </span>{" "}
        <p>
          As a developer specializing in front end libraries and PDF wizardry, I
          bring excitement and innovation to the web.
        </p>
        <p>Explore my portfolio and witness the magic for yourself.</p>
        <div className="flex justify-end">
          <button className="p-4 px-8 border bg-black bg-opacity-0 hover:bg-opacity-20 transition-all rounded-xl my-10 flex items-center space-x-4">
            <span>Select projects</span> <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
