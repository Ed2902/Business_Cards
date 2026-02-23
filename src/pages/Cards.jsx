import React from 'react'
import { useParams } from 'react-router-dom'
import { getCards, getCardBySlug } from '../services/cards.service'
import BusinessCard from '../components/BusinessCard/BusinessCard'
import FastwayCard from '../components/BusinessCard/FastwayCard'
import GroupFastwayCard from '../components/BusinessCard/Group-FastwayCard'
import CardList from '../components/CardList'

export default function CardsPage() {
  const { slug } = useParams()

  if (slug) {
    const card = getCardBySlug(slug)
    if (!card) return null

    const theme = card?.brand?.theme
    const isFastway = theme === 'fastway' || card?.slug === 'fastway'
    const isGroup = theme === 'group'

    if (isFastway) {
      return <FastwayCard card={card} />
    }

    if (isGroup) {
      return <GroupFastwayCard card={card} />
    }

    // Greenway u otros temas
    return <BusinessCard card={card} />
  }

  const cards = getCards()
  return (
    <main className='min-h-dvh py-8'>
      <div className='mx-auto max-w-[420px] px-4'>
        <CardList cards={cards} />
      </div>
    </main>
  )
}
