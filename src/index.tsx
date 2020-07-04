import React, { FC } from "react";
import ReactDom from "react-dom";
import { App } from "./app";

ReactDom.render(
  <App/>,
  document.getElementById("root"),
);
//这个文件是打包的入口