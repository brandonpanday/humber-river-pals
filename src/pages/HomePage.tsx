import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { VolunteerSection } from '../components/VolunteerSection';
import { ImpactStats } from '../components/ImpactStats';
import { LandAcknowledgement } from '../components/LandAcknowledgement';
export function HomePage() {
  return (
    <>
      <HeroSection />
      <VolunteerSection />
      <ImpactStats />
      <LandAcknowledgement />
    </>);

}