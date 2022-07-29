import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column"})};
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
    font-weight: 200;
    color: white;
    width: 40%;
    display: flex;
    background-color: red;
`;

const Desc = styled.p`
    margin: 20px 0px;
    color: yellow;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    color: #38ff00;
`;

const FilterContainer = styled.div`
    width: 60%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #38ff00;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid #38ff00;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://static.wixstatic.com/media/cc627f_08268f0b65a44cfa97804fe72290c6d4~mv2.png/v1/fill/w_500,h_375,al_c,q_90,usm_0.66_1.00_0.01/cc627f_08268f0b65a44cfa97804fe72290c6d4~mv2.webp" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Moko Espelunca 4i20</Title>
                    <Desc>Como vimos, os modelos de calças são bastante democráticos, podendo ser usados em diversos tipos de ocasiões e mulheres de diferentes biotipos. Escolha aqueles que melhor combinam com seu corpo e estilo e arrase com essa peça coringa do guarda-roupa de qualquer mulher.</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Cores: </FilterTitle>
                            <FilterColor color="pink" />
                            <FilterColor color="green" />
                            <FilterColor color="black" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Tamanhos: </FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>PP</FilterSizeOption>
                                <FilterSizeOption>P</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>G</FilterSizeOption>
                                <FilterSizeOption>GG</FilterSizeOption>
                                <FilterSizeOption>EG</FilterSizeOption>
                                <FilterSizeOption>EGG</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD AO CARRINHO</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
