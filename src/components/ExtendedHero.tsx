import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

export default function ExtendedHero() {

  const [hero, setHero] = useState<{
    name: string, heroImage: string
  }>();

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
      <div className="hero-full__content">
        <h1 className="hero-full__title">
          {hero.name}
        </h1>
        <img src={hero.heroImage} alt="Hero" className="hero-full__img" />
      </div>
    </section>
  )
}
