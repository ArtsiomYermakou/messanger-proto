import React from "react";
import styled from "styled-components";
import {LogoIcon} from "../icons/Logo"
import {MessagesIcon} from "../icons/MessagesIcon";
import {NotificationIcon} from "../icons/NotificationIcon";
import {Avatar, Badge, makeStyles, Theme} from "@material-ui/core";
import {deepPurple} from "@material-ui/core/colors";
import {ArrowDown} from "../icons/ArrowDownLogo";


const useStyles = makeStyles((theme: Theme) => ({
    blue: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: "#007AF4"
    },
}));


export const Header = () => {
    const classes = useStyles();
    return (
        <HeaderWrapper>
            <div style={{display: "flex", justifyContent: "space-between", height: "100%", alignItems: "center"}}>
                <span style={{margin: "0 13px 0 33px"}}>
                    <LogoIcon/>
                </span>
                <Logo>LOGO</Logo>
                <MenuNavbar>
                    <ItemLink><ItemLinkWrapper>Команда</ItemLinkWrapper></ItemLink>
                    <ItemLink><ItemLinkWrapper>Задачи</ItemLinkWrapper></ItemLink>
                    <ItemLink><ItemLinkWrapper>Календарь</ItemLinkWrapper></ItemLink>
                </MenuNavbar>
            </div>

            <div style={{display: "flex", alignItems: "center"}}>
                <Badge badgeContent={4} color="error">
                    <MessagesIcon/>
                </Badge>
                <Badge badgeContent={32} color="error" style={{margin: "0 40px 0 18px"}}>
                    <NotificationIcon/>
                </Badge>
                <>
                    <Avatar className={classes.blue}>BA</Avatar>
                    <MiniAvatarBlock>
                        <MiniAvatarName>Валерий А.</MiniAvatarName>
                        <MiniAvatarInfo>Веб-студия #VA</MiniAvatarInfo>
                    </MiniAvatarBlock>
                </>
                <ArrowWrapper>
                    <ArrowDown/>
                </ArrowWrapper>
            </div>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
  height: 7vh;
  background: #1B3A59 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.span`
  line-height: 34;
  font: normal normal bold 28px/34px Inter;
  letter-spacing: 0;
  color: #FFFFFF;
  opacity: 1;
  font-size: 28px;
  font-family: Inter;
  font-weight: 300;
`
const ItemLinkWrapper = styled.a`
  letter-spacing: 0;
  color: #fff;
  opacity: 1;
  cursor: pointer;
  font-family: Inter;
  font-size: 16px;

  //:hover {
  //  background: grey;
  //  opacity: 0.7;
  //}
`

const ItemLink = styled.div`
  padding: 25px 20px;
  cursor: pointer;

  :hover {
    background-color: #FFFFFF1A;
  }
`
const MiniAvatarBlock = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
const MiniAvatarName = styled.span`
  letter-spacing: 0;
  color: #fff;
  opacity: 1;
  font-size: 14px;
  font-family: Inter;
  font-size: 14px;
`
const MiniAvatarInfo = styled.span`
  opacity: 0.8;
  color: #fff;
  letter-spacing: 0;
  font-family: Inter;
  font-size: 12px;
`
const ArrowWrapper = styled.span`
  margin: 0 30px 0 10px;
`
const MenuNavbar = styled.div`
  display: flex;
  margin-left: 62px;
  width: 340px;
  justify-content: space-between;
`
