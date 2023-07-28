import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("./background/background.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  padding-top: 20px;
`;
export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #fff;
  &:first-child {
    background-color: #ffffcc;
  }
`;
export const TableItem = styled.div`
  color: #243d51;
  border: 1px solid #000;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ActionButton = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  color: #243d51;
  background-color: #fff;
  padding: 10px;
  transition: 0.5s;
  &:hover {
    color: #fff;
    background-color: #71abb9;
  }
`;
export const AddButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  display: flex;
  margin-top: 20px;
  color: #243d51;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.15);
    background-color: #71abb9;
    color: #fff;
  }
`;
export const Icon = styled.img`
  padding: 5px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  &:hover {
    transform: scale(1.15);
  }
`;
export const SuccessToastWrapper = styled.div`
  width: 300px;
  height: 80px;
  background-color: #71abb9;
  border: 3px solid green;
  border-radius: 5px;
  color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const ToastMessage = styled.span`
  padding: 20px;
`;

export const ErrorToastWrapper = styled.div`
  width: 300px;
  height: 80px;
  background-color: #71abb9;
  border: 3px solid red;
  border-radius: 5px;
  color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
