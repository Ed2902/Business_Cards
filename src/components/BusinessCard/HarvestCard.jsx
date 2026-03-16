import React from 'react'
import './harvest-card.css'
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
  Leaf,
} from 'phosphor-react'

export default function HarvestCard({ card }) {
  if (!card) return null
  const { person, brand, contact, socials } = card
  const inspirationalPhrase =
    card?.inspiration ??
    'Creemos que cada material tiene una segunda oportunidad. Transformamos residuos industriales en recursos valiosos, conectando industria, sostenibilidad y propósito. Así convertimos lo que parecía el final de un proceso en el inicio de un nuevo ciclo para la economía y el planeta.'

  const wa = buildWhatsAppLink(
    contact?.whatsapp ?? contact?.phone,
    contact?.greeting
  )
  const mail = buildMailtoLink(contact?.email)
  const tel = buildTelLink(contact?.phone)

  return (
    <main className='min-h-dvh grid place-items-center py-6'>
      <article
        className='hv-card mx-auto w-full max-w-[420px]'
        data-aos='fade-up'
      >
        <header className='hv-header' data-aos='fade-down'>
          <div className='hv-header-grid'>
            <div className='hv-mark'>
              <span className='hv-mark-icon'>
                <Leaf size={18} weight='fill' />
              </span>
              <span className='hv-mark-text'>Harvest</span>
            </div>

            {brand?.logoUrl && (
              <div className='hv-logo-wrap' data-aos='zoom-in'>
                <img
                  src={brand.logoUrl}
                  alt='Harvest logo'
                  className='hv-logo-img'
                />
              </div>
            )}
          </div>

          <div className='hv-person'>
            {person?.avatarUrl && (
              <div
                className='hv-avatar-wrap'
                data-aos='zoom-in'
                data-aos-delay='80'
              >
                <img
                  src={person.avatarUrl}
                  alt={`Foto de ${person?.name ?? 'perfil'}`}
                  className='hv-avatar-img'
                />
                <span className='hv-avatar-wave-third' aria-hidden='true' />
              </div>
            )}
            <h1 className='hv-name'>{person?.name}</h1>
            <p className='hv-title'>{person?.title}</p>
            <p className='hv-company'>{person?.company}</p>
          </div>
        </header>

        <section className='hv-body' data-aos='fade-up' data-aos-delay='70'>
          <p className='hv-about'>"{inspirationalPhrase}"</p>

          <div className='hv-actions'>
            <ActionButton
              href={wa}
              label='WhatsApp'
              icon={<WhatsappLogo size={18} weight='fill' />}
              variant='wa'
            />
            <ActionButton
              href={mail}
              label='Correo'
              icon={<EnvelopeSimple size={18} weight='fill' />}
              variant='mail'
            />
            <ActionButton
              href={tel}
              label='Llamar'
              icon={<PhoneCall size={18} weight='fill' />}
              variant='phone'
            />
          </div>

          <div className='hv-contact-inline'>
            {contact?.phone && <span>{contact.phone}</span>}
            {contact?.email && <span>{contact.email}</span>}
          </div>
        </section>

        <footer className='hv-footer' data-aos='fade-up' data-aos-delay='120'>
          <div className='hv-footer-title'>Redes y sitio web</div>
          <div className='hv-socials'>
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

function ActionButton({ href, label, icon, variant }) {
  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel='noopener noreferrer'
      className={clsx('hv-btn', `hv-btn--${variant}`)}
      data-aos='zoom-in'
    >
      <span className='hv-btn-icon'>{icon}</span>
      <span>{label}</span>
    </a>
  )
}

function SocialIcon({ href, icon, kind }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={clsx('hv-social', `hv-social--${kind}`)}
      data-aos='zoom-in'
    >
      {icon}
    </a>
  )
}
