import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
    const liveProjects = [
        {
            title: 'Bikanervala',
            category: 'Web Design',
            image: '/Images/live-project/bikanervala.webp',
            color: '#8B4513',
            url: 'https://bikanervala.ae/',
            type: 'live'
        },
        {
            title: 'Zocoo Australia',
            category: 'Web Design',
            image: '/Images/live-project/zocooaustralia.webp',
            color: '#0EA5E9',
            url: '#',
            type: 'live'
        },
        {
            title: 'Veterans For Veterans',
            category: 'Web Design',
            image: '/Images/live-project/veterans-for-veterans.webp',
            color: '#059669',
            url: '#',
            type: 'live'
        },
        {
            title: 'FinTech Dashboard',
            category: 'UI/UX Design',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            color: '#6366F1',
            url: '#',
            type: 'live'
        },
        {
            title: 'Crypto Exchange',
            category: 'Web Application',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
            color: '#F59E0B',
            url: '#',
            type: 'live'
        },
        {
            title: 'E-Commerce Platform',
            category: 'Full Stack',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            color: '#EC4899',
            url: '#',
            type: 'live'
        }
    ];

    const galleryProjects = [
        {
            title: '3ddD Abstract Motion',
            category: '3D Motion',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
            url: '#',
            type: 'gallery'
        },
        {
            title: '2D Character Animation',
            category: '2D Motion',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
            url: '#',
            type: 'gallery'
        },
        {
            title: 'Modern E-commerce',
            category: 'Web Design',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            url: '#',
            type: 'gallery'
        },
        {
            title: 'Animated Logo GIF',
            category: 'GIF',
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
            url: '#',
            type: 'gallery'
        },
        {
            title: '3D Product Reveal',
            category: '3D Motion',
            image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80',
            url: '#',
            type: 'gallery'
        },
        {
            title: 'SaaS Landing Page',
            category: 'Web Design',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            url: '#',
            type: 'gallery'
        }
    ];

    console.log('Start seeding...');

    for (const p of liveProjects) {
        await prisma.project.create({
            data: p as any,
        });
    }

    for (const p of galleryProjects) {
        await prisma.project.create({
            data: p as any,
        });
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
