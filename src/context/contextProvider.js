import React, { useState, useEffect } from "react";
import AppContext from "./appContext";

export default function AppProvider({ children }) {

    const [locationList, setLocationList] = useState([]);
    let currentLocation = 0;
    let nextLocation = 1;

    // useEffect(() => {
    //     const retrievedList = JSON.parse(localStorage.getItem("locationList"));
    //     if (retrievedList) setLocationList(retrievedList);
    // }, []);

    // useEffect(() => {
    //     if (locationList?.length) {
    //         localStorage.setItem("locationList", JSON.stringify(locationList))
    //     }
    // }, [locationList]);

    const context = { setLocationList, locationList};

    return <AppContext.Provider value={context}>
        {children}
    </AppContext.Provider>
}
