

import { Metadata } from 'next';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.publishedAt,
            authors: [post.author.name],
        },
    };
}

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
    const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

    return <ArticleClient post={post} relatedPosts={relatedPosts} />;
}
