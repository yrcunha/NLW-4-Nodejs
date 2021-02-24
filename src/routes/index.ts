import {UserController} from "../repositories/Users.repositories";

const userController = new UserController();

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/",
    method: "get",
    action: userController.getAll
  },
  {
    path: "/register",
    method: "post",
    action: userController.create
  }
];
