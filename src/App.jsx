import AddTodo from "./components/AddTodo";
import InfoModal from "./components/InfoModal";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

const App = () => {
  return (
    <main className="container mx-auto px-6 sm:px-12 md:px-18 lg:px-24 xl:px-30">
      <Navbar />
      <section className="py-12 flex items-center justify-between gap-6">
        <InfoModal />
        <AddTodo />
      </section>
      <Todos />
    </main>
  );
};

export default App;