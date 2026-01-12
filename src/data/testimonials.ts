export interface Testimonial {
    id: string;
    name: string;
    role: string;
    avatar: string;
    content: string;
    profit: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Marcus Chen',
        role: 'Founder, TechStart',
        avatar: '/avatars/avatar1.jpg',
        content: 'Yogesh transformed our brand identity with stunning 3D animations and a fresh UI/UX. The results exceeded our expectations and our user engagement has skyrocketed.',
        profit: 'ROI: 300%',
        rating: 5,
    },
    {
        id: '2',
        name: 'Sarah Williams',
        role: 'Marketing Director',
        avatar: '/avatars/avatar2.jpg',
        content: 'The 2D explainer videos created for our campaign were top-notch. Clear communication, timely delivery, and a great eye for detail. Highly recommend for any motion graphics work.',
        profit: 'High Quality',
        rating: 5,
    },
    {
        id: '3',
        name: 'David Rodriguez',
        role: 'E-commerce Owner',
        avatar: '/avatars/avatar3.jpg',
        content: 'Exceptional web design skills. Our new landing page is not only beautiful but also converts much better. The glassmorphism effects add a very premium feel.',
        profit: 'Conversion: +45%',
        rating: 5,
    },
    {
        id: '4',
        name: 'Emma Thompson',
        role: 'Creative Lead',
        avatar: '/avatars/avatar4.jpg',
        content: "It's rare to find a designer who can handle both complex 3D modeling and clean print creatives. Yogesh is a versatile talent and a pleasure to work with.",
        profit: 'Versatile',
        rating: 5,
    },
    {
        id: '5',
        name: 'James Wilson',
        role: 'App Developer',
        avatar: '/avatars/avatar5.jpg',
        content: 'The design system created for our SaaS app has saved us countless hours of development. Intuitive, modern, and perfectly aligned with our vision.',
        profit: 'Modern Design',
        rating: 5,
    },
];
