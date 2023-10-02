import React, {useContext, useEffect, useState} from "react";
import { getUser } from "../utils/MainApi";
import {useNavigate} from "react-router-dom";

const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        reloadUser()
            .then(() => {
                navigate('/movies', { replace: true });                
            })
            .catch((err) => {
                console.error(err);
            });
        // eslint-disable-next-line
    }, []);

    const reloadUser = () => {
      return getUser()
        .then((user) => {
          setCurrentUser(user);
        })
    };

    const currentUserContextValue = {
        currentUser,
        setCurrentUser,
        reloadUser,
    }

    return <CurrentUserContext.Provider value={currentUserContextValue}>
        { children }
    </CurrentUserContext.Provider>
}

export const useCurrentUser = () => {
    const context = useContext(CurrentUserContext)

    if (!context) {
        throw new Error('Контекст текущего пользлвателя не определен')
    }

    return context
}
