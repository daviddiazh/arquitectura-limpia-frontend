import React from 'react'

function Pelicula ({ pelicula }) {
  return (
    <><span>{pelicula.nombre}</span><span>{pelicula.nombre}</span><p><strong>Sinopsis: </strong>{pelicula.sinopsis}</p><p><strong>Año: </strong>{pelicula.fecha}</p><p><strong>Genero: </strong>{pelicula.genero}</p><a href={pelicula.url} target='_blank' rel='noreferrer'>Ver Pelicula</a>
    </>
  )
}

export default Pelicula
