import {useSelector} from "react-redux";
import NotAuthorizedPage from "../pages/NotAuthorizedPage/NotAuthorizedPage.jsx";

const ProtectedRoute = ({children}) => {
    const isAuth = useSelector(state => state.isAuth.isAuth)

    if(!isAuth){
        return <NotAuthorizedPage />
    }
    return children
}

export default ProtectedRoute