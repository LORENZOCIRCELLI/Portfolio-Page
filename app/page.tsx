'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificatesSection from './components/CertificatesSection'
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import FeaturedProjectSection from './components/FeaturedProjectSection';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<AboutSection />
			<FeaturedProjectSection/>
			<ProjectsSection />
			<SkillsSection />
			<CertificatesSection />
			<ContactSection />
		</div>
	);
}
