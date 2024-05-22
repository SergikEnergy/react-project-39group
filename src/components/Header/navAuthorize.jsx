import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { APP_PATHS } from "../../route/paths";
import { useAuthContext } from "@/hooks/useAuthContext";


export const NavAuthorize = () => {
  const { userName, setUser, logOutUser } = useAuthContext();

  return (
    <>
      {/*//Вытащить logOut из контекста*/}
      {/*Дописать вывод никнейма пользователя*/}
      <Link to={APP_PATHS.HISTORY}>
        <Button variant="outlined">История</Button>
      </Link>
      <Link to={APP_PATHS.FAVORITES}>
        <Button variant="outlined">Избранное</Button>
      </Link>
      <Link to={APP_PATHS.MAIN_PAGE}>
        <Button
          // вызываю doSignOut
          onClick={logOutUser()}
          variant="outlined">
          Выход
        </Button>
      </Link>
    </>
  );
};
