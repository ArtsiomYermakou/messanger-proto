import React, {useState} from "react";
import styled from "styled-components";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Avatar,
    createStyles,
    makeStyles, Theme,
    Typography
} from "@material-ui/core";
import {deepPurple} from "@material-ui/core/colors";
import {relative} from "path";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '70%',
            marginLeft: 30,
            boxShadow: "none"
        },
        heading: {
            boxShadow: "none"
        },
        blue: {
            color: theme.palette.getContrastText(deepPurple[500]),
            backgroundColor: "#007AF4",
            height: 23,
            width: 23,
            before: {
                position: "relative"
            },
            after: {
                position: "relative"
            }
        },
        bef: {
            before: {
                position: "relative"
            }
        }
    }),
);

type AccordionChatsPropsType = {
    sections: any
}


const MyAccordion = styled(Accordion)`
  margin: 0;

  &&:before {
    position: relative;
  }
`
const MyAccordionSummary = styled(AccordionSummary)`
  min-height: 100% !important;
  margin: 0;

  && .Mui-expanded {
    min-height: 100%;
    margin: 0;
  }
`

export const AccordionChats: React.FC<AccordionChatsPropsType> = ({sections}) => {
    const classes = useStyles();

    return (
        <>
            <div style={{marginLeft: 30, marginTop: 20, marginBottom: 12}}>
                <Interpreter>ОТДЕЛЫ</Interpreter>
            </div>

            <div className={classes.root}>
                {sections.map((section: any) => <MyAccordion
                        // expanded={false}
                        key={Math.random()}
                        style={{boxShadow: "none"}}>
                        <MyAccordionSummary style={{padding: 0}}>
                            <Typography style={{boxShadow: "none", display: "flex"}}>
                                <Avatar
                                    className={classes.blue}><ChildParent>{section.title[0]}</ChildParent></Avatar><Child>{section.title}</Child>
                            </Typography>
                        </MyAccordionSummary>

                        <AccordionDetails>
                            <Typography style={{padding: 0, margin: 0}}>
                                {section.subTitle && section.subTitle.map((person: any) => <ChatItem key={Math.random()}>
                                    <Avatar className={classes.blue}><ChildParent>{person.name[0]}</ChildParent>
                                    </Avatar>
                                    <Child>{person.name}</Child>
                                </ChatItem>)
                                }
                            </Typography>
                        </AccordionDetails>

                    </MyAccordion>
                )}
                <RecentChats>

                    <TitleRecent>ПОСЛЕДНИЕ ЧАТЫ</TitleRecent>

                    <div style={{display: "flex", padding: "9px 0", cursor: "pointer"}}>
                        <Avatar className={classes.blue}><ChildParentRecent>КФ</ChildParentRecent></Avatar>
                        <ChildRecent>Константин Филатов</ChildRecent>
                    </div>

                    <div style={{display: "flex", padding: "9px 0", cursor: "pointer"}}>
                        <Avatar className={classes.blue}><ChildParentRecent>ЮД</ChildParentRecent></Avatar>
                        <ChildRecent>Юлия Дворецкова</ChildRecent>
                    </div>

                    <div style={{display: "flex", padding: "9px 0", cursor: "pointer"}}>
                        <Avatar className={classes.blue}><ChildParentRecent>АБ</ChildParentRecent></Avatar>
                        <ChildRecent>Алина Богданова</ChildRecent>
                    </div>

                </RecentChats>
            </div>
        </>
    )
}

const Interpreter = styled.span`
  font-size: 11px;
  letter-spacing: 1.54px;
  font-family: Inter;
  font-weight: 500;
`
const ChildParent = styled.span`
  font-family: Inter;
  font-size: 11px;
`
const ChildParentRecent = styled.span`
  font-family: Inter;
  font-size: 9px;
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
const ChildRecent = styled.span`
  font: normal normal normal 14px/24px Inter;
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;

  :hover {
    font-weight: 800;
    font: normal normal bold 14px/24px Inter;
  }
`
const RecentChats = styled.div`
  margin: 28px 0 12px 0;

`
const TitleRecent = styled.span`
  font-family: Inter;
  font-weight: bold;
  font-size: 11px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 28px;
`
const ChatItem = styled.div`
  display: flex;
  padding: 9px 0;
  cursor: pointer;
`