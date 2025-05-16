import React from 'react';
import { Zap, ShieldCheck, ThumbsUp, Star } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';
import './FeatureSection.css';

const FeatureCard = ({ iconType, title, description }) => {
  const icons = {
    delivery: React.createElement(Zap, { className: "feature-icon" }),
    payment: React.createElement(ShieldCheck, { className: "feature-icon" }),
    quality: React.createElement(ThumbsUp, { className: "feature-icon" }),
    return: React.createElement(Star, { className: "feature-icon" })
  };

  return React.createElement(
    'div',
    { className: "feature-card" },
    [
      React.createElement(
        'div',
        { className: `icon-container ${iconType}`, key: "icon" },
        icons[iconType]
      ),
      React.createElement('h3', { className: "feature-title", key: "title" }, title),
      React.createElement('p', { className: "feature-description", key: "desc" }, description)
    ]
  );
};

const FeatureSection = () => {
  const featureData = [
    {
      iconType: 'delivery',
      title: 'Livraison Rapide',
      description: 'Livraison express partout en France'
    },
    {
      iconType: 'payment',
      title: 'Paiement Sécurisé',
      description: 'Transactions 100% sécurisées'
    },
    {
      iconType: 'quality',
      title: 'Qualité Garantie',
      description: 'Produits de haute qualité'
    },
    {
      iconType: 'return',
      title: 'Retour Facile',
      description: '30 jours pour changer d\'avis'
    }
  ];

  return React.createElement(
    'section',
    { className: "features-section" },
    React.createElement(
      Container,
      null,
      React.createElement(
        Row,
        { className: "features-container" },
        featureData.map((feature, index) =>
          React.createElement(
            Col,
            {
              key: index,
              xs: 12,
              md: 6,
              lg: 3,
              className: "feature-col"
            },
            React.createElement(FeatureCard, feature)
          )
        )
      )
    )
  );
};

export default FeatureSection;