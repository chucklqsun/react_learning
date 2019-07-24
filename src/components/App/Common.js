import ContextExample from "../ContextExample";
import ThinkExample from "../ThinkExample/ThinkExample";
import ReduxExample from "../ReduxExample";
import ReactReduxExample from "../ReactReduxEample";
import React from "react";
// import WebComExample from "../WebComExample";

export const tabsInfo = [
    {name: "Context", component: <ContextExample />},
    {name: "Think in React" ,component: <ThinkExample/>},
    {name: "Redux" ,component: <ReduxExample/>},
    {name: "ReactRedux" ,component: <ReactReduxExample/>},
    {name: "UI Element" ,component: <div>UI Element</div>},
    // {name: "Web Component" ,component: <WebComExample />}
];