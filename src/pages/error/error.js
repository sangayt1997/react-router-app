import React from "react";
import MainNavigation from "../../components/main-navigation/main-navigation";

function Error() {
    return (
        <>
           <MainNavigation />
            <main>
                <h1>An Error occurred!</h1>
                <p>Could not find this page!</p>
            </main>
        </>
    );
}

export default Error;
