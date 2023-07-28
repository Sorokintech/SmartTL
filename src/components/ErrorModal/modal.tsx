import { IOpenClose } from "../../global/types/types";
import * as S from "./style";

export const ErrorModal: React.FC<Omit<IOpenClose, "onClose">> = ({
  isOpen,
}) => {
  return isOpen ? (
    <S.Container>
      <S.Wrapper>
        <S.ModalBlock>
          <S.ModalBlockTop>
            <S.Icon src="/icons/error.png" alt="save-changes-icon"></S.Icon>
            <S.ModalTitle>Sorry, something went wrong...</S.ModalTitle>
          </S.ModalBlockTop>
          <S.ModalContentLabel>
            <S.ModalTitle>Please, reload the page</S.ModalTitle>
          </S.ModalContentLabel>
        </S.ModalBlock>
      </S.Wrapper>
    </S.Container>
  ) : null;
};
