import { Metadata } from 'next';
import AboutPageContent from '@/components/pages/AboutPageContent';

export const metadata: Metadata = {
    title: "About Yogesh Designer | Experience & Skills",
    description: "Learn more about Yogesh Designer, a creative UI/UX & Graphic Designer passionate about crafting user-centric digital experiences.",
};

export default function AboutPage() {
    return <AboutPageContent />;
}
