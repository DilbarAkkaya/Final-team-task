import styled from 'styled-components';

export const StyledYes = styled.button`
  min-width: 100px;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin-right: 10px;
  background: #008000;
  font-size: 18px;
  cursor: pointer;
`;
export const StyledNo = styled.button`
  min-width: 100px;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin-right: 10px;
  background: #ff0000;
  font-size: 18px;
  cursor: pointer;
`;
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const StyledClose = styled.button`
  border: none;
  padding: 0px 0px 25px 0px;
  background: none;
  margin-left: 99%;
  font-size: 18px;
  cursor: pointer;
`;