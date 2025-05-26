import { FC } from 'react';

interface StructuredDataProps {
  type?: 'website' | 'product' | 'organization';
}

const StructuredData: FC<StructuredDataProps> = ({ type = 'website' }) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'AURA - Sistema Inteligente de Agendamento para Clínicas',
    description: 'Automatize agendamentos, reduza faltas e encante seus pacientes com o AURA - sistema completo com IA integrada',
    url: 'https://mayssaferreira.github.io/aura-clinic-bliss/',
  };

  const structuredData = {
    ...baseData,
    ...(type === 'organization' && {
      logo: 'https://mayssaferreira.github.io/aura-clinic-bliss/favicon.png',
      sameAs: [
        'https://github.com/mayssaferreira/aura-clinic-bliss'
      ]
    }),
    ...(type === 'product' && {
      brand: 'AURA',
      category: 'Software/Sistema de Agendamento',
      offers: {
        '@type': 'Offer',
        price: '1700.00',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock'
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData; 