import React from "react";
import { MdEmail } from "react-icons/md";
import { RxGithubLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="h-36 w-full  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container max-w-2xl mx-auto md:px-10 items-center h-full flex flex-col md:flex-row justify-end md:justify-between">
        <Link as="h1" to="/" className="text-white flex flex-col select-none">
          <span className="text-sm  leading-none"> Portfolio of</span>
          <span className="uppercase text-2xl border-2  border-white px-4 md:px-6 py-2 md:py-4 my-1 md:my-2">
            Arnas Jelizarovas
          </span>
        </Link>
        <div className="flex md:flex-col md:space-y-2 text-sm text-white">
          <LinkButton
            label="jelizarovas@gmail.com"
            url="mailto:jelizarovas@gmail.com"
            Icon={MdEmail}
            tabIndex={8}
          />
          <LinkButton
            label="github.com/jelizarovas"
            url="https://github.com/jelizarovas/"
            Icon={RxGithubLogo}
            tabIndex={9}
          />
        </div>
      </div>
    </div>
  );
};

const LinkButton = ({
  Icon = MdOutlineHideImage,
  label = "",
  url = "#",
  ...props
}) => (
  <a
    className=" md:px-4 py-2 mx-4 my-2 text-center flex space-x-2 items-center transition-all bg-black bg-opacity-0 hover:bg-opacity-25 "
    href={url}
    target="_blank"
    {...props}
  >
    {Icon && <Icon />}
    <span>{label}</span>
  </a>
);
