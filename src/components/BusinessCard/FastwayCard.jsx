import React from 'react'
import './fastway-card.css'
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

export default function FastwayCard({ card }) {
  if (!card) return null
  const { person, brand, contact, socials, about } = card

  const wa = buildWhatsAppLink(
    contact?.whatsapp ?? contact?.phone,
    contact?.greeting
  )
  const mail = buildMailtoLink(contact?.email)
  const tel = buildTelLink(contact?.phone)

  return (
    <main className='min-h-dvh grid place-items-center py-6'>
      <article
        className='fw-card mx-auto w-full max-w-[420px]'
        data-aos='fade-up'
      >
        {/* HEADER */}
        <header className='fw-header' data-aos='fade-down'>
          <div className='fw-header-bar' />

          <div className='fw-header-content'>
            {brand?.logoUrl && (
              <div className='fw-logo-wrap' data-aos='zoom-in'>
                <img
                  src={brand.logoUrl}
                  alt='Fastway logo'
                  className='fw-logo-img'
                />
              </div>
            )}

            <div className='fw-person'>
              <h1 className='fw-name'>{person?.name}</h1>
              <p className='fw-title'>{person?.title}</p>
              <p className='fw-company'>{person?.company}</p>
            </div>
          </div>
        </header>

        {/* BODY */}
        <section className='fw-body' data-aos='fade-up' data-aos-delay='60'>
          {about && <p className='fw-about'>{about}</p>}

          {/* BOTONES */}
          <div className='fw-contact-pills'>
            <div className='fw-contact-row'>
              <ContactPill
                href={wa}
                label='WhatsApp'
                icon={<WhatsappLogo size={18} weight='fill' />}
                variant='wa'
              />
              <ContactPill
                href={mail}
                label='Correo'
                icon={<EnvelopeSimple size={18} weight='fill' />}
                variant='mail'
              />
            </div>

            <div className='fw-contact-row fw-contact-row--center'>
              <ContactPill
                href={tel}
                label='Llamar'
                icon={<PhoneCall size={18} weight='fill' />}
                variant='phone'
              />
            </div>
          </div>

          <div className='fw-contact-inline'>
            {contact?.phone && (
              <span className='fw-contact-item'>{contact.phone}</span>
            )}
            {contact?.email && (
              <span className='fw-contact-item fw-contact-dot'>
                {contact.email}
              </span>
            )}
          </div>
        </section>

        {/* FOOTER / REDES */}
        <footer className='fw-footer' data-aos='fade-up' data-aos-delay='120'>
          <div className='fw-footer-label'>Conéctate</div>
          <div className='fw-socials'>
            {socials?.web && (
              <SocialIcon
                href={socials.web}
                icon={<Globe size={20} weight='fill' />}
                kind='web'
              />
            )}
            {socials?.facebook && (
              <SocialIcon
                href={socials.facebook}
                icon={<FacebookLogo size={20} weight='fill' />}
                kind='fb'
              />
            )}
            {socials?.instagram && (
              <SocialIcon
                href={socials.instagram}
                icon={<InstagramLogo size={20} weight='fill' />}
                kind='ig'
              />
            )}
            {socials?.linkedin && (
              <SocialIcon
                href={socials.linkedin}
                icon={<LinkedinLogo size={20} weight='fill' />}
                kind='ln'
              />
            )}
          </div>
        </footer>
      </article>
    </main>
  )
}

function ContactPill({ href, label, icon, variant }) {
  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel='noopener noreferrer'
      className={clsx('fw-pill', `fw-pill--${variant}`)}
      data-aos='zoom-in'
    >
      <span className='fw-pill-icon'>{icon}</span>
      <span className='fw-pill-label'>{label}</span>
    </a>
  )
}

function SocialIcon({ href, icon, kind }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={clsx('fw-social', `fw-social--${kind}`)}
      data-aos='zoom-in'
    >
      {icon}
    </a>
  )
}
