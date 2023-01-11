import React from "react";
import { RxGithubLogo } from "react-icons/rx";

export const Footer = () => {
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
