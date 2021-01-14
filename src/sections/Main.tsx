import React from "react";
import styled from "styled-components";
import {CloseIcon} from "../components/CloseIcon";

export const Main = () => {
    return (
        <MainWrapper>
            <div style={{border: "1px solid #1B3A5933", width: 350, height: "93vh"}}>
                <div style={{display: "flex", borderBottom: "1px solid #1B3A5933", width: 350, height: 57, alignItems: "center"}}>
                    <input placeholder={"Поиск..."} type="text" style={{border: "none", outline: "none", height: 20, margin: "20px 0 20px 25px", fontSize: 16}}/>
                    <div style={{cursor: "pointer"}}>
                        <CloseIcon />
                    </div>

                </div>
                <div style={{marginLeft: 30, marginTop: 20, marginBottom: 12}}>
                    <span style={{fontSize: 11, letterSpacing: "1.54px"}}>ОТДЕЛЫ</span>
                </div>
            </div>
            <div>

            </div>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
  display: flex;
`