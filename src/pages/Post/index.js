
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Posts = () => {

  const [users, setUsers] = useState(false)
  const [posts, setPosts] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  const getInitialData = async() => {
    let users = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers(await users.json())
    let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    setPosts(await posts.json())
  }

  useEffect(() => {
    getInitialData()
  }, [])

  const getPostsCount = (it) => {
    return posts.filter(v => v.userId === it.id).length
  }

  return (
    <Box display="grid" gridTemplateColumns="1fr 1800px 1fr" sx={{background: "#232425f8"}}>
      <Box display="flex" flexDirection="column" gridArea="1 / 2 / 2 / 3" sx={{background: "#232425f8", minHeight: "100vh", width: "1800px"}}>
        <Box width="100%" textAlign="center" mt={2} sx={{fontWeight: "800", fontSize: "25px",color:"#FFF" }}>
          Пользователи и посты
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Box width="49%" pl={2}>
            <Box mb={1} textAlign="center" sx={{fontWeight: "700", fontSize: "16px",color:"#FFF" }}>Пользователи</Box>
            <Box height="calc(100vh - 86px)" sx={{overflowY: "auto"}}>
              {(!users || !posts) && (
                <Box display="flex" justifyContent="center" alignItems='center' height="100%">
                  <CircularProgress size={100} color="inherit"/>
                </Box>
              )}
              {(users && posts) && users.map((it, ind) => (
                <Box onClick={() => setCurrentUser(it)} key={ind} width="auto" mt={1} p={2} 
                  sx={{
                    cursor: "pointer", 
                    border: "2px solid black",
                    borderRadius: "10px", 
                    color: currentUser.id === it.id ? "#fff" : "#fff",
                    background: currentUser.id === it.id ? "#54ac21f8" : "#4E4E50",
                    transition: "all 0.2s ease-out"
                  }}
                >
                  <Box display="flex"><Box sx={{fontWeight: "600",color:"#FFF" }}>Имя:&nbsp;</Box >{it.name}</Box>
                  <Box display="flex"><Box sx={{fontWeight: "600",color:"#FFF" }}>Никнейм:&nbsp;</Box>{it.username}</Box>
                  <Box display="flex" mt={1}><Box sx={{fontWeight: "600",color:"#FFF" }}>Почта:&nbsp;</Box>{it.email}</Box>
                  <Box display="flex"><Box sx={{fontWeight: "600",color:"#FFF" }}>Телефон:&nbsp;</Box>{it.phone}</Box>
                  <Box display="flex"><Box sx={{fontWeight: "600",color:"#FFF" }}>Постов:&nbsp;</Box>{getPostsCount(it)}</Box>
                </Box>
              ))}            
            </Box>
          </Box>
          <Box width="49%" pl={2}>
            <Box mb={1} textAlign="center" sx={{fontWeight: "700", fontSize: "16px",color:"#FFF" }}>Посты{currentUser && ` пользователя ${currentUser.username}`}</Box>
            <Box height="calc(100vh - 88px)" sx={{overflowY: "auto"}}>
              {!currentUser && (
                <Box display="flex" justifyContent="center" alignItems='center' height="100%" sx={{fontWeight: "700",color:"#FFF" }}>
                  Выберите пользователя для просмотра его постов
                </Box>
              )}
              {currentUser && posts.filter(v => v.userId === currentUser.id).map((it, ind) => (
                <Box key={ind} width="auto" mt={1} p={1.5} sx={{border: "1px solid black" ,borderRadius: "8px",color:"#FFF",background: "#4E4E50"}}>
                  <h2 style={{textAlign: "center"}}>{it.title}</h2>
                  <p>{it.body}</p>
                </Box>
              ))}            
            </Box>
          </Box>      
        </Box>
      </Box>
    </Box>
  )
}

