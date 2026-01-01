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
        role: 'Funded Trader',
        avatar: '/avatars/avatar1.jpg',
        content: 'After trying multiple prop firms, I finally found one that actually pays. Got my first payout within 2 weeks of getting funded. The rules are fair and the support is incredible.',
        profit: '$12,450',
        rating: 5,
    },
    {
        id: '2',
        name: 'Sarah Williams',
        role: 'Full-time Trader',
        avatar: '/avatars/avatar2.jpg',
        content: 'The evaluation process was straightforward. No hidden rules or tricks. I passed on my first attempt and have been consistently profitable ever since. Best decision I made for my trading career.',
        profit: '$28,300',
        rating: 5,
    },
    {
        id: '3',
        name: 'David Rodriguez',
        role: 'Futures Trader',
        avatar: '/avatars/avatar3.jpg',
        content: 'What sets this firm apart is their transparency. Everything is clear from day one. The dashboard is intuitive and the payout process is seamless. Highly recommend!',
        profit: '$45,200',
        rating: 5,
    },
    {
        id: '4',
        name: 'Emma Thompson',
        role: 'Day Trader',
        avatar: '/avatars/avatar4.jpg',
        content: 'I was skeptical at first, but the community and support convinced me. Three months in, multiple payouts received. This is the real deal for serious traders.',
        profit: '$19,800',
        rating: 5,
    },
    {
        id: '5',
        name: 'James Wilson',
        role: 'Swing Trader',
        avatar: '/avatars/avatar5.jpg',
        content: 'The scaling program is fantastic. Started with a 50K account, now trading 200K. The profit splits are among the best in the industry.',
        profit: '$67,500',
        rating: 5,
    },
];
