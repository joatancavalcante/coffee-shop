import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CompleteOrder } from "./pages/CompleteOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ConfirmedOrder } from "./pages/ConfirmedOrder";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/"element={<Home />} />
                <Route path="/complete-order"element={<CompleteOrder />} />
                <Route path="/confirmed-order"element={<ConfirmedOrder />} />
            </Route>    
        </Routes>
    )
}