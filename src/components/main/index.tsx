import * as S from "./style.js";
import React, { useContext } from "react";
import { IUser, IUserResponse } from "../../global/types/types.js";
import { GetAllUsers } from "../../global/api/api.js";
import { EditUserModal } from "../EditModal/modal.js";
import { AddUserModal } from "../AddModal/modal.js";
import { SignInModal } from "../SignInModal/modal.js";
import { titleArray } from "../../global/mockData/mockData.js";
import { ToastContext } from "../../Contexts/context.js";

export const Main: React.FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [localData, setLocalData] = React.useState<string>("");
  const [isEditModalOpen, setEditModalState] = React.useState(false);
  const [isNewModalOpen, setNewModalState] = React.useState(false);
  const [isSignModalOpen, setSignModalState] = React.useState(true);
  const [userInfo, setUserInfo] = React.useState<IUser>();
  const [activeColumn, setActiveColumn] = React.useState<
    keyof Omit<IUser, "id"> | null
  >(null);

  const toast = useContext(ToastContext);

  //Toggles for managing modals
  const toggleEditModal = (user: IUser) => {
    setEditModalState(!isEditModalOpen);
    setUserInfo(user);
  };
  const toggleNewModal = () => {
    setNewModalState(!isNewModalOpen);
  };
  const toggleSignModal = () => {
    setSignModalState(!isSignModalOpen);
    setLocalData(localStorage.getItem("LoginName") ?? "Stranger");
  };

  // Function to filter through the list by columns in alphabetical order
  const UserFilter = (el: keyof Omit<IUser, "id">) => {
    if (el === activeColumn) {
      setUsers([...users.sort((a, b) => b[el].localeCompare(a[el]))]);
      setActiveColumn(null);
    } else {
      setUsers([...users.sort((a, b) => a[el].localeCompare(b[el]))]);
      setActiveColumn(el);
    }
  };
  // Adapters for adjusting the data
  const userAdapter = ({ address, ...user }: IUserResponse): IUser => {
    return {
      ...user,
      city: address.city,
      id: +user.id,
    };
  };
  const usersAdapter = (data: IUserResponse[]): IUser[] => {
    return data.map(userAdapter);
  };

  // Update users lists
  React.useEffect(() => {
    GetAllUsers()
      .then((data) => {
        setUsers(usersAdapter(data));
      })
      .catch(() => toast.danger());
  }, []);
  return (
    <S.Container>
      <h2>Have a good day, {localData}!</h2>
      <S.Wrapper>
        <S.Table>
          {titleArray.map((el, index) => (
            <S.TableItem key={index}>
              {el.charAt(0).toUpperCase() + el.slice(1)}
              <S.Icon
                src="/icons/sort.png"
                alt="save-changes-icon"
                onClick={() => UserFilter(el)}
              ></S.Icon>
            </S.TableItem>
          ))}

          <S.TableItem>Edit User</S.TableItem>
        </S.Table>
        {users?.map(({ id, name, email, username, city }) => (
          <S.Table key={id}>
            <S.TableItem>{name}</S.TableItem>
            <S.TableItem>{email}</S.TableItem>
            <S.TableItem>{username}</S.TableItem>
            <S.TableItem>{city}</S.TableItem>
            <S.TableItem>
              <S.ActionButton
                onClick={() =>
                  toggleEditModal({
                    id,
                    name,
                    email,
                    username,
                    city,
                  })
                }
              >
                Edit
              </S.ActionButton>
            </S.TableItem>
          </S.Table>
        ))}
      </S.Wrapper>
      <S.AddButton onClick={() => toggleNewModal()}>Add New User</S.AddButton>
      {userInfo && (
        <EditUserModal
          user={userInfo}
          isOpen={isEditModalOpen}
          onClose={(data: IUserResponse) => {
            if (data) {
              const newUser = userAdapter(data);
              setUsers([
                ...users.map((user) =>
                  user.id === newUser.id ? newUser : user
                ),
              ]);
            }
            setEditModalState(!isEditModalOpen);
          }}
        />
      )}
      <AddUserModal
        isOpen={isNewModalOpen}
        onClose={(data: IUserResponse) => {
          if (data) {
            const newUser = userAdapter({ ...data, id: users.length + 1 });
            setUsers([...users, newUser]);
          }
          setNewModalState(!isNewModalOpen);
        }}
      />
      <SignInModal
        isOpen={isSignModalOpen}
        onClose={() => {
          toggleSignModal();
        }}
      />
    </S.Container>
  );
};
