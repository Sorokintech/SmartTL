import { ToastContext } from "../../Contexts/context";
import { AddUser, AutoFill } from "../../global/api/api";
import { ResetUserData } from "../../global/mockData/mockData";
import { IOpenClose, ISuggestCity, INewUser } from "../../global/types/types";
import { debounce } from "../utils";
import * as S from "./style";
import React, { ChangeEvent, useContext } from "react";
const debounceAutoFill = debounce(AutoFill, 500);

export const AddUserModal: React.FC<IOpenClose> = ({ isOpen, onClose }) => {
  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      setNewUser(ResetUserData);
      setCityList([]);
      setAlert(!alert);
      onClose();
    }
  };

  const [newUser, setNewUser] = React.useState<INewUser>(ResetUserData);
  const [alert, setAlert] = React.useState<boolean>(false);
  const [cityList, setCityList] = React.useState<ISuggestCity[]>([]);
  const toast = useContext(ToastContext);

  const NewUserHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };
  const AddNewUser = (newUser: INewUser) => {
    if (newUser !== ResetUserData) {
      AddUser(newUser)
        .then((data) => onClose(data))
        .then(() => toast.success("User has been created successfully"))
        .catch(() => {
          toast.error("Ops, something went wrong. Please try again");
          onClose();
        });
      setNewUser(ResetUserData);
      setCityList([]);
    } else {
      setAlert(!alert);
    }
  };

  const SearchEngine = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, city: event.target.value });
    if (event.target.value !== "") {
      debounceAutoFill(event.target.value).then((data) => {
        setCityList(data);
      });
    }
  };
  const ResetSuggestionList = (value: string) => {
    setNewUser({ ...newUser, city: value });
    setCityList([]);
  };
  return isOpen ? (
    <S.Container>
      <S.Wrapper ref={overlayRef} onClick={handleOverlayClick}>
        <S.ModalBlock>
          <S.ModalBlockTop>
            <S.Icon
              src="/icons/save.png"
              alt="save-changes-icon"
              onClick={() => AddNewUser(newUser)}
            ></S.Icon>
            <S.ModalTitle>Add New User</S.ModalTitle>
          </S.ModalBlockTop>
          {alert && (
            <S.AlertMessage>Please, type at least something...</S.AlertMessage>
          )}
          <S.ModalContentLabel>
            User
            <S.ModalContentInput
              type="text"
              autoComplete="off"
              placeholder="Type in your name..."
              name={"name"}
              value={newUser?.name ?? ""}
              onChange={NewUserHandler}
            />
            Email
            <S.ModalContentInput
              type="text"
              autoComplete="off"
              placeholder="Type in your email..."
              name={"email"}
              value={newUser?.email ?? ""}
              onChange={NewUserHandler}
            />
            Username
            <S.ModalContentInput
              type="text"
              autoComplete="off"
              placeholder="Type in your ..."
              name={"username"}
              value={newUser?.username ?? ""}
              onChange={NewUserHandler}
            />
            City
            <S.ModalContentInput
              type="text"
              autoComplete="off"
              placeholder="Type in your ..."
              name={"сity"}
              value={newUser?.city ?? ""}
              onChange={SearchEngine}
            />
            {cityList.length > 1 &&
              cityList.map((el) => (
                <S.SuggestList
                  key={`${el.latitude} - ${el.longitude}`}
                  onClick={() => ResetSuggestionList(el.name)}
                >
                  {el.name}
                </S.SuggestList>
              ))}
          </S.ModalContentLabel>
        </S.ModalBlock>
      </S.Wrapper>
    </S.Container>
  ) : null;
};
