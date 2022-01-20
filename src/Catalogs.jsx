import React, { useEffect } from 'react'
import { getCatalogo } from '../utils/get'
import { useDispatch, useSelector } from 'react-redux'
import Pelicula from './Pelicula'

export const Catalogs = () => {
  const dispatch = useDispatch()
  const { isLoading, catalogs, error } = useSelector(state => state.catalogs)

  useEffect(() => {
    dispatch(getCatalogo('bbbb'))
  }, [])

  useEffect(() => {
    const socket = new WebSocket('ws://' + 'localhost:8080' + '/retrieve/' + 'xxxx')
    socket.onmessage = function (m) {
      const data = JSON.parse(m.data)
      dispatch(data.type)
      console.log('Got message: ' + data.type)
    }
  }, [])

  return (
    <>
      {catalogs && catalogs.map((catalog) => {
        return (
          <div key={catalog._id}>
            <div>
              <h5>{catalog.nombre}</h5>{catalog.pelicula &&
                    Object.keys(catalog.pelicula).map((key) => {
                        return (
                          <div key={key}>
                            <Pelicula pelicula={catalog.pelicula[key]} />
                          </div>
                        )
                    })}
            </div>
          </div>
        )
      })}
      {isLoading && <h1>Cargando...</h1>}
      {error && <h1>Error {error}</h1>}
    </>
  )
}
