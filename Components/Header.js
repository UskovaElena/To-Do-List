import React from "react";
import styled from "styled-components";
import moment from 'moment';

let today = moment().format("DD.MM.YYYY");

export default function Header() {
  return (
    <ComponentContainer>
      <HeaderText>To Do List</HeaderText>
      <HeaderList>{today}</HeaderList>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: deepskyblue;
`;

const HeaderText = styled.Text`
  color: white;
  font-family: poppins-bold;
  font-size: 30px;
  margin-left: 20px;
`;

const HeaderList = styled.Text`
  color: white;
  font-family: poppins-bold;
  font-size: 20px;
  margin-right: 20px;
`;