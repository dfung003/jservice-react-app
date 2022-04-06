import "./style.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";




export default function App() {




    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
    );
}