import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/main-navigation/main-navigation";

function MainLayout () {
    return(
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;
