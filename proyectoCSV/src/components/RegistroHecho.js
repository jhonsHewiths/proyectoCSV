import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children }) {
    
    const [usuario, setUsuario] = useState(null);
    const registrar = (datos) => setUsuario(datos);

 
    return (
        <UserContext.Provider value={{ usuario, registrar }}>
        {children}
        </UserContext.Provider>
    );
}

export const useUsuario = () => useContext(UserContext);