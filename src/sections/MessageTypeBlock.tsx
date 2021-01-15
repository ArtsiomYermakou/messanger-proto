import React, {useState, KeyboardEvent} from "react";
import {SmileIcon} from "../icons/SmileIcon";
import {ClipIcon} from "../icons/Clipicon";
import styled from "styled-components";

type MessageTypeSectionPropsType = {
    sentMessage: any
    arrayMessage: Array<string>
}

export const MessageTypeSection: React.FC<MessageTypeSectionPropsType> = ({sentMessage, arrayMessage}) => {

    const [message, setMessage] = useState("");

    const sendMassageButton = () => {
        if (message) {
            sentMessage([...arrayMessage, message]);
            setMessage("");
        }
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (message) {
            if (e.charCode === 13) {
                sentMessage([...arrayMessage, message]);
                setMessage("");
            }
        }
    }

    return (
        <MessageTypeBlock>
            <EnterMessageInput
                onKeyPress={(e: any) => onKeyPressHandler(e)}
                value={message}
                onChange={(e: any) => setMessage(e.currentTarget.value)}
                placeholder={"Написать сообщение..."}/>

            <div style={{display: "flex", alignItems: "center", width: 195, justifyContent: "space-between"}}>
                <InputFunction>
                    <SmileIcon/>
                </InputFunction>
                <InputFunction>
                    <ClipIcon/>
                </InputFunction>
                <ButtonSend onClick={sendMassageButton}>Отправить</ButtonSend>
            </div>
        </MessageTypeBlock>
    )
}

const MessageTypeBlock = styled.div`
  display: flex;
  min-height: 65px;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`
const EnterMessageInput = styled.input`
  font-family: Inter;
  font-size: 14px;
  opacity: 0.7;
  outline: none;
  border: none;
  width: 80%;
  resize: none;
`
const InputFunction = styled.span`
  cursor: pointer;
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