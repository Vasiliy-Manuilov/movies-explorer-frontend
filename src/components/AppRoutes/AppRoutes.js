import {Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import {useCurrentUser} from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export const AppRoutes = () => {

    const { currentUser } = useCurrentUser()
    const isLoggedIn = !!currentUser

    return <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<ProtectedRoute isAllowed={isLoggedIn} component={Movies} />} />
        <Route path='/saved-movies' element={<ProtectedRoute isAllowed={isLoggedIn} component={SavedMovies} />} />
        <Route path='/profile' element={<ProtectedRoute isAllowed={isLoggedIn} component={Profile} />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
}
