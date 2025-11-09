import React from "react";

export const EventBusContext = React.createContext();

export const EventBusProvider = ({ children }) => {
    const [eventBus, setEventBus] = React.useState(null);

    return (
        <EventBusContext.Provider value={{ eventBus, setEventBus }}>
            {children}
        </EventBusContext.Provider>
    );
};