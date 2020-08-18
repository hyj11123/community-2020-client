import React from "react";
import { WholeWrapper, Wrapper, Column, Title, TitleWrapper, SearchInput, C_Btn } from "../commonComponents";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";

class FreeBoard extends React.Component {
    render() {
        return (
            <WholeWrapper>
                <TitleWrapper>
                    <Title>FreeBoard</Title>
                </TitleWrapper>

                <TitleWrapper direction={`row`}>
                    <SearchInput />
                    <SearchIcon />
                </TitleWrapper>



                <TitleWrapper width={"960px"} align={"flex-end"}>
                    <Link to={`/write/free`}>
                        <C_Btn>글쓰기</C_Btn>
                    </Link>
                </TitleWrapper>
                <Wrapper width="960px" height="25px" direction="row">
                    <Column width={"5%"} isHead={true}>번호</Column>
                    <Column width={"40%"} isHead={true}>제목</Column>
                    <Column width={"15%"} isHead={true}>작성자</Column>
                    <Column width={"20%"} isHead={true}>작성일</Column>
                    <Column width={"20%"} isHead={true}>조회수</Column>
                </Wrapper>
                {/* ----- DATA AREA START ----- */}
                <Wrapper width="960px" height="25px" direction="row" isData={true}>
                    <Column width={"5%"} isHead={false}>1</Column>
                    <Column width={"40%"} isHead={false}>ㅎㅇ</Column>
                    <Column width={"15%"} isHead={false}>??</Column>
                    <Column width={"20%"} isHead={false}>1930년 10월 1일</Column>
                    <Column width={"20%"} isHead={false}>0</Column>
                </Wrapper>
                <Wrapper width="960px" height="25px" direction="row" isData={true}>
                    <Column width={"5%"} isHead={false}>2</Column>
                    <Column width={"40%"} isHead={false}>ㅂ2</Column>
                    <Column width={"15%"} isHead={false}>??</Column>
                    <Column width={"20%"} isHead={false}>1930년 10월 2일</Column>
                    <Column width={"20%"} isHead={false}>1234</Column>
                </Wrapper>
                <Wrapper width="960px" height="25px" direction="row" isData={true}>
                    <Column width={"5%"} isHead={false}>3</Column>
                    <Column width={"40%"} isHead={false}>iu</Column>
                    <Column width={"15%"} isHead={false}>??</Column>
                    <Column width={"20%"} isHead={false}>1930년 10월 14일</Column>
                    <Column width={"20%"} isHead={false}>672</Column>
                </Wrapper>
                <Wrapper width="960px" height="25px" direction="row" isData={true}>
                    <Column width={"5%"} isHead={false}>4</Column>
                    <Column width={"40%"} isHead={false}>Zz</Column>
                    <Column width={"15%"} isHead={false}>??</Column>
                    <Column width={"20%"} isHead={false}>1930년 10월 19일</Column>
                    <Column width={"20%"} isHead={false}>29</Column>
                </Wrapper>

            </WholeWrapper>
        )
    }
}

export default FreeBoard;