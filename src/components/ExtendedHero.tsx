import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import { heroTypes } from '../utils/constants';

export default function ExtendedHero() {

  const factionColors: Record<string, string> = {
    'United Empire': '#c23336',
    'Sophons': '#35c0e4',
    'Umbral Choir': '#1d72d2',
    'Riftborn': '#fa882c',
    'Cravers': '#604535',
    'Lumeris': '#fdc000',
    'Unfallen': '#2b6710',
    'Vaulters': '#613785',
  };

  const [hero, setHero] = useState<{
    name: string,
    heroImage: string,
    faction: string,
    influence: number,
    types: number[],
    description: string,
  }>();

  console.log(hero);

  const { id } = useParams();

  useEffect(() => {
    async function fetchHero() {
      try {
        const response = await axios.get(`https://645d3679e01ac610589fc7ea.mockapi.io/heroes/${id}`);
        setHero(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchHero();
  }, []);

  if (!hero) {
    return <LoadingSpinner txt="Loading hero..." />
  }

  return (
    <section className="hero-full">
      <h1 className="hero-full__title" style={{ color: factionColors[hero.faction] }}>
        {hero.name}
      </h1>
      <div className="hero-full__content">
        <div className="hero-full__column">
          <img src={hero.heroImage} alt="Hero" className="hero-full__img" />
          <ul className="hero-full__stats">
            <li className="hero-full__stats-item">
              <p className="hero-full__txt">
                Faction
              </p>
              <span className="hero-full__line"></span>
              <p className="hero-full__txt" style={{ color: factionColors[hero.faction] }}>
                {hero.faction}
              </p>
            </li>
            <li className="hero-full__stats-item">
              <p className="hero-full__txt">
                Class
              </p>
              <span className="hero-full__line"></span>
              <p className="hero-full__txt hero-full__txt_class">
                {hero.types.map((number) => heroTypes[number]).join(' or ')}
              </p>
            </li>
            <li className="hero-full__stats-item">
              <p className="hero-full__txt">
                Influence
              </p>
              <span className="hero-full__line"></span>
              <p className="hero-full__txt hero-full__txt_influence">
                {hero.influence}/12
              </p>
            </li>
            <li className="hero-full__stats-item">
              <p className="hero-full__txt">
                Politics
              </p>
              <span className="hero-full__line"></span>
              <p className="hero-full__txt">
                123
              </p>
            </li>
          </ul>
        </div>
        <div className="hero-full__story">
          <h2 className="hero-full__subtitle">Story</h2>
          <p className="hero-full__descr">
            {hero.description}
          </p>
          <NavLink to="/" className="hero-full__back">
            Go back
          </NavLink>
        </div>
      </div>
    </section>
  )
}
