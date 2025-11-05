import { fetchCategories, fetchPostsByCategory } from '@/services/posts';
import { Post } from '@/types/Post';
import HomeScreenClient from './components/HomeScreenClient';
import { GetServerSideProps } from 'next';
import { Category } from '@/types/Category';

interface CategoryPageProps {
  categories: Category[];
  categoryId: string;
  initialPosts: Post[];
}

const CategoryPage = ({ categories, categoryId, initialPosts }: CategoryPageProps) => {
  return (
    <HomeScreenClient
      initialCategories={categories}
      initialSelectedCategory={categoryId}
      initialPosts={initialPosts}
    />
  );
};

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async ({ params }) => {
  try {
    const categoryId = params?.categoryId as string;
    
    if (!categoryId) {
      return {
        notFound: true,
      };
    }

    const categories = await fetchCategories();
    const categoryExists = categories.some(cat => cat.id === categoryId);
    
    if (!categoryExists) {
      return {
        notFound: true,
      };
    }

    let initialPosts: Post[] = [];
    try {
      initialPosts = await fetchPostsByCategory(categoryId);
    } catch (err) {
      console.error('Error fetching posts:', err);
    }

    return {
      props: {
        categories,
        categoryId,
        initialPosts,
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
};

export default CategoryPage;

