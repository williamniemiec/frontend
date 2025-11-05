import { fetchCategories } from '@/services/posts';
import { GetServerSideProps } from 'next';
import { Category } from '@/types/Category';

interface HomePageProps {
  categories: Category[];
}

const HomeScreen = ({ categories }: HomePageProps) => {
  // This component should rarely render since we redirect on server side
  // But if it does, show a loading state
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-600">Loading...</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  try {
    const categories = await fetchCategories();

    // If no categories, return empty array
    if (categories.length === 0) {
      return {
        props: {
          categories: [],
        }
      };
    }

    // Redirect to first category on server side
    return {
      redirect: {
        destination: `/category/${categories[0].id}`,
        permanent: false,
      },
    };
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {
      props: {
        categories: [],
      }
    };
  }
};

export default HomeScreen;

