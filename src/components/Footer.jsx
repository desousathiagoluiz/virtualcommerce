import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline, YouTube } from "@material-ui/icons";
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    background-color: black;
    ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    font-weight: 200;
    color: white;
    width: 40%;
    background-color: yellow;
    ${mobile({ fontSize: "25px" })};
`;

const Desc = styled.p`
    margin: 20px 0px;
    color: red;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })};
`;

const Title = styled.h3`
    margin-bottom: 30px;
    color: yellow;
    ${mobile({ color: "white" })};
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    color: yellow;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    color: red;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    color: yellow;
    ${mobile({ backgroundColor: "red" })};
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: red;
    ${mobile({ color: "white" })};
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ESPELUNCA 4I20</Logo>
                <Desc>
                ©2022 por Espelunca.CNPJ 38.359.282/0001-90. Todos os direitos reservados. Construida e Gerenciada com muito Amor,Erva e Café.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>

                <Title>Links Úteis</Title>
                <List>
                    <ListItem>Início</ListItem>
                    <ListItem>Carrinho</ListItem>
                    <ListItem>Dichavadores</ListItem>
                    <ListItem>Kit's</ListItem>
                    <ListItem>Acessórios</ListItem>
                    <ListItem>Blog</ListItem>
                    <ListItem>Rastreio</ListItem>
                    <ListItem>Termos</ListItem>
                </List>
            </Center>
            <Right>

                <Title>Contato</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> Av.Network Nº 192, Edificio Router Sl. 8080 - Conectividade - IW.
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +55 (31) 9 9999-9999
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> contato@espelunca4i20.com.br
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
