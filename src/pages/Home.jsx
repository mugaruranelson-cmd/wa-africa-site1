import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustStrip from '../components/home/TrustStrip';
import ProblemBlock from '../components/home/ProblemBlock';
import SolutionBlock from '../components/home/SolutionBlock';
import ProcessBlock from '../components/home/ProcessBlock';
import IndustriesGrid from '../components/home/IndustriesGrid';
import ImpactNumbers from '../components/home/ImpactNumbers';
import MiniAuthorityStrip from '../components/home/MiniAuthorityStrip';
import AuthoritySection from '../components/home/AuthoritySection';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
    // Simple scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-page" style={{ paddingTop: 0 }}>
            {/* We are overriding the default App.jsx padding behavior here if needed */}
            <HeroSection />
            <TrustStrip />
            <ProblemBlock />
            <SolutionBlock />
            <ProcessBlock />
            <IndustriesGrid />
            <MiniAuthorityStrip />
            <ImpactNumbers />
            <AuthoritySection />
            <FinalCTA />
        </div>
    );
}
