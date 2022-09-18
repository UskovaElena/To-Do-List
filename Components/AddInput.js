import React, { useState } from "react";
import {View, TextInput, Text, TouchableOpacity} from 'react-native'
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";



export default function AddInput({ submitHandler }){
  const [value, setValue] = useState("");
  const [crossedOut, setCrossedOut] = useState(false);


  const onChangeText = (text) => {
    setValue(text);
  };


  return (
    <ComponentContainer>
      <InputContainer>
        <Input value={value} placeholder="Enter task" onChangeText={onChangeText} />
      </InputContainer>
      <SubmitButton
        onPress={() => {
          setValue(submitHandler(value));
          setValue("");
        }}
      >
        <MaterialIcons name="send" size={24} color="white" />
      </SubmitButton>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  flex-direction: row;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  background-color: white;
  width: 300px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: deepskyblue;
  margin-bottom: 20px;
  border-radius: 10px;
`;