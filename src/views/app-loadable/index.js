import { Routes, Route } from "react-router-dom";
import AppLayout from 'layouts/app-layout';

const AppLoadable = () => {
    return (
        <Routes>
            <Route path="*" element={<AppLayout />} />
        </Routes>
    );
};

export default AppLoadable