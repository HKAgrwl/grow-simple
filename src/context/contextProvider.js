import React, { useState, useEffect } from "react";
import AppContext from "./appContext";

export default function AppProvider({ children }) {

    const [locationList, setLocationList] = useState([]);

    useEffect(() => {
        const retrievedList = JSON.parse(localStorage.getItem("locationList"));
        if (retrievedList) setLocationList(retrievedList);
    }, []);

    useEffect(() => {
        if (locationList?.length) {
            localStorage.setItem("locationList", JSON.stringify(locationList))
        }
    }, [locationList]);
    
    var currentLocation = 0;
    var nextLocation = 1;

    const context = { setLocationList, locationList,currentLocation,nextLocation};

    return <AppContext.Provider value={context}>
        {children}
    </AppContext.Provider>
}
