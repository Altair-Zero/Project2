import styled from "styled-components";
export const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #232425f8;
`
export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 400px;
    border: 6px solid #5faa33f8;
    border-radius: 20px;
    margin: 15px; 
`
export const Input = styled.input`
    width: 400px;
    height: 40px;
    padding: 6px 16px;
    border: 4px solid #54ac21f8;
    border-radius: 20px;
    background: transparent;
    color: #fff;
    outline: none;
`
export const Button = styled.button`
    width: 400px;
    height: 45px;
    padding: 8px 16px;
    background: #adaca7;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: #fff;
        background: #54ac21f8;
    }
    &:active {
        background: #54ac21f8;
    }

    &:disabled {
        color: #878787;
        background: #4E4E50;
    }
`
export const H1 = styled.span`
    color: #FFF;
    font-size: 25px;
    margin-bottom: 15px;
`
export const Text = styled.span`
    color: #FFF;
    font-size: 18px;
`
export const TextLink = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #54ac21f8;
    cursor: pointer;
`