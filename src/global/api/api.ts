import { IModalProps, INewUser } from "../types/types";

// Request to add a new User

export const AddUser = async (user: INewUser) => {
  return fetch("https://jsonplaceholder.typicode.com/users/", {
    method: "POST",
    body: JSON.stringify({
      name: `${user.name}`,
      email: `${user.email}`,
      username: `${user.username}`,
      address: {
        city: `${user.city}`,
      },
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

// Request to update the User

export const UpdateUser = async (user: IModalProps["user"]) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      id: `${user.id}`,
      name: `${user.name}`,
      email: `${user.email}`,
      username: `${user.username}`,
      address: {
        city: `${user.city}`,
      },
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

// Request to get all Users

export const GetAllUsers = async () => {
  return fetch(
    "https://jsonplaceholder.typicode.com/users?_start=0&_limit=15"
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Something went wrong");
  });
};

// Request to get suggested cities to choose from

export const AutoFill = async (value: string) => {
  return fetch(`https://api.api-ninjas.com/v1/city?name=${value}&limit=5`, {
    method: "GET",
    headers: {
      "X-Api-Key": "w0x0zsk5CtxwIDdqvYyp9g==CfM7Ql8FuzeUJSXM",
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};
