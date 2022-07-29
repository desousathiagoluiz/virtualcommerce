import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column"})};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })};
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })};
`;

const Option = styled.option`

`;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Variados</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Cor e Tamanho: </FilterText>
                    <Select>
                        <Option disabled selected>
                            Cor
                        </Option>
                        <Option>Branco</Option>
                        <Option>Preto</Option>
                        <Option>Vermelho</Option>
                        <Option>Azul</Option>
                        <Option>Amarelo</Option>
                        <Option>Verde</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Tamanho
                        </Option>
                        <Option>Extra G.</Option>
                        <Option>Grande</Option>
                        <Option>Médio</Option>
                        <Option>Pequeno</Option>
                        <Option>Extra P.</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Categorias: </FilterText>
                    <Select>
                        <Option selected>Novidades</Option>
                        <Option>Maior Preço</Option>
                        <Option>Menor Preço</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
