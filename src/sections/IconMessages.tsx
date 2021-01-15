import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {Avatar, createStyles, makeStyles, Theme} from "@material-ui/core";
import {deepPurple} from "@material-ui/core/colors";
import like from "../images/like.png"
import {ReadMessageIcon} from "../icons/ReadMessageIcon";
import {SentIcon} from "../icons/SentIcon";

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

type IconMessagesSectionPropsType = {
    messages: Array<string>
}

export const IconMessagesSection: React.FC<IconMessagesSectionPropsType> = ({messages}) => {
    const classes = useStyles();

    const messagesEndRef = useRef<any>(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth"})
    }
    useEffect(scrollToBottom, [messages]);

    return (
        <IconMessages>
            <LeftMessage>
                <Avatar className={classes.blue}><ChildParent>МК</ChildParent></Avatar>
                <Message>
                    Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации
                    существенных финансовых условий.
                    <WrapperLikesAndTime>
                        <Likes>
                            <img style={{marginTop: 1}} src={like} alt="like"/> <span
                            style={{color: "black", opacity: "unset"}}>2</span>
                        </Likes>
                        <Time>
                            14:23
                        </Time>
                    </WrapperLikesAndTime>
                </Message>
            </LeftMessage>


            <RightMessage>
                <Message style={{width: 453, height: 130}}>
                    <div style={{borderLeft: "1px solid #007AF4", height: 56}}/>
                    <div style={{position: "absolute"}}>
                        <NameAndTime>
                            <Name>Михайлов Алексей</Name><Time>12.10.2020 12:20</Time>
                        </NameAndTime>
                        <RecentMessage>
                            Задача организации, в особенности же рамки и место обучения кадров представляет собой
                            интересный...
                        </RecentMessage>
                        <div style={{marginTop: 8}}>
                            Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и
                            реализации существенных финансовых условий.
                        </div>
                    </div>
                    <WrapperlikesAndTime2>
                        <Likes>
                            <img style={{marginTop: 1}} src={like} alt="like"/> <span
                            style={{color: "black", opacity: "unset"}}>1</span>
                        </Likes>
                        <Time>
                            14:23
                        </Time>
                        <div>
                            <ReadMessageIcon/>
                        </div>
                    </WrapperlikesAndTime2>
                </Message>
            </RightMessage>

            <NowDate><span>Сегодня, 4 ноября</span></NowDate>

            <LeftMessage style={{marginTop: 28}}>
                <Avatar className={classes.blue}><ChildParent>МК</ChildParent></Avatar>
                <Message>
                    Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации
                    существенных финансовых условий.
                    <WrapperlikesAndTime3>
                        <Time>
                            14:23
                        </Time>
                    </WrapperlikesAndTime3>
                </Message>
            </LeftMessage>

            <RightMessage>
                <Message style={{width: 453}}>
                    <div style={{position: "absolute"}}>
                        <div>
                            Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и
                            реализации существенных финансовых условий.
                        </div>
                    </div>
                    <WrapperlikesAndTime4>
                        <Time>
                            14:23
                        </Time>
                        <div>
                            <SentIcon/>
                        </div>
                    </WrapperlikesAndTime4>
                </Message>
            </RightMessage>

            {
                messages.map((m) => {
                    return (
                        <RightMessage key={m}>
                            <Message style={{width: 453}}>
                                <div style={{position: "absolute", display: "flex"}}>
                                    <div style={{justifyContent: "flex-end"}}>
                                        {m}
                                    </div>
                                </div>
                                <WrapperlikesAndTime4>
                                    <Time>
                                        14:23
                                    </Time>
                                    <div>
                                        <SentIcon/>
                                    </div>
                                </WrapperlikesAndTime4>
                            </Message>
                        </RightMessage>
                    )
                })
            }

            <div ref={messagesEndRef}/>
        </IconMessages>
    )
}

const IconMessages = styled.div`
  background-color: #f5f9fc;
  max-height: 100%;
  height: 650px;
  padding: 56px 75px 50px 20px;
  overflow-y: auto;
`
const LeftMessage = styled.div`
  display: flex;
`
const Message = styled.div`
  display: flex;
  max-width: 453px;
  min-height: 60px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0 1px 2px #00000029;
  border-radius: 8px;
  opacity: 1;
  padding: 15px;
  font-size: 14px;
  font-weight: 500;
  margin-left: 13px;
  line-height: 20px;
  position: relative;
`
const WrapperLikesAndTime = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 14px;
  bottom: 6px;
  width: 84px;
  justify-content: space-between;
`
const WrapperlikesAndTime2 = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 14px;
  bottom: 6px;
  width: 110px;
  justify-content: space-between;
`
const WrapperlikesAndTime3 = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 14px;
  bottom: 6px;
  width: 33px;
  justify-content: space-between;
`
const WrapperlikesAndTime4 = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 14px;
  bottom: 6px;
  width: 60px;
  justify-content: space-between;
`
const NameAndTime = styled.div`
  display: flex;
  width: 238px;
  justify-content: space-between;
`
const Name = styled.div`
  font-size: 12px;
  font: normal normal normal 12px/20px Inter;
  letter-spacing: 0;
  color: #007AF4;
  opacity: 1;
  margin-left: 11px;
  font-weight: 500;
`
const Time = styled.div`
  font: normal normal normal 12px/20px Inter;
  letter-spacing: 0;
  color: #707070;
  opacity: 0.4;
`
const RecentMessage = styled.div`
  font: normal normal normal 12px/20px Inter;
  letter-spacing: 0;
  color: #000000;
  opacity: 1;
  margin-left: 11px;
  font-weight: 500;
  font-size: 12px;
`

const ChildParent = styled.span`
  font-family: Inter;
  font-size: 16px;
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
  display: flex;
  justify-content: flex-end;
  margin-top: 22px;
`
const NowDate = styled.div`
  display: flex;
  font-size: 14px;
  font: normal normal normal 14px/20px Inter;
  letter-spacing: 0;
  color: #000000;
  opacity: 0.4;
  margin-top: 28px;
  justify-content: center;
`