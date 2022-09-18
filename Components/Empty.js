import React from "react";
import styled from "styled-components";

export default function Empty() {
  return (
    <ComponentContainer>
      <EmptyImage
        source={require('../Done.png')}
      />
      <EmptyText>There are no tasks today!</EmptyText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 650px;
`;

const EmptyImage = styled.Image`
  width: 350px;
  height: 200px;
`;

const EmptyText = styled.Text`
  color: deepskyblue;
  font-family: poppins-bold;
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 30px;
  font-size: 30px;
  textAlign: center;
`;