import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #38ff00;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
    return (
        <Container>
            Super Oferta! Frete grátis para pedidos acima de R$ 199
        </Container>
    )
}

export default Announcement
