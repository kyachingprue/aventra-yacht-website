import { Helmet } from 'react-helmet-async'

export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | Antixor Yacht` : 'Antixor Yacht — Luxury Yacht Charters'
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Premium yacht charters for unforgettable journeys across the world\'s most beautiful destinations.'} />
    </Helmet>
  )
}
