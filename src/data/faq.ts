export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export const faqItems: FAQItem[] = [
    {
        id: '1',
        question: 'What services do you offer?',
        answer: 'I provide UI/UX design, web design, graphic design, 2D & 3D animation, motion graphics, and print creatives like flyers and brochures.',
    },
    {
        id: '2',
        question: 'What tools do you use for design and animation?',
        answer: 'I work with Figma, Photoshop, Illustrator, After Effects, Blender, and Canva depending on project needs.',
    },
    {
        id: '3',
        question: 'Do you design for both web and mobile?',
        answer: 'Yes, I design responsive interfaces optimized for desktop, tablet, and mobile devices.',
    },
    {
        id: '4',
        question: 'Can you handle animation and motion work?',
        answer: 'Absolutely. I create 2D animations, motion graphics, logo animations, and 3D visuals for products and branding.',
    },
    {
        id: '5',
        question: 'How does the design process work?',
        answer: 'The process includes understanding requirements, wireframing, visual design, revisions, and final delivery with proper assets.',
    },
    {
        id: '6',
        question: 'Do you provide print-ready designs?',
        answer: 'Yes, all flyers, brochures, and print materials are delivered in high-quality, print-ready formats.',
    },
    {
        id: '7',
        question: 'How can I contact you for a project?',
        answer: 'You can reach out through the contact form or email to discuss your project details and timelines.',
    },
    // {
    //     id: '8',
    //     question: 'Do you offer scaling?',
    //     answer: 'Yes! Our Elite and Master accounts include a scaling program. After consistent profitability, your account size can be increased up to $2M. Terms and conditions apply based on performance.',
    // },
];
