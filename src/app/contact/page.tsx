import { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPageContent';

export const metadata: Metadata = {
    title: "Contact Yogesh Designer | Hire for UI/UX & Graphics",
    description: "Get in touch with Yogesh Designer for your next creative project. Available for freelance work and collaborations.",
};

export default function ContactPage() {
    return <ContactPageContent />;
}
