import React from 'react';

export const CurrentUserContext = React.createContext(null);

// import React, { useContext, useEffect, useState } from 'react';
// import { getUser } from '../utils/MainApi';

// const CurrentUserContext = React.createContext(null);

// export const CurrentUserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState();
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     reloadUser()
//       .catch((err) => {
//         console.error(err);
//       });
//     // eslint-disable-next-line
//   }, []);

//   const reloadUser = () => {
//     setIsLoading(true)
//     return getUser().then((user) => {
//       setCurrentUser(user);
//       setIsLoading(false)
//     });
//   };

//   const currentUserContextValue = {
//     currentUser,
//     setCurrentUser,
//     reloadUser,
//     isLoading,
//   };

//   return (
//     <CurrentUserContext.Provider value={currentUserContextValue}>
//       {children}
//     </CurrentUserContext.Provider>
//   );
// };

// export const useCurrentUser = () => {
//   const context = useContext(CurrentUserContext);

//   if (!context) {
//     throw new Error('Контекст текущего пользлвателя не определен');
//   }

//   return context;
// };
