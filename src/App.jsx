import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Ofrenda from './pages/Ofrenda'
import NoEncontrada from './pages/NoEncontrada'
import {
  PaginaBiografia,
  PaginaMensajes,
  PaginaMinisterios,
  PaginaInvitaciones,
  PaginaVisitanos,
  PaginaVidaBendecida,
} from './pages/Secciones'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="biografia" element={<PaginaBiografia />} />
        <Route path="mensajes" element={<PaginaMensajes />} />
        <Route path="ministerios" element={<PaginaMinisterios />} />
        <Route path="invitaciones" element={<PaginaInvitaciones />} />
        <Route path="visitanos" element={<PaginaVisitanos />} />
        <Route path="vida-bendecida" element={<PaginaVidaBendecida />} />
        <Route path="ofrenda" element={<Ofrenda />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}
