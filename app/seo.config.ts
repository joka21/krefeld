// app/seo.config.ts
import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'Krefelder Laden – Dein Portal für regionale und nachhaltige Produkte',
  description:
    'Entdecke regionale Angebote und nachhaltige Produkte in Krefeld. Der Krefelder Laden informiert über lokale Geschäfte und bietet eine Plattform für umweltfreundliches Einkaufen.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.krefelderladen.de',
    siteName: 'Krefelder Laden – Regionale und nachhaltige Produkte',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Krefeld, regional, nachhaltig, lokale Geschäfte, Einkaufen, Produkte'
    },
    {
      name: 'geo.region',
      content: 'DE-NW'
    },
    {
      name: 'geo.placename',
      content: 'Krefeld'
    }
  ],
  robotsProps: {
    nosnippet: false,
    notranslate: false,
    noimageindex: false,
    noarchive: false,
    maxSnippet: -1,
    maxImagePreview: 'large' as const,
    maxVideoPreview: -1,
  },
};

export default config;