import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../functions/changeLocalStorage";
import { Button, Input, LoginForm, MainLayout, H1, TextLink } from "../style";
import { toast } from "react-toastify";

export const Login = () => {
  const users = useSelector(state => state.users)
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({login: "", password: "", id: 1});
  const getUser = () => (
  users.find(v => v.login === loginData.login && v.password === loginData.password)
  )

  const login = () => {
    if (getUser()) {
      changeLocalStorage("create", loginData);
      navigate("/user")
    } else {
      toast.error("Неверные данные пользователя")
    }
  }

  useEffect(() => {
    const deleteCookie = () => {
      changeLocalStorage("delete");
    }

    deleteCookie()
  }, [])

  return (
    <MainLayout>
        <LoginForm>
          <H1>Добро пожаловать</H1>
          <Input
            value={loginData.login}
            onChange={(e) => setLoginData({...loginData, login: e.target.value})}
            style={{marginBottom: "15px"}}
            placeholder="Имя пользователя"
          />
          <Input
            value={loginData.password}
            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
            style={{marginBottom: "15px"}}
            type="password"
            placeholder="Пароль"
          />  
          <Button onClick={login} disabled={!loginData.login || !loginData.password}>Войти</Button>    
          <Box display="flex" marginTop="18px">
            <TextLink onClick={() =>navigate("/SignUp")}>Зарегистрироваться</TextLink>
          </Box>  
        </LoginForm>
    </MainLayout>
  );
}