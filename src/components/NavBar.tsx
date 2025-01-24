import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()
  return (

    <aside className="w-64 bg-gray-800 p-4 text-white">
    <nav>
      <ul>
        <li className="mb-4">
          <Button fullWidth variant="text" color="inherit" onClick={() => navigate('/club')}>
            Club (Noticias)
          </Button>
        </li>
        <li className="mb-4">
          <Button fullWidth variant="text" color="inherit" onClick={() => navigate('/game')}>
            Game
          </Button>
        </li>
        <li className="mb-4">
          <Button fullWidth variant="text" color="inherit" onClick={() => navigate('/dashboard')}>
            Dashboard
          </Button>
        </li>
        <li className="mb-4">
          <Button fullWidth variant="text" color="inherit" onClick={() => navigate('/profile')}>
            Profile
          </Button>
        </li>
      </ul>
    </nav>
  </aside>
  )


}