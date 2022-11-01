import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export const Project = ({ close, project }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(`./projects/${project}/README.md`)
      .then((res) => res.text())
      .then((text) => setText(text));
  }, [project]);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-20 flex items-center justify-center overflow-auto"
      onClick={close}
    >
      <button
        type="button"
        className="absolute top-4 right-10 p-2 bg-black bg-opacity-70 rounded text-white"
        onClick={close}
      >
        Close
      </button>
      <div
        className="bg-white   max-w-lg w-full p-5 lg:rounded  shadow-lg min-h-[400px] max-h-full  overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
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

            a: ({ node, ...props }) => (
              <a
                target="_blank"
                className="underline text-blue-700 hover:text-blue-500 "
                {...props}
              />
            ),
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
};
