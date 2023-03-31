import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Body({ site, imports }) {
  const app = `
  ${imports}
  
  
  function Body() {
    return (
      <div>
      ${site}
      </div>
      );
    }
    
    export default Body;
    `;
  // Make an HTTP POST request to the server to write the file
  axios
    .post("/writeFile", { content: app })
    .then((response) => {
      // console.log("File written successfully");
    })
    .catch((error) => {
      console.error("Error writing file", error);
    });
  return <div></div>;
}
