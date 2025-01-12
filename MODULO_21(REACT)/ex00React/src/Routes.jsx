// eslint-disable-next-line no-unused-vars
import React from "react";
import PropsTest from "./components/PropsTest";
import ConditionalRendering from "./components/RenderCond";
import RenderManyElem from "./components/RenderManyElemB";
import Relogio from "./components/LifeCycle";
import UnControlledForm from "./components/UncontrolledForm";
import ControlledForm from "./components/ControlledForm";
import MultipleInputsForm from "./components/HandlingMultipleInputs";
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/props-test" element={<PropsTest text={"Yes"}/>}></Route>
                <Route path="/conditional-rendering" element={<ConditionalRendering/>}></Route>
                <Route path="/render-many-elem" element={<RenderManyElem/>}></Route>
                <Route path="/time" element={<Relogio/>}></Route>
                <Route path="/uncontrolled-form" element={<UnControlledForm/>}></Route>
                <Route path="/controlled-form" element={<ControlledForm/>}></Route>
                <Route path="/multiple-inputs-form" element={<MultipleInputsForm/>}></Route>

            </Routes>
        </Router>
    )
}

export default AppRoutes;