import IconNotFound from '../components/icons/IconNotFound'
import '../styles/notfound.css'
const NotFound = () => {
  return (
    <seccion className="page-notfound">
      <IconNotFound/>
      <h1>Página no encontrada</h1>
      <p className="parr-notfound">Esta no es la página web que buscas</p>
      <button className="btn btn-outline-primary">De vuelta a casa</button>
    </seccion>
  )
}

export default NotFound
