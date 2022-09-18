import React, { useState } from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

export default function TodoList({ item, deleteItem }) {
    const [checked, setChecked] = useState(false);
    const clickHandler = () => {
        setChecked(!checked)
      };
  return (
    <ComponentContainer>
      <ListContainer>
        <CirlceContainer>
          <Feather name={(checked) ? "check-circle" : "circle"} size={20} color="#313138" onPress={clickHandler} />
        </CirlceContainer>
        <View>
          <TextItem style={checked && {textDecorationLine: 'line-through'}} onPress={clickHandler}>{item.value}</TextItem>
        </View>
        <IconContainer onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="deepskyblue" />
        </IconContainer>
      </ListContainer>
    </ComponentContainer>
  );
}

const ListContainer = styled.TouchableOpacity`
  background-color: white;
  height: auto;
  width: 350px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
  margin-top: 20px;
`;

const TextItem = styled.Text`
  color: black;
  width: 260px;
  height: auto;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 9px;
  margin-right: 10px;
  font-family: poppins-regular;
`;


const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-top: 5px;
  height: 40px;

  border-radius: 10px;
`;

const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;