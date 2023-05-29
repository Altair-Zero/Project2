import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../store/slices/userSlice";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../functions/changeLocalStorage";
import { Button, Input, LoginForm, MainLayout, H1, Text, TextLink } from "../style";
import { toast } from "react-toastify";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({login: "", password1: "", password2: ""});

  const signUp = () => {
    if (signupData.password1 !== signupData.password2) {
      toast.error("Ошибка пароли не совпадают")
      return
    }
    dispatch(createUser({
      login: signupData.login,
      password: signupData.password1,
      id: 1
    }))
    toast.success("Аккаунт успешно зарегистрирован")
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
          <H1>Регистрация нового аккаунта</H1>
          <Input
            value={signupData.login}
            onChange={(e) => setSignupData({...signupData, login: e.target.value})}
            style={{marginBottom: "10px"}}
            placeholder="Имя пользователя"
          />
          <Input
            value={signupData.password1}
            onChange={(e) => setSignupData({...signupData, password1: e.target.value})}
            style={{marginBottom: "10px"}}
            type="password"
            placeholder="Пароль"
          />   
          <Input
            value={signupData.password2}
            onChange={(e) => setSignupData({...signupData, password2: e.target.value})}
            style={{marginBottom: "10px"}}
            type="password"
            placeholder="Повторите пароль"
          />      
          <Button onClick={signUp} disabled={!signupData.login || !signupData.password1 || !signupData.password2}>Зарегистрироваться</Button> 
          <Box display="flex" marginTop="15px">
            <Text>Уже есть учётная запись? </Text>&nbsp;
            <TextLink onClick={() => navigate("/Login")}>Войдите</TextLink>
          </Box>
        </LoginForm>
    </MainLayout>
  );
}