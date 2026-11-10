import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Cars from './pages/Cars'
import CarDetail from './pages/CarDetail'
import ImportServices from './pages/ImportServices'
import About from './pages/About'
import Contact from './pages/Contact'
import RequestCar from './pages/RequestCar'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:slug" element={<CarDetail />} />
        <Route path="/import-services" element={<ImportServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-car" element={<RequestCar />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
