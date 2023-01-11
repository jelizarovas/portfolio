import { useState, useEffect } from "react";
import { MdClear, MdOutlineKeyboardBackspace } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";

export const Project = (props) => {
  let { projectId } = useParams();
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(`./projects/${projectId}/README.md`)
      .then((res) => res.text())
      .then((text) => setText(text));
  }, [projectId]);

  return (
    <div className="container mx-auto max-w-2xl relative px-2">
      <Link className="py-2 px-4 flex items-center space-x-2 " to="/">
        <MdOutlineKeyboardBackspace /> <span>Projects</span>
      </Link>
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h2
              className="text-blue-700 border-b-2 text-xl p-1 mb-2 uppercase"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-blue-500 text-xl  border-b-2 p-1 my-2 uppercase"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc  ml-3" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ul className="list-decimal  ml-5" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="hover:bg-black hover:bg-opacity-5" {...props} />
          ),
          br: ({ node, ...props }) => <br />,
          a: ({ node, ...props }) => (
            <a
              target="_blank"
              className="underline text-blue-700 hover:text-blue-500 "
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <img className="w-64 " {...props} src={props.src.slice(1)} />
          ),
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};
