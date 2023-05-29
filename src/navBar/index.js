import { Link } from "react-router-dom"
import { Box, CircularProgress } from '@mui/material';
import { hover } from "@testing-library/user-event/dist/hover";

export const NavBar = ({children}) => {
    return (
            <>
              <div style={{display:"flex", justifyContent:"center", height: "40px", top: 0, display: "flex", background: "#4E4E50"}}>
              <Box display="flex" width={150} justifyContent="center" alignItems='center' borderLeft ="1px solid #232425f8" borderRight ="1px solid #232425f8"  height="100%" > 
                <Link to="/Post" style={{textDecorationColor:"#4E4E50" }}>
                    <span style={{ fontSize: "20px", fontWeight: "700",color:"#FFF"}}>Посты</span>
                </Link>
                </Box>
                <Box  display="flex" width={150} justifyContent="center" alignItems='center'  borderRight ="1px solid #232425f8" height="100%" sx={{fontSize: "20px",fontWeight: "700",color:"#FFF" }}> 
                <Link to="/login" style={{textDecorationColor:"#4E4E50" }}>
                    <span style={{fontSize: "20px", fontWeight: "700",color:"#FFF"}}>Логин</span>
                </Link>
                </Box>
                <Box  display="flex" width={150} justifyContent="center" alignItems='center' borderRight ="1px solid #232425f8" height="100%" sx={{fontSize: "20px",fontWeight: "700",color:"#FFF" }}> 
                <Link to="/signup" style={{textDecorationColor:"#4E4E50" }}>
                    <span style={{fontSize: "20px", fontWeight: "700",color:"#FFF"}}>Регситрация</span>
                </Link>
                </Box>
            </div>            
        {children}  
            </>
    )
}

