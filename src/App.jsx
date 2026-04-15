
import { Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout'
import { Dashboard, AddStudents,Login, CreateAccountPage} from './Pages/index'

const App = () => {
  return (
    <>
      <Routes>
        
        <Route path='/login' element={<Login />} />
        <Route path='/createAccount' element={<CreateAccountPage />} />

        <Route path='/' element={<Layout />} >
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/addStudent' element={<AddStudents />} />
        </Route>
      </Routes>
    </>

  )
}

export default App