import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "../src/components/Form";

const sampleFormData = {
  fields: {
    email: "",
    password: "",
  },
};

function App() {
  return (
    <div>
      App
      <div>
        <Form fields={{ email: "test", password: "" }} />
      </div>
    </div>
  );
}

export default App;
