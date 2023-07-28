import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const SuccessToastWrapper = styled.div`
  width: 200px;
  height: 80px;
  background-color: #9fdf9f;
  border: transparent;
  border-radius: 5px;
  color: #fff;
  position: absolute;
  top: 5%;
  left: calc(50% - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 1s ease-in-out;
`;
export const ToastMessage = styled.span`
  padding: 10px;
  font-size: 12px;
`;

export const ErrorToastWrapper = styled.div`
  width: 200px;
  height: 80px;
  background-color: #ff704d;
  border: transparent;
  border-radius: 5px;
  color: #fff;
  position: absolute;
  top: 5%;
  left: calc(50% - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
