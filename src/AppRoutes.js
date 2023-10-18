import react from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import Logs from "./components/Logs.js";
import NewLogForm from "./components/NewLogForm.js";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/logs" element={<Logs />}>
                <Route path=":index" element={<Logs />} />
            </Route>
            <Route path="/logs/new" element={<NewLogForm />} />
        </Routes>
    );
};

export default AppRoutes;