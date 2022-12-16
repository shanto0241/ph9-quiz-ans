import React from "react";
import Navbar from "../Navbar/Navbar";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <h2 className="text-3xl text-cyan-400 mt-10 underline">FAQ's</h2>
      <div className="collapse m-4 rounded-t-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content underline">
          Que-1: What is the purposeof Routing in React ?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            The Router in React JS is primarily used to create Single Page Web
            Apps. In the application, React Router is utilized to define various
            routes. When a user enters a URL into your browser and the URL route
            equals one of several 'pathways' as in the router folder, the user
            is sent to that route
          </p>
        </div>
      </div>
      <div className="collapse m-4 rounded-t-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content underline">
          Que-1: How context api works in React?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
          <p>
            Context is a built-in API introduced in ​​React 16.3. It makes it
            possible to pass data from parent to children nested deep down the
            component tree directly, instead of passing it down through a chain
            of props.
          </p>
        </div>
      </div>
      <div className="collapse m-4 rounded-t-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content underline">
          Que-1: What is the useref hook in React?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
