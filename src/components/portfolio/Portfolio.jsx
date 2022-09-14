import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Blogging Website Image.jpeg'
import IMG2 from '../../assets/Phonebook.png'
import IMG3 from '../../assets/Speak up.png'
import IMG4 from '../../assets/Artist.jpeg'
import IMG5 from '../../assets/tictactoe.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title:'Blogging Application',
    github: 'https://github.com/AmanShah05/React-Blog-App',
    demo: 'https://amanshah.tech'
  },
  {
    id: 2,
    image: IMG2,
    title:'Phonebook',
    github: 'https://github.com/AmanShah05/Phonebook',
    demo: 'https://amanshah.tech'
  },
  {
    id: 3,
    image: IMG3,
    title:'Speak Up!',
    github: 'https://github.com/AmanShah05/SpeakUp',
    demo: 'https://amanshah.tech'
  },
  {
    id: 4,
    image: IMG4,
    title:'Artist',
    github: 'https://github.com/AmanShah05/Artist',
    demo: 'https://amanshah.tech'
  },
  {
    id: 5,
    image: IMG5,
    title:'Tic-Tac-Toe',
    github: 'https://github.com/AmanShah05/Tic-Tac-Toe',
    demo: 'https://amanshah.tech'
  },
  {
    id: 6,
    image: IMG1,
    title:'Object Detection',
    github: 'https://github.com',
    demo: 'https://amanshah.tech'
  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-images">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio