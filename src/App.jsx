
import { Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout'
import { Dashboard, AddStudents,Login, CreateAccountPage, TeacherFoam} from './Pages/index'
import StdRecord from './Pages/StdRecord'

const App = () => {
  return (
    <>
      <Routes>
        
        <Route path='/login' element={<Login />} />
        <Route path='/createAccount' element={<CreateAccountPage />} />

        <Route path='/' element={<Layout />} >
        <Route path='/teacherfoam' element={<TeacherFoam/>} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/studentRecord' element={<StdRecord/>} />
          <Route path='/addStudent' element={<AddStudents />} />
        </Route>
      </Routes>
    </>

  )
}

export default App