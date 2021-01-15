import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {CloseIcon} from "../icons/CloseIcon";
import {SearchIcon} from "../icons/SearchIcon";
import {NewMessageIcon} from "../icons/NewMessageIcon";
import {AccordionChats} from "../components/AccordionChats";
import {ChatSection} from "./ChatSection";

const sections = [
    {title: "Руководство", subTitle: []},
    {title: "Бухгалтерия", subTitle: []},
    {title: "Аналитика", subTitle: []},
    {
        title: "Разработка и интеграция", subTitle: [
            {name: "Валерий Алексеев"},
            {name: "Алексей Мусаханов"},
            {name: "Юлия Дворецкова"},
            {name: "Софья Загидулина"},
            {name: "Артём Гавриленко"}
        ]
    },
]

export const Main = () => {

    const [search, setSearch] = useState("");

    const searchHandler = (e: ChangeEvent<any>) => {
        setSearch(e.currentTarget.value)
    }

    const getFilteredData = () => {
        if (!search) {
            return sections
        }
        return sections.filter((item: any) => {
            return item.title.toLowerCase().includes(search.toLowerCase().trim())
        })
    }

    const filteredData = getFilteredData()

    return (
        <MainWrapper>
            <div style={{border: "1px solid #1B3A5933", width: 350, height: "92.8vh"}}>
                <SearchBlock>

                    <InputSearch value={search}
                                 onChange={searchHandler}
                                 placeholder={"Поиск..."} type="text"/>

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
                </SearchBlock>
                <AccordionChats sections={filteredData}/>
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
const InputSearch = styled.input`
  border: none;
  outline: none;
  height: 20px;
  margin: 20px 0 20px 25px;
  font-size: 16px;
`
const SearchBlock = styled.div`
  display: flex;
  border-bottom: 1px solid #1B3A5933;
  width: 350px;
  height: 57px;
  align-items: center;
`