import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContextExample from "../ReactHooks/context/ContextExample.jsx";
import Effect from "../ReactHooks/Effect.jsx";
import State from "../ReactHooks/State.jsx";
import CheckBox from "./CheckBox.jsx";
import MyForm from "./myForm.jsx";
import MyMultipleInp from "./MyMultipleInp.jsx";
import MySelect from "./MySelect.jsx";
import MyTextArea from "./myTextArea.jsx";
import RadioBtn from "./RadioBtn.jsx";
import UseReducer from "../ReactHooks/UseReducer.jsx";
import UseRef from "../ReactHooks/UseRef.jsx";


function Router() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/myform">myform</Link>
        <Link to="/select">select</Link>
        <Link to="/multiple">multiple</Link>
        <Link to="/textarea">textarea</Link>
        <Link to="/checkbox">checkbox</Link>
        <Link to="/radio">radiobtn</Link>
        <Link to="/usestate">UseState</Link>
        <Link to="/useeffect">UseEffect</Link>
        <Link to="/usecontext">UseContext</Link>
        <Link to="/useref">UseRef</Link>
      </nav>
      <Routes>
        <Route path="/myform" element={<MyForm />} />
        <Route path="/select" element={<MySelect />} />
        <Route path="/multiple" element={<MyMultipleInp />} />
        <Route path="/textarea" element={<MyTextArea />} />
        <Route path="/checkbox" element={<CheckBox />} />
        <Route path="/radio" element={<RadioBtn />} />
        <Route path="/usestate" element={<State />} />
        <Route path="/useeffect" element={<Effect />} />
        <Route path="/usecontext" element={<ContextExample />} />
        <Route path="/useref" element={<UseRef />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
