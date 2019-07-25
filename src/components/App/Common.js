import React from "react";
import ContextExample from "../ContextExample";
import ThinkExample from "../ThinkExample/ThinkExample";
import ReduxExample from "../ReduxExample";
import ReactReduxExample from "../ReactReduxEample";
import RouterExample from "../RouterExample";
// Web Component is incompatible with jest
// import WebComExample from "../WebComExample";
import {text as ContextExampleNote} from "../../assets/notes/ContextExample"
import {text as ReactReduxExampleNote} from "../../assets/notes/ReactReduxExample"
import {text as ThinkExampleNote} from "../../assets/notes/ThinkExample"
import {text as ReduxExampleNote} from "../../assets/notes/ReduxExample"
import {text as RouterExampleNote} from "../../assets/notes/RouterExample"

//todo: should use an adaptor to read json file

export const tabsInfo = [
    {name: "Context", component: <ContextExample />, note: ContextExampleNote},
    {name: "Think in React" ,component: <ThinkExample/>, note: ThinkExampleNote},
    {name: "Redux" ,component: <ReduxExample/>, note: ReduxExampleNote},
    {name: "ReactRedux" ,component: <ReactReduxExample/>, note: ReactReduxExampleNote},
    {name: "UI Element" ,component: <div>UI Element</div>, note: "N/A"},
    {name: "Router" ,component: <RouterExample />, note: RouterExampleNote},
    // {name: "Web Component" ,component: <WebComExample />}
];