/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { getLocalStorage } from "../utils"
import { jwtDecode } from "jwt-decode";


export const NavBar = () => {
    const navigate = useNavigate()
    const token = getLocalStorage('token')
    const decoded: any = jwtDecode(token);



  return (

    <aside className="position-static  w-40 bg-gray-800 text-white">
    <nav>
      <ul>
        <li className="mb-4 mt-10">
          <Button fullWidth variant="text" color="inherit" onClick={() => navigate('/club')}>
            Club
          </Button>
        </li>
        <li className="mb-4">
          <Button fullWidth variant="text" color="inherit" onClick={() => navigate('/game')}>
            Juega
          </Button>
        </li>
        <li className="mb-4">
          <Button fullWidth variant="text" color="inherit" onClick={() => navigate('/dashboard')}>
            Inicio
          </Button>
        </li>
        <li className="mb-4">
          <Button fullWidth variant="text" color="inherit" onClick={() => navigate(`/profile/${decoded?.id}`)}>
            Perfil
          </Button>
        </li>
      </ul>
    </nav>
  </aside>
  )


}