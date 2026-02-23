import React from 'react'
import './business-card.css'
import clsx from 'clsx'
import {
  buildWhatsAppLink,
  buildMailtoLink,
  buildTelLink,
} from '../../utils/links'
import {
  WhatsappLogo,
  EnvelopeSimple,
  PhoneCall,
  Globe,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from 'phosphor-react'

export default function BusinessCard({ card }) {
  if (!card) return null
  const { person, brand, contact, socials, about } = card

  const wa = buildWhatsAppLink(
    contact?.whatsapp ?? contact?.phone,
    contact?.greeting
  )
  const mail = buildMailtoLink(contact?.email)
  const tel = buildTelLink(contact?.phone)

  return (
    <main className='min-h-dvh grid place-items-stretch py-2'>
      <article
        className='gw-card mx-auto w-full max-w-[420px]'
        data-aos='fade-up'
      >
        {/* HERO */}
        <div className='wave-wrap' data-aos='fade-down'>
          {brand?.logoUrl && (
            <div
              className='gw-logo-badge'
              data-aos='zoom-in'
              data-aos-delay='90'
            >
              <img src={brand.logoUrl} alt='Logo' className='gw-logo-img' />
            </div>
          )}

          {/* OLAS ANIMADAS CON SVG - altura aumentada */}
          <div className='wave-svg-container'>
            <svg
              className='wave-svg'
              viewBox='0 0 1200 150'
              preserveAspectRatio='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              {/* Ola Verde */}
              <path
                className='wave-path wave-path--green'
                d='M0,70 C150,90 300,50 450,70 C600,90 750,50 900,70 C1050,90 1200,50 1200,70 L1200,150 L0,150 Z'
              >
                <animate
                  attributeName='d'
                  dur='8s'
                  repeatCount='indefinite'
                  values='
                    M0,70 C150,90 300,50 450,70 C600,90 750,50 900,70 C1050,90 1200,50 1200,70 L1200,150 L0,150 Z;
                    M0,60 C150,40 300,80 450,60 C600,40 750,80 900,60 C1050,40 1200,80 1200,60 L1200,150 L0,150 Z;
                    M0,70 C150,90 300,50 450,70 C600,90 750,50 900,70 C1050,90 1200,50 1200,70 L1200,150 L0,150 Z
                  '
                />
              </path>

              {/* Ola Naranja */}
              <path
                className='wave-path wave-path--orange'
                d='M0,80 C150,60 300,100 450,80 C600,60 750,100 900,80 C1050,60 1200,100 1200,80 L1200,150 L0,150 Z'
              >
                <animate
                  attributeName='d'
                  dur='6s'
                  repeatCount='indefinite'
                  values='
                    M0,80 C150,60 300,100 450,80 C600,60 750,100 900,80 C1050,60 1200,100 1200,80 L1200,150 L0,150 Z;
                    M0,90 C150,110 300,70 450,90 C600,110 750,70 900,90 C1050,110 1200,70 1200,90 L1200,150 L0,150 Z;
                    M0,80 C150,60 300,100 450,80 C600,60 750,100 900,80 C1050,60 1200,100 1200,80 L1200,150 L0,150 Z
                  '
                />
              </path>

              {/* Ola Azul */}
              <path
                className='wave-path wave-path--blue'
                d='M0,100 C150,120 300,80 450,100 C600,120 750,80 900,100 C1050,120 1200,80 1200,100 L1200,150 L0,150 Z'
              >
                <animate
                  attributeName='d'
                  dur='10s'
                  repeatCount='indefinite'
                  values='
                    M0,100 C150,120 300,80 450,100 C600,120 750,80 900,100 C1050,120 1200,80 1200,100 L1200,150 L0,150 Z;
                    M0,90 C150,70 300,110 450,90 C600,70 750,110 900,90 C1050,70 1200,110 1200,90 L1200,150 L0,150 Z;
                    M0,100 C150,120 300,80 450,100 C600,120 750,80 900,100 C1050,120 1200,80 1200,100 L1200,150 L0,150 Z
                  '
                />
              </path>

              {/* Ola oscura - conecta con el bloque */}
              <path
                className='wave-path wave-path--dark'
                d='M0,110 C150,90 300,130 450,110 C600,90 750,130 900,110 C1050,90 1200,130 1200,110 L1200,150 L0,150 Z'
              >
                <animate
                  attributeName='d'
                  dur='7s'
                  repeatCount='indefinite'
                  values='
                    M0,110 C150,90 300,130 450,110 C600,90 750,130 900,110 C1050,90 1200,130 1200,110 L1200,150 L0,150 Z;
                    M0,115 C150,135 300,95 450,115 C600,135 750,95 900,115 C1050,135 1200,95 1200,115 L1200,150 L0,150 Z;
                    M0,110 C150,90 300,130 450,110 C600,90 750,130 900,110 C1050,90 1200,130 1200,110 L1200,150 L0,150 Z
                  '
                />
              </path>
            </svg>
          </div>
        </div>

        {/* CUERPO */}
        <section
          className='gw-body-band--dark'
          data-aos='fade-up'
          data-aos-delay='60'
        >
          <h1 className='text-[26px] font-extrabold leading-tight text-white'>
            {person?.name}
          </h1>
          <p className='text-[13px] text-white/90 mt-1'>{person?.title}</p>
          <p className='text-[12px] text-white/75'>{person?.company}</p>

          {about && (
            <p className='mt-4 text-[13.5px] leading-6 text-white/92'>
              {about}
            </p>
          )}

          <div className='pills-wrap'>
            <Pill
              href={wa}
              className='pill--wa'
              icon={<WhatsappLogo size={18} weight='fill' />}
              label='WhatsApp'
            />
            <Pill
              href={mail}
              className='pill--mail'
              icon={<EnvelopeSimple size={18} weight='fill' />}
              label='Correo'
            />
            <Pill
              href={tel}
              className='pill--phone'
              icon={<PhoneCall size={18} weight='fill' />}
              label='Llamar'
            />
          </div>
        </section>

        {/* CONTACTO + REDES */}
        <section
          className='px-5 pb-6 pt-2 bg-white'
          data-aos='fade-up'
          data-aos-delay='150'
        >
          <div className='contact-card'>
            <div className='text-sm font-medium text-slate-800'>Contacto</div>
            <div className='text-sm text-slate-700 mt-0.5'>
              {contact?.phone} · {contact?.email}
            </div>
          </div>

          <div className='socials-wrap'>
            {socials?.web && (
              <Social
                href={socials.web}
                className='social social--web'
                icon={<Globe size={22} weight='fill' />}
              />
            )}
            {socials?.facebook && (
              <Social
                href={socials.facebook}
                className='social social--fb'
                icon={<FacebookLogo size={22} weight='fill' />}
              />
            )}
            {socials?.instagram && (
              <Social
                href={socials.instagram}
                className='social social--ig'
                icon={<InstagramLogo size={22} weight='fill' />}
              />
            )}
            {socials?.linkedin && (
              <Social
                href={socials.linkedin}
                className='social social--ln'
                icon={<LinkedinLogo size={22} weight='fill' />}
              />
            )}
          </div>
        </section>
      </article>
    </main>
  )
}

function Pill({ href, icon, label, className }) {
  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel='noopener noreferrer'
      className={clsx('pill', className)}
      data-aos='zoom-in'
    >
      <span className='pill__icon'>{icon}</span>
      <span className='pill__label'>{label}</span>
    </a>
  )
}

function Social({ href, className, icon }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={className}
      data-aos='zoom-in'
    >
      {icon}
    </a>
  )
}
