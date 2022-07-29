import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton1 = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "red" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
    ${mobile({ fontSize: "10px" })};
`;

const TopButton2 = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "#38ff00" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
    ${mobile({ fontSize: "10px" })};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })};
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })};
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.div`
    font-weight: 800;
    color: yellow;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "30px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #38ff00;
    border-color: #38ff00;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>SEU CARRINHO</Title>
                <Top>
                    <TopButton2 type="filled">CONTINUAR COMPRANDO</TopButton2>
                    <TopTexts>
                        <TopText>Sacola de Compras(2)</TopText>
                        <TopText>Lista de Compras(0)</TopText>
                    </TopTexts>
                    <TopButton1 type="filled">FECHAR CARRINHO</TopButton1>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://static.wixstatic.com/media/cc627f_ed169ad621aa4a468a963c0e213e77de~mv2.png/v1/fill/w_500,h_375,al_c,q_90,usm_0.66_1.00_0.01/cc627f_ed169ad621aa4a468a963c0e213e77de~mv2.webp" />
                                <Details>
                                    <ProductName><b>Produto:</b> Bandeja Multifuncional - Verde Louco 4i20</ProductName>
                                    <ProductId><b>Ref:</b> 420840</ProductId>
                                    <ProductColor color="#38ff00" />
                                    <ProductSize><b>Tamanho:</b> Único</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 98</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://static.wixstatic.com/media/cc627f_5e5ed536c7024fa2adb961360a14386d~mv2.jpg/v1/fill/w_500,h_375,al_c,q_85,usm_0.66_1.00_0.01/cc627f_5e5ed536c7024fa2adb961360a14386d~mv2.webp" />
                                <Details>
                                    <ProductName><b>Produto:</b> Bandeja Multifuncional - Barbie 4i20 Louca</ProductName>
                                    <ProductId><b>Ref:</b> 408240</ProductId>
                                    <ProductColor color="pink" />
                                    <ProductSize><b>Tamanho:</b> Único</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 99</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>RESUMO DO PEDIDO</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Sub-Total:</SummaryItemText>
                            <SummaryItemPrice>$ 234</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Frete:</SummaryItemText>
                            <SummaryItemPrice>$ 34.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Desc. Frete:</SummaryItemText>
                            <SummaryItemPrice>$ -34.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">Total:</SummaryItemText>
                            <SummaryItemPrice>$ 234</SummaryItemPrice>
                        </SummaryItem>
                        <Button>PAGAR</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
