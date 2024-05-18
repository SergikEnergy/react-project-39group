import { Link } from "react-router-dom";
import { APP_PATHS } from "../../route/paths";
import { Button } from "@mui/material";

export const NavAuthorize = ({logOut}) => {
  return (
    <>
      <Link to={APP_PATHS.HISTORY}>
        <Button variant="outlined">История</Button>
      </Link>
      <Link to={APP_PATHS.FAVORITES}>
        <Button variant="outlined">Избранное</Button>
      </Link>
      <Link to={APP_PATHS.MAIN_PAGE}>
        <Button onClick={logOut} variant="outlined">Выход</Button>
      </Link>
    </>
  );
};