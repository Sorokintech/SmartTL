import React from "react";
import { Main } from "./components/main";
import { ToastContext } from "./Contexts/context";
import * as S from "./style";
import { ErrorModal } from "./components/ErrorModal/modal";

function App() {
  const [successToast, setSuccessToast] = React.useState(false);
  const [errorToast, setErrorToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");
  const [dangerModal, setDangerModal] = React.useState(false);
  // functions to pass to Context
  const success = (message: string) => {
    setToastMessage(message);
    setSuccessToast(!successToast);
    setTimeout(() => setSuccessToast((prev) => !prev), 2000);
  };
  const error = (message: string) => {
    setToastMessage(message);
    setErrorToast(!successToast);
    setTimeout(() => setErrorToast((prev) => !prev), 2000);
  };
  const danger = () => {
    setDangerModal(!dangerModal);
  };
  return (
    <S.Container>
      <ToastContext.Provider value={{ success, error, danger }}>
        <Main />
        {successToast && (
          <S.SuccessToastWrapper>
            <S.ToastMessage>{toastMessage}</S.ToastMessage>
          </S.SuccessToastWrapper>
        )}
        {errorToast && (
          <S.ErrorToastWrapper>
            <S.ToastMessage>{toastMessage}</S.ToastMessage>
          </S.ErrorToastWrapper>
        )}
        <ErrorModal isOpen={dangerModal} />
      </ToastContext.Provider>
    </S.Container>
  );
}

export default App;
