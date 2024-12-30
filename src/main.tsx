import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Routes from './routes/Routes.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Routes />
    </Provider>
  </StrictMode>,
)
