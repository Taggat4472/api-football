import MainLayout from "../layouts/MainLayout";


function HomePage() {
  const listCard = [ ]
   
  return (
    <MainLayout>
      <ListCard list={ listCard } />
    </MainLayout>
  );
}

export default HomePage;
