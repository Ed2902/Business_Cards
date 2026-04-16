import React from 'react'
import './asesores.css'

const asesoresEstadosUnidosLatam = [
  {
    nombre: 'Paola Garzon',
    cargo: 'Representación en Estados Unidos y Latinoamérica',
    foto: '/avatar2.webp',
    whatsapp: '573182123378',
  },
  {
    nombre: 'Cristina Avendaño',
    cargo: 'Representación en Estados Unidos y Latinoamérica',
    foto: '/avatar2.webp',
    whatsapp: '17864236363',
  },
  {
    nombre: 'Juan Avendaño',
    cargo: 'Representación en Estados Unidos y Latinoamérica',
    foto: '/avatar1.webp',
    whatsapp: '17862165515',
  },
  {
    nombre: 'Giancarlo Avendaño',
    cargo: 'Representación en Estados Unidos y Latinoamérica',
    foto: '/Gian.webp',
    whatsapp: '17866610046',
  },
]

const asesoresColombia = [
  {
    nombre: 'Andres Felipe Barrera Rodriguez',
    cargo: 'Representación en Colombia',
    foto: '/AndresBarrera.png',
    whatsapp: '573028583784',
    alias: 'Felipe',
  },
  {
    nombre: 'Omar Melo',
    cargo: 'Representación en Colombia',
    foto: '/omar.webp',
    whatsapp: '573134292250',
  },
  {
    nombre: 'Karen Gonzalez',
    cargo: 'Representación en Colombia',
    foto: '/karen.png',
    whatsapp: '573143002760',
  },
  {
    nombre: 'Claudia Morales',
    cargo: 'Representación en Colombia',
    foto: '/claudia.webp',
    whatsapp: '573107811985',
  },
]

const seccionesAsesores = [
  {
    titulo: 'Representación en Estados Unidos y Latinoamérica',
    asesores: asesoresEstadosUnidosLatam,
  },
  {
    titulo: 'Representación en Colombia',
    asesores: asesoresColombia,
  },
]

function obtenerNombreMensaje(asesor) {
  if (asesor.alias) return asesor.alias
  const [nombre] = asesor.nombre.split(' ')
  return nombre
}

function crearMensaje(asesor) {
  const nombreMensaje = obtenerNombreMensaje(asesor)
  return `Hola ${nombreMensaje}, escanee tu tarjeta con QR y me interesa algun negocio con tu empresa https://metalharvest.io`
}

function crearUrlWhatsApp(telefono, mensaje) {
  if (!telefono) return ''

  const mensajeCodificado = encodeURIComponent(mensaje)
  return `https://wa.me/${telefono}?text=${mensajeCodificado}`
}

export default function AsesoresPage() {
  return (
    <main className='asesores-page'>
      <div className='asesores-shell'>
        <header className='asesores-header' data-aos='fade-down'>
          <div className='asesores-brand'>
            <img src='/Harvest.webp' alt='Harvest' className='asesores-logo' />
            <p className='asesores-pill'>Harvest</p>
          </div>
          <h1>Selecciona a tu asesor</h1>
          <p>Haz click en una tarjeta para abrir WhatsApp.</p>
        </header>

        {seccionesAsesores.map((seccion, seccionIndex) => (
          <section className='asesores-section' key={seccion.titulo}>
            <h2 className='asesores-section-title'>{seccion.titulo}</h2>

            <div className='asesores-grid'>
              {seccion.asesores.map((asesor, index) => {
                const mensaje = crearMensaje(asesor)
                const url = crearUrlWhatsApp(asesor.whatsapp, mensaje)

                return (
                  <a
                    key={`${asesor.whatsapp || asesor.nombre}-${index}`}
                    href={url || undefined}
                    target='_blank'
                    rel='noreferrer'
                    className='asesor-card'
                    aria-label={`Contactar a ${asesor.nombre} por WhatsApp`}
                    data-aos='fade-up'
                    data-aos-delay={(seccionIndex * 4 + index) * 80}
                  >
                    {asesor.foto && (
                      <div className='asesor-avatar-wrap'>
                        <img
                          src={asesor.foto}
                          alt={asesor.nombre}
                          className='asesor-avatar'
                          loading='lazy'
                        />
                        <span className='asesor-avatar-ring asesor-avatar-ring--one' />
                        <span className='asesor-avatar-ring asesor-avatar-ring--two' />
                      </div>
                    )}
                    <div className='asesor-content'>
                      <h2>{asesor.nombre}</h2>
                      <p>{asesor.cargo}</p>
                      <span>Abrir WhatsApp</span>
                    </div>
                  </a>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
