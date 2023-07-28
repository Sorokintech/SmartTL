import { ToastContext } from "../../Contexts/context";
import { UpdateUser } from "../../global/api/api";
import { IModalProps } from "../../global/types/types";
import * as S from "./style";
import React, { ChangeEvent, useContext } from "react";

export const EditUserModal: React.FC<IModalProps> = ({
  user,
  isOpen,
  onClose,
}) => {
  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const [updatedUser, setUpdatedUser] =
    React.useState<IModalProps["user"]>(user);
  const toast = useContext(ToastContext);

  const UpdateUserHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedUser({ ...updatedUser, [event.target.name]: event.target.value });
  };
  const SaveUpdates = () => {
    UpdateUser(updatedUser)
      .then((data) => onClose(data))
      .then(() => toast.success("User has been updated successfully"))
      .catch(() => {
        toast.error("Ops, something went wrong. Please try again");
        onClose();
      });
  };
  React.useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  return isOpen ? (
    <S.Container>
      <S.Wrapper ref={overlayRef} onClick={handleOverlayClick}>
        <S.ModalBlock>
          <S.ModalBlockTop>
            <S.Icon
              src="/icons/save.png"
              alt="save-changes-icon"
              onClick={() => SaveUpdates()}
            ></S.Icon>
            <S.ModalTitle>Edit User</S.ModalTitle>
          </S.ModalBlockTop>
          <S.ModalContentLabel>
            User
            <S.ModalContentInput
              type="text"
              autoComplete="off"
              name={"name"}
              value={updatedUser?.name ?? ""}
              onChange={UpdateUserHandler}
            />
            Email
            <S.ModalContentInput
              type="text"
              autoComplete="off"
              name={"email"}
              value={updatedUser?.email ?? ""}
              onChange={UpdateUserHandler}
            />
            Username
            <S.ModalContentInput
              type="text"
              autoComplete="off"
              name={"username"}
              value={updatedUser?.username ?? ""}
              onChange={UpdateUserHandler}
            />
            City
            <S.ModalContentInput
              type="text"
              autoComplete="off"
              name={"city"}
              value={updatedUser?.city ?? ""}
              onChange={UpdateUserHandler}
            />
          </S.ModalContentLabel>
        </S.ModalBlock>
      </S.Wrapper>
    </S.Container>
  ) : null;
};
