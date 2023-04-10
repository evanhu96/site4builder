import React from "react";
import { useContext } from "react";
import { SiteContext } from "./SiteContext";
export default function Tutorial() {
  const { tutorial, setTutorial } = useContext(SiteContext);
  if (tutorial === "introduction") {
    return (
      <div className="tutorial">
        <h1>Welcome to the React Site Builder Tutorial</h1>
        <p>
          This tutorial will walk you through the basics of how to use Pro Site
          Builder where you can code an entire professional site without leaving
          the browser.
        </p>
        <p>Click the "Next" button to continue.</p>
        <button onClick={() => setTutorial("componentPicker")}>Next</button>
      </div>
    );
  } else if (tutorial === "componentPicker") {
    return (
      <div className="tutorial">
        <h1>Component Selector</h1>
        <p>
          The Component Selector allows you to select the components you want to
          add to your site. You can add, re-arrange or delete as many components
          as you desire.
        </p>
        <p>Click the "Next" button to continue.</p>
        <button onClick={() => setTutorial("save")}>Next</button>
      </div>
    );
  } else if (tutorial === "save") {
    return (
      <div className="tutorial">
        <h1>Save</h1>
        <p>
          When you're done creating your site, click the "Save" button to save
          your site to MongoAtlas for full access anywhere.
        </p>
        <p>Click the "Next" button to continue.</p>
        <button onClick={() => setTutorial("load")}>Next</button>
      </div>
    );
  } else if (tutorial === "load") {
    return (
      <div className="tutorial">
        <h1>Load</h1>
        <p>
          While creating your site, Pro-Site-Builder will dynamically create a
          folder of all the files you need to incorporate your app into a react
          repository.When you're ready to work on your site again, click the
          "Load" button to load your site from MongoAtlas, and Pro-Site-Builder
          will initialize a new react component folder.
        </p>
        <p>Click the "Next" button to continue.</p>
        <button onClick={() => setTutorial("lastWord")}>Next</button>
      </div>
    );
  } else if (tutorial === "lastWord") {
    return (
      <div className="tutorial">
        <h1>That's it!</h1>
        <p>
          Now you know how to use Pro-Site-Builder! Our team (...of one) is
          continuing to add different components and different styles to
          maximize creative options and minimize edits needed after creating a
          site.{" "}
        </p>
        <hr />
        <p>
          {" "}
          Thank you for your time! I will leave you to check out
          Pro-Site-Builder yourself!
        </p>
        <button onClick={() => setTutorial("finished")}>Done</button>
      </div>
    );
  }
}
