import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { SnackbarProvider } from 'notistack'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider maxSnack={3} autoHideDuration={3000} preventDuplicate>

    <GoogleOAuthProvider clientId={'211543223643-e764dgp0oc4foedc5t5pclgsri7o1ft3.apps.googleusercontent.com'}>

    <Provider store={store}>
      <RouterProvider router={router} />  
      </Provider>
    </GoogleOAuthProvider>
    </SnackbarProvider>
    ,

  </StrictMode>,
)
