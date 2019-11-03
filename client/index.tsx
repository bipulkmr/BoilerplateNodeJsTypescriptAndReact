// import React from 'react';
// import { render } from 'react-dom';
// import App from './App.js';
// render(<App />,   document.getElementById('root'));

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./default/hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);
