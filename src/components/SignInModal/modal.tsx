import { IOpenClose } from "../../global/types/types";
import * as S from "./style";
import React, { ChangeEvent } from "react";

export const SignInModal: React.FC<IOpenClose> = ({ isOpen, onClose }) => {
  const [signIn, setSignIn] = React.useState<string>("");
  const [alert, setAlert] = React.useState<boolean>(false);

  // Handler to manage input changes
  const SignInHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSignIn(event.target.value);
  };

  // setting name to the local storage
  const setLocalStorage = () => {
    if (signIn.length > 1) {
      localStorage.setItem("LoginName", signIn);
      onClose();
    } else {
      setAlert(!alert);
    }
  };
  return isOpen ? (
    <S.Container>
      <S.Wrapper>
        <S.ModalBlock>
          <S.ModalBlockTop>
            <S.Icon
              src="/icons/done.png"
              alt="save-changes-icon"
              onClick={() => setLocalStorage()}
            ></S.Icon>
          </S.ModalBlockTop>
          <S.ModalContentLabel>
            <S.ModalTitle>Please, Introduce yourself</S.ModalTitle>
            {alert && (
              <S.AlertMessage>
                Please, type at least something...
              </S.AlertMessage>
            )}
            <S.ModalContentInput
              type="text"
              autoComplete="off"
              placeholder="Please type in your Name"
              name={"name"}
              value={signIn ?? ""}
              onChange={SignInHandler}
            />
          </S.ModalContentLabel>
        </S.ModalBlock>
      </S.Wrapper>
    </S.Container>
  ) : null;
};
