
import { Metadata } from 'next';
import ServicesPageContent from '@/components/pages/ServicesPageContent';

export const metadata: Metadata = {
    title: "UI/UX & Web Design Services in India | Yogesh Designer",
    description: "Expert UI/UX design, website development, and branding services for startups and businesses. Freelance web designer based in India.",
};

export default function ServicesPage() {
    return <ServicesPageContent />;
}
