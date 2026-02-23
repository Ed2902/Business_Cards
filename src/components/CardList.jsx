import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './card-list.css'

export default function CardList({ cards }) {
  return (
    <div className='card-list'>
      {cards.map((c, i) => {
        const theme = c?.brand?.theme

        return (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.28 }}
          >
            <Link to={`/cards/${c.slug}`} className='card-item'>
              <div
                className={
                  theme === 'fastway'
                    ? 'preview fastway'
                    : theme === 'group'
                    ? 'preview group'
                    : 'preview greenway'
                }
              >
                <div className='preview-header' />
                <div className='preview-body'>
                  <h3>{c.person.name}</h3>
                  <p>
                    {c.person.title} · {c.person.company}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
