import { Link } from 'react-router-dom'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { motion } from 'framer-motion'
import { API_URL } from '../api'
import { useState, useEffect } from 'react'
import axios from 'axios' // chamadas API

const Obras = () => {
  const [poemas, setPoemas] = useState(null)

  useEffect(() => {
    // chamada à API wordpress
    fetch(`${API_URL}/poemas?per_page=100`).then(res => res.json()).then(data => setPoemas(data)) 
  }, [])

  console.log("poemas: "+poemas)

  return (
    poemas && (
      <div className='container'>
        <div className='obras-container'>
          <div className='left'>
            <div className='menu' id='menu'>
              <p>
                <a href='#pessoa'>Fernando Pessoa</a>
              </p>
              <p>
                <a href='#campos'>Álvaro de Campos</a>
              </p>
              <p>
                <a href='#caeiro'>Alberto Caeiro</a>
              </p>
              <p>
                <a href='#reis'>Ricardo Reis</a>
              </p>
            </div>
          </div>

          <div className='right'>
            <div className='poemas-container'>
              <div className='left-autor' id='pessoa'>
                <img
                  src='imgs/logo_icon.png'
                  alt='Fernando Pessoa'
                  class='logo'
                />
                <span class='author-caption'> Pessoa </span>
              </div>

              <div className='right-poemas'>
                <div className='carousel-wrap'>
                  
                  <div className='owl-carousel'>

                    <div id="div">
                      <div>
                        {/* poemas vai buscar 100 poemas a api */}
                        {poemas
                          .filter(
                            poema =>
                              !poema.title.rendered
                                .toLowerCase()
                                .includes('análise') && poema.categories[0] == 3
                          )
                          .map(poema => (
                            <div>
                              <Link
                                onClick={() => {
                                  localStorage.setItem(
                                    'poema',
                                    JSON.stringify(poema)
                                  )
                                }}
                                to='/poema'
                              >
                                <h2 className='poema_titulo'>
                                  {poema.title.rendered}
                                </h2>
                              </Link>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className='poemas-container'>
              <div className='left-autor' id='campos'>
                <img
                  src='imgs/campos.png'
                  alt='Alvaro de Campos'
                  class='logo'
                />
                <span class='author-caption'> Campos </span>
              </div>

              <div className='right-poemas'>
                <div className='carousel-wrap'>
                  <div className='owl-carousel'>
                    <div>
                      {poemas
                        .filter(
                          poema =>
                            !poema.title.rendered
                              .toLowerCase()
                              .includes('análise') && poema.categories[0] == 5
                        )
                        .map(poema => (
                          <div>
                            <Link
                              onClick={() => {
                                localStorage.setItem(
                                  'poema',
                                  JSON.stringify(poema)
                                )
                              }}
                              to='/poema'
                            >
                              <h2 className='poema_titulo'>
                                {poema.title.rendered}
                              </h2>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='poemas-container'>
              <div className='left-autor' id='caeiro'>
                <img
                  src='imgs/caeiro.png'
                  alt='Alberto Caeiro'
                  class='logo'
                />
                <span class='author-caption'> Caeiro </span>
              </div>

              <div className='right-poemas'>
                <div className='carousel-wrap'>
                  <div className='owl-carousel'>
                    <div>
                      {poemas
                        .filter(
                          poema =>
                            !poema.title.rendered
                              .toLowerCase()
                              .includes('análise') && poema.categories[0] == 4
                        )
                        .map(poema => (
                          <div>
                            <Link
                              onClick={() => {
                                localStorage.setItem(
                                  'poema',
                                  JSON.stringify(poema)
                                )
                              }}
                              to='/poema'
                            >
                              <h2 className='poema_titulo'>
                                {poema.title.rendered}
                              </h2>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='poemas-container'>
              <div className='left-autor' id='reis'>
                <img
                  src='imgs/reis.png'
                  alt='Ricardo Reis'
                  class='logo'
                />
                <span class='author-caption'> Reis </span>
              </div>

              <div className='right-poemas'>
                <div className='carousel-wrap'>
                  <div className='owl-carousel'>
                    {poemas
                      .filter(
                        poema =>
                          !poema.title.rendered
                            .toLowerCase()
                            .includes('análise') && poema.categories[0] == 1
                      )
                      .map(poema => (
                        <div>
                          <Link
                            onClick={() => {
                              localStorage.setItem(
                                'poema',
                                JSON.stringify(poema)
                              )
                            }}
                            to='/poema'
                          >
                            <h2 className='poema_titulo'>
                              {poema.title.rendered}
                            </h2>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Obras
