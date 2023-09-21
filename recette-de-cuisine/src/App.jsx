import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./styles/index.scss"

export default function App() {
    return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    );
    }