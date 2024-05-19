import { Link } from 'react-router-dom';
import {APP_PATHS} from "../../route/paths";

export const Logo = () => {
    return (
        <Link to={APP_PATHS.MAIN_PAGE}>
            <img src="../../../public/AstonLogo.svg" alt="Logo" />
        </Link>
    );
}