import { Routes,BrowserRouter, Route } from'react-router-dom'
import Home from './Pages/Home'
import Features from './Pages/Features'
import Assignment from './Pages/Assignment'
import Routine from './Pages/Routine'
import Cgpa from './Pages/Cgpa'
import Notice from './Pages/Notice'
import Resources from './Pages/Resources'
import ClassTest from './Pages/ClassTest'
function App() {
  

  return (

      <div >
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/features' element={<Features></Features>}></Route>
        <Route path='/assignment' element={<Assignment></Assignment>}></Route>
        <Route path='/routine' element={<Routine></Routine>}></Route>
        <Route path='/cgpa' element={<Cgpa></Cgpa>}></Route>
         <Route path='/resources' element={<Resources></Resources>}></Route>
          <Route path='/classTest' element={<ClassTest></ClassTest>}></Route>
        <Route path='/notice' element={<Notice></Notice>}></Route>
       </Routes>
       </BrowserRouter>
      </div>
  
  )
}

export default App
