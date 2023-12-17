import React, { createContext, useContext, useState, useEffect } from 'react';


export const ExploreContext = createContext();

export const ExploreProvider = ({children}) => {
    const [sortName, setSortName] = useState('');
  
    return(
        <ExploreContext.Provider value={{sortName, setSortName}}>
            {children}
        </ExploreContext.Provider>
    )
}