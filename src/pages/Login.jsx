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
    width: 25%;
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
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: yellow;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>ENTRAR</Title>
                <Form>
                    <Input placeholder="Usuário" />
                    <Input placeholder="Senha" />
                    <Button>ENTRAR</Button>
                    <Link>ESQUECEU A SENHA?</Link>
                    <Link>CRIAR UMA NOVA CONTA.</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
