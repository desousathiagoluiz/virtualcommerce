import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255,255,255,0.5),
            rgba(255,255,255,0.5)
        ), 
        url("https://i.pinimg.com/564x/ae/de/0c/aede0cbcf4b602026851e24f2a106d58.jpg") center;
        background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #38ff00;
    color: white;
    cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CRIE UMA CONTA.</Title>
                <Form>
                    <Input placeholder="Nome" />
                    <Input placeholder="Sobrenome" />
                    <Input placeholder="Nome de Usuário" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Senha" />
                    <Input placeholder="Confirmar Senha" />
                    <Input placeholder="Tel./Whatsapp" />
                    <Agreement>
                        Ao criar uma conta, concordo com o processamento dos meus dados pessoais de acordo com a <b>Política de Privacidade.</b>
                    </Agreement>
                    <Button>CRIAR CONTA!</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register