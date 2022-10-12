import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "../src/components/Form";

function App() {
  return (
    <div>
      App
      <div>
        {/* SAMPLE FORM 1 */}
        <Form
          fields={[
            { type: "password", value: "email placeholder" },
            { type: "text", value: "enter your name1" },
          ]}
          id="test-form"
        />

        {/* SAMPLE FORM 2 */}
        <Form
          fields={[
            { type: "email", value: "email placeholder" },
            { type: "text", value: "enter your name2" },
          ]}
          id="test-form2"
        />

        {/* SAMPLE FORM 3 */}
        <Form
          fields={[
            { type: "email", value: "email placeholder3" },
            { type: "text", value: "enter your name3" },
          ]}
          id="test-form3"
        />
      </div>
    </div>
  );
}

export default App;
