import MainLayout from "../layouts/MainLayout";
import ListCard from "../components/home/ListCard";

function HomePage() {
  const listCard = [ ]
   
  return (
    <MainLayout>
      <ListCard list={ listCard } />
    </MainLayout>
  );
}

export default HomePage;
