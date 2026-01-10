import { blogPosts } from '@/data/blog';
import ArticleClient from '@/components/academy/ArticleClient';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
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
