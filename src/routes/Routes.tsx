import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminAllUsersPage,  AdminHomePage, AdminReportPage, ClientHomePage, ClientPersonalPage, WelcomePage} from '../components/Components'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={ <WelcomePage /> }/>
          <Route path="Admin-Users" element={ <AdminAllUsersPage /> }/>
          <Route path="Admin-Home" element={ <AdminHomePage /> }/>
          <Route path="Admin-Report" element={ <AdminReportPage /> }/>
          <Route path="Home" element={ <ClientHomePage /> }/>
          <Route path="Personal-Page" element={ <ClientPersonalPage /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
