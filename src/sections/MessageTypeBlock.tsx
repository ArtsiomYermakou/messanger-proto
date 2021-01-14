import React from "react";
import {SmileIcon} from "../icons/SmileIcon";
import {ClipIcon} from "../icons/Clipicon";
import styled from "styled-components";

export const MessageTypeSection = () => {
    return (
        <MessageTypeBlock>
            <EnterMessageInput placeholder={"Написать сообщение..."} />

            <div style={{display: "flex", alignItems: "center", width: 195, justifyContent: "space-between"}}>
                <InputFunction>
                    <SmileIcon/>
                </InputFunction>
                <InputFunction>
                    <ClipIcon/>
                </InputFunction>
                <ButtonSend>Отправить</ButtonSend>
            </div>
        </MessageTypeBlock>
    )
}

const MessageTypeBlock = styled.div`
  display: flex;
  min-height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`
const EnterMessageInput = styled.textarea`
  font-family: Inter;
  font-size: 14px;
  opacity: 0.7;
  outline: none;
  border: none;
  width: 80%;
  resize: none;
  margin-top: 18px;
`
const InputFunction = styled.span`
  cursor: pointer;
`
const Child = styled.span`
  font: normal normal normal 14px/24px Inter;
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;

  :hover {
    font-weight: 800;
    font: normal normal bold 14px/24px Inter;
  }
`
const ButtonSend = styled.button`
  width: 107px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #007af4;
  color: #fff;
  letter-spacing: 0;
  font: normal normal medium 14px/17px Inter;
  cursor: pointer;

  :hover {
    background-color: #00677e;
    transition: 0.2s;
  }
`