import { fetchCategories, fetchPostsByCategory } from '@/services/posts';
import { Post } from '@/types/Post';
import HomeScreenClient from '@/components/HomeScreenClient';
import { GetServerSideProps } from 'next';
import { Category } from '@/types/Category';

interface HomePageProps {
  categories: Category[];
  initialSelectedCategory: string | null;
  initialPosts: Post[];
}

const HomeScreen = ({ categories, initialSelectedCategory, initialPosts }: HomePageProps) => {
    return (
      <HomeScreenClient
        initialCategories={categories}
        initialSelectedCategory={initialSelectedCategory}
        initialPosts={initialPosts}
      />
    );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {

  try {
    const categories = await fetchCategories();
    let initialPosts: Post[] = [];
    let initialSelectedCategory: string | null = null;

    if (categories.length > 0) {
      initialSelectedCategory = categories[0].id;
      try {
        initialPosts = await fetchPostsByCategory(initialSelectedCategory);
      } catch (err) {
        console.error('Error fetching initial posts:', err);
      }
    }

    return {
      props: {
        categories,
        initialSelectedCategory,
        initialPosts,
      }
    };
  } catch (error) {
    console.error('Error fetching initial data:', error);
    throw error;
  }
};

export default HomeScreen;

