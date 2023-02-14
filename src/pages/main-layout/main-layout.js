import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/main-navigation/main-navigation";
import classes from "./main-layout.module.css";

function MainLayout () {
    return(
        <>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;
