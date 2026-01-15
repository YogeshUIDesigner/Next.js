import { Metadata } from 'next';
import PortfolioPageContent from '@/components/pages/PortfolioPageContent';

export const metadata: Metadata = {
    title: "Portfolio | Yogesh Designer - Recent Projects",
    description: "Explore the creative portfolio of Yogesh Designer. Featuring projects in UI/UX design, branding, web design, and motion graphics.",
};

export default function PortfolioPage() {
    return <PortfolioPageContent />;
}
