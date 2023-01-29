import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const Poema = () => {
  const poema = JSON.parse(localStorage.getItem('poema'))
  const analise = JSON.parse(localStorage.getItem('analise'))
  console.log(poema)
  console.log(analise)

  const getAuthor = poema => {
    switch (poema.categories[0]) {
      case 3:
        return 'Fernando Pessoa'
        break
      case 5:
        return 'Álvaro Campos'
        break
      case 1:
        return 'Ricardo Reis'
        break
      case 4:
        return 'Alberto Caeiro'
        break
    }
  }

  return (
    <div>
      <ul class='breadcrumb'>
        <li>
          <Link to='/obras'>Obras</Link>
        </li>
        <li>{getAuthor(poema)}</li>
        <li>{poema.title.rendered}</li>
      </ul>
      <div className='poema-container'>
        <h2>{poema.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: poema.content.rendered }} />
      </div>
    </div>
  )
}

export default Poema
