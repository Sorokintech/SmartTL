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
  /* background-color: #71abb9; */
  background-color: #ff6666;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const Icon = styled.img`
  padding: 5px;
  width: 35px;
  height: 35px;
  transition: 0.25s ease-in-out;
`;
export const ModalContentLabel = styled.label`
  box-sizing: border-box;
  transition: 0.25s ease-in-out;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const ModalTitle = styled.div`
  padding-bottom: 15px;
`;

export const AlertMessage = styled.span`
  transition: 0.25s ease-in-out;
  color: #ffff1a;
  padding: 10px;
  font-size: 12px;
`;
