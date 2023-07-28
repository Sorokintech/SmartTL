import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 1);
  cursor: pointer;
`;

export const ModalBlock = styled.div`
  background-color: #71abb9;
  position: relative;
  z-index: 5;
  margin: 0 35%;
  top: 30%;
  opacity: 1;
  border-radius: 4px;
  cursor: auto;
  display: flex;
  flex-direction: column;
`;
export const ModalBlockTop = styled.div`
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const Icon = styled.img`
  padding: 5px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  &:hover {
    transform: scale(1.15);
  }
`;
export const ModalContentLabel = styled.label`
  box-sizing: border-box;
  transition: 0.25s ease-in-out;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const ModalContentInput = styled.input`
  box-sizing: border-box;
  margin-top: 5px;
  padding: 10px 20px;
  width: 100%;
  border: 1px solid #000;
  border-radius: 4px;
  margin-bottom: 10px;
`;
export const ModalTitle = styled.div``;

export const AlertMessage = styled.span`
  transition: 0.25s ease-in-out;
  color: #ffff1a;
  padding: 10px;
  font-size: 12px;
`;
