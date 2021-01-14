import React from "react";
import styled from "styled-components";
import {CloseIcon} from "../icons/CloseIcon";
import {SearchIcon} from "../icons/SearchIcon";
import {NewMessageIcon} from "../icons/NewMessageIcon";
import {AccordionChats} from "../components/AccordionChats";
import {ChatSection} from "./ChatSection";

export const Main = () => {
    return (
        <MainWrapper>
            <div style={{border: "1px solid #1B3A5933", width: 350, height: "92.8vh"}}>
                <div style={{
                    display: "flex",
                    borderBottom: "1px solid #1B3A5933",
                    width: 350,
                    height: 57,
                    alignItems: "center"
                }}>
                    <input placeholder={"Поиск..."} type="text" style={{
                        border: "none",
                        outline: "none",
                        height: 20,
                        margin: "20px 0 20px 25px",
                        fontSize: 16
                    }}/>
                    <div style={{display: "flex", justifyContent: "space-between", width: 90, alignItems: "center"}}>
                        <SearchItem>
                            <CloseIcon/>
                        </SearchItem>
                        <SearchItem>
                            <SearchIcon color={"#007af4"} height={"17"} width={"17"}/>
                        </SearchItem>
                        <SearchItem>
                            <NewMessageIcon/>
                        </SearchItem>
                    </div>
                </div>
                <AccordionChats/>
            </div>
            <ChatSection/>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
  display: flex;
`
const SearchItem = styled.div`
  cursor: pointer;
`
const Interpreter = styled.span`
  font-size: 11px;
  letter-spacing: 1.54px;
  //font-family: Inter;
  font: normal normal bold 11px/14px Inter;
`