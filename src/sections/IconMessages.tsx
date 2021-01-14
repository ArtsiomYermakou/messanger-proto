import React from "react";
import styled from "styled-components";
import {Avatar, createStyles, makeStyles, Theme, Typography} from "@material-ui/core";
import {deepPurple} from "@material-ui/core/colors";
import like from "../images/like.png"

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

export const IconMessagesSection = () => {
    const classes = useStyles();
    return (
        <IconMessages>
            <LeftMessage>
                <Avatar className={classes.blue}><ChildParent>МК</ChildParent></Avatar>
                <Message>
                    Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации
                    существенных финансовых условий.
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        right: 14,
                        bottom: 6,
                        width: 84,
                        justifyContent: "space-between"
                    }}>
                        <Likes>
                            <img style={{marginTop: 1}} src={like} alt="like"/> <span
                            style={{color: "black", opacity: "unset"}}>2</span>
                        </Likes>
                        <Time>
                            14:23
                        </Time>
                    </div>
                </Message>
            </LeftMessage>
            <RightMessage>

            </RightMessage>
        </IconMessages>
    )
}

const IconMessages = styled.div`
  background-color: #f5f9fc;
  height: 100%;
  padding: 56px 75px 50px 20px;
`
const LeftMessage = styled.div`
  display: flex;
`
const Message = styled.div`
  max-width: 453px;
  min-height: 60px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  border-radius: 8px;
  opacity: 1;
  padding: 15px;
  font-size: 14px;
  font-weight: 500;
  margin-left: 13px;
  line-height: 20px;
  position: relative;
`

const ChildParent = styled.span`
  font-family: Inter;
  font-size: 16px;
`
const Time = styled.div`

`
const Likes = styled.div`
  width: 36px;
  height: 20px;
  padding: 2px 2px;
  background: #E2E2E2 0% 0% no-repeat padding-box;
  border-radius: 8px;
  text-align: center;
  opacity: 0.5;
  cursor: pointer;
`
const RightMessage = styled.div`
  
`