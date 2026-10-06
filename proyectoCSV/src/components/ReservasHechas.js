import React, { createContext, useState, useContext } from 'react';


export const useReservas = () => useContext(ReservasContext);

const ReservasContext = createContext(null);

const horarioSolo = (horario) => 
    horario
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-');

export function ReservasProvider({ children }) {
    const [reservas, setReservas] = useState([]);

    const cuposDisponibles = (clase) => {
        const reservadas = reservas.filter((r) => r.clase.id === clase.id).length;
        return Number(clase.cupos) - reservadas;
    };

    const agregarReserva = (clase, horario) => {
        const horarioNormalizado = horarioSolo(horario);
        const reservaError = reservas.some(
            (reserva) => horarioSolo(reserva.horario) === horarioNormalizado
        );

        if (reservaError) {
            return { success: false, message: 'Ya tienes una reserva para este horario' };
        }

        if (cuposDisponibles(clase) <= 0) {
            return { success: false, message: 'Ya no quedan cupos para esta clase' };
        }

        setReservas((prevReservas) => [
            ...prevReservas, 
            { id: `${clase.id}-${Date.now()}`, clase, horario }
        ]);

        return { success: true };
    };

    return (
        <ReservasContext.Provider value={{ reservas, agregarReserva, cuposDisponibles }}>
            {children}
        </ReservasContext.Provider>
    );
};

