import React from "react";
import { createRoot } from "react-dom/client";

const header = React.createElement("h1", {}, "Hello World from React");
const root1 = createRoot(document.getElementById("root"));
root1.render(header);
