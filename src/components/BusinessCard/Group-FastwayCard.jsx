import React from 'react'
import './Group-fastway.css'
import clsx from 'clsx'
import { buildWhatsAppLink } from '../../utils/links'
import {
  WhatsappLogo,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Globe,
} from 'phosphor-react'

export default function GroupFastwayCard({ card }) {
  if (!card) return null

  const {
    person,
    brand,
    contact,
    socials,
    about,
    supportLogos: cardSupport,
  } = card

  const wa = buildWhatsAppLink(
    contact?.whatsapp ?? contact?.phone,
    contact?.greeting
  )

  // PRIORIDAD: supportLogos del card (los que tienen href) -> luego los del brand
  const supportLogos = cardSupport ?? brand?.supportLogos ?? []

  return (
    <main className='min-h-dvh grid place-items-stretch py-2'>
      <article
        className='fw-card fw-card--group mx-auto w-full max-w-[420px]'
        data-aos='fade-up'
      >
        {/* HERO: foto + logo centrados, más abajo */}
        <div className='fw-hero fw-hero--group'>
          <div className='fw-hero-bg' />
          <div className='fw-hero-orbit fw-hero-orbit--outer' />
          <div className='fw-hero-orbit fw-hero-orbit--inner' />

          <div className='fw-hero-content'>
            {person?.avatarUrl && (
              <div className='fw-avatar-wrap' data-aos='zoom-in'>
                <img
                  src={person.avatarUrl}
                  alt={person.name}
                  className='fw-avatar'
                />
              </div>
            )}

            {brand?.logoUrl && (
              <div
                className='fw-logo-main-wrap'
                data-aos='zoom-in'
                data-aos-delay='120'
              >
                <img
                  src={brand.logoUrl}
                  alt={brand?.name ?? 'Logo'}
                  className='fw-logo-main'
                />
              </div>
            )}
          </div>
        </div>

        {/* CUERPO: info persona + descripción */}
        <section className='fw-body'>
          <header className='fw-header'>
            {person?.name && (
              <h1 className='fw-name' data-aos='fade-right'>
                {person.name}
              </h1>
            )}
            {(person?.title || person?.role) && (
              <p className='fw-role' data-aos='fade-right' data-aos-delay='60'>
                {person.title || person.role}
              </p>
            )}
            {person?.company && (
              <p
                className='fw-company'
                data-aos='fade-right'
                data-aos-delay='100'
              >
                {person.company}
              </p>
            )}
          </header>

          {about && (
            <p className='fw-about' data-aos='fade-up'>
              {about}
            </p>
          )}

          {/* CTA PRINCIPAL: botón de WhatsApp al centro, protagonista */}
          {wa && (
            <section
              className='fw-main-cta'
              data-aos='fade-up'
              data-aos-delay='80'
            >
              <a href={wa} target='_blank' rel='noopener noreferrer'>
                <span className='fw-pill fw-pill--whatsapp fw-pill--main'>
                  <WhatsappLogo size={20} weight='fill' />
                  <span>WhatsApp</span>
                </span>
              </a>
            </section>
          )}
        </section>

        {/* FOOTER: redes -> con apoyo de -> contacto */}
        <footer className='fw-footer'>
          {/* Redes sociales */}
          <div className='fw-social-row' data-aos='fade-up'>
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

          {/* Con apoyo de (con links) */}
          {supportLogos.length > 0 && (
            <div className='fw-support' data-aos='fade-up' data-aos-delay='80'>
              <span className='fw-support-label'>Con apoyo de:</span>

              <div className='fw-support-logos'>
                {supportLogos.map((logo, idx) => (
                  <SupportLogo key={idx} logo={logo} />
                ))}
              </div>
            </div>
          )}

          {/* Contacto (abajo de Con apoyo de, justificado a la izquierda) */}
          <section
            className='fw-contact-section fw-contact-section--footer'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <h2 className='fw-contact-title'>Contacto</h2>

            <div className='fw-contact-details fw-contact-details--left'>
              {contact?.phone && (
                <p className='fw-contact-line'>📞 {contact.phone}</p>
              )}
              {contact?.email && (
                <p className='fw-contact-line'>✉️ {contact.email}</p>
              )}
            </div>
          </section>
        </footer>
      </article>
    </main>
  )
}

function SocialIcon({ href, icon, kind }) {
  if (!href) return null
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={clsx('fw-social', `fw-social--${kind}`)}
    >
      {icon}
    </a>
  )
}

function SupportLogo({ logo }) {
  if (!logo?.url) return null

  const Wrapper = logo.href ? 'a' : 'div'
  const extraProps = logo.href
    ? { href: logo.href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper className='fw-support-logo-wrap' {...extraProps}>
      <img
        src={logo.url}
        alt={logo.alt ?? 'Logo apoyo'}
        className='fw-support-logo'
      />
    </Wrapper>
  )
}
