import { Route, Routes } from 'react-router-dom'
import logo from './assets/logo.svg'
import { Header, Footer} from "./Components"
import { HomePag, NosotrosPag, ProcesoPag, MenuPag, GaleriaPag, ContactoPag } from './pages'

function App() {

  return (
    <>
      
      <Header
        logo={logo}
      />

      <Routes>
        <Route path='/' element={<HomePag/>}/>
        <Route path='/Nosotros' element={<NosotrosPag/>}/>
        <Route path='/Proceso' element={<ProcesoPag/>}/>
        <Route path='/Menu' element={<MenuPag/>}/>
        <Route path='/Galeria' element={<GaleriaPag/>}/>
        <Route path='/Contacto' element={<ContactoPag/>}/>
      </Routes>


      <Footer />

    </>
  )
}

export default App
