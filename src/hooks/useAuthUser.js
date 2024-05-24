import { userKeyLocalStorage } from '../data/userKeyLocalStorage';

export const useAuthUser = () => {
  const user = localStorage.getItem(userKeyLocalStorage);

  return !!user;
};
