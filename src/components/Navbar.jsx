import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })};
`;

const Center = styled.div`
    flex: 3;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: 200;
    font-size: 35px;
    color: white;
    display: inline;
    width: 100%;
    background-color: yellow; 
    ${mobile({ fontSize: "19px", display: "inline" })};
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
    font-size: 17px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "9px", marginLeft: "4px" })};
`;

const MenuItem1 = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    background-color: #38ff00;
    color: white;
    ${mobile({ fontSize: "9px", marginLeft: "4px", backgroundColor: "38ff00", color: "white" })};
`;

const MenuItem2 = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    background-color: yellow;
    color: white;
    ${mobile({ fontSize: "9px", marginLeft: "4px", backgroundColor: "yellow", color: "white" })};
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>BR</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        ESPELUNCA 4i20
                    </Logo>
                </Center>
                <Right>

                    <MenuItem1>REGISTRAR</MenuItem1>
                    <MenuItem2>ENTRAR</MenuItem2>
                    <MenuItem>

                        <Badge badgeContent={1} color="error">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar