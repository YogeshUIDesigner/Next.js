import { Metadata } from 'next';
import HowItWorksPageContent from '@/components/pages/HowItWorksPageContent';

export const metadata: Metadata = {
    title: "Our Process | How Yogesh Designer Works",
    description: "Discover our simple 4-step design process from initial consultation to final delivery. Collaborative and results-driven UI/UX design.",
    alternates: {
        canonical: '/how-it-works',
    },
};

export default function HowItWorksPage() {
    return <HowItWorksPageContent />;
}
