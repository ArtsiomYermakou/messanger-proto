import React, {useState} from "react";
import styled from "styled-components";
import {Avatar, createStyles, makeStyles, Theme} from "@material-ui/core";
import {deepPurple} from "@material-ui/core/colors";
import {SearchIcon} from "../icons/SearchIcon";
import {SettingsIcon} from "../icons/SettingsIcon";
import {MessageTypeSection} from "./MessageTypeBlock";
import {IconMessagesSection} from "./IconMessages";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        blue: {
            color: theme.palette.getContrastText(deepPurple[500]),
            backgroundColor: "#007AF4",
            height: 40,
            width: 40
        },
    }),
);

export const ChatSection = () => {
    const classes = useStyles();

    const [messages, setMessages] = useState<Array<string>>([])

    console.log(messages)
    return (
        <MainBlockSection>
            <HeaderChat>
                <ChatItem>
                    <Avatar className={classes.blue}><ChildParent>ОЧ</ChildParent></Avatar>
                    <InfoHeaderChat>
                        <ChatName>Общий чат</ChatName>
                        <UsersInChat>12 участников</UsersInChat>
                    </InfoHeaderChat>
                </ChatItem>

                <SettingsAndSearchBlock>
                    <div style={{cursor: "pointer"}}>
                        <SearchIcon width={"20"} height={"20"} color={"#bfbfbf"}/>
                    </div>
                    <div style={{cursor: "pointer"}}>
                        <SettingsIcon/>
                    </div>

                </SettingsAndSearchBlock>
            </HeaderChat>
            <IconMessagesSection/>
            <MessageTypeSection arrayMessage={messages} sentMessage={setMessages}/>
        </MainBlockSection>
    )
}

const MainBlockSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`
const HeaderChat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 78px;
  background-color: #fff;
  border-bottom: 2px solid #b8c5cf;
  align-items: center;
  padding: 0 30px;
`
const ChatItem = styled.div`
  display: flex;
  padding: 9px 0;
  cursor: pointer;
  align-items: center;
`
const InfoHeaderChat = styled.div`
  margin-left: 10px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const ChatName = styled.div`
  font-family: Inter;
  font-size: 14px;
  font: normal normal bold 14px/17px Inter;
`
const UsersInChat = styled.div`
  font-family: Inter;
  font-size: 12px;
  font: normal normal normal 12px/15px Inter;
  opacity: 0.4;
`

const ChildParent = styled.span`
  font-family: Inter;
  font-size: 16px;
`
const SettingsAndSearchBlock = styled.div`
  display: flex;
  width: 64px;
  align-items: center;
  justify-content: space-between;
`
