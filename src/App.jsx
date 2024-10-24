import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

const products = [
  {
    id: 1,
    name: "Pufi RAIN",
    description: "Descripción del producto. Este es un texto simulado",
    image: "/assets/img_pufi_rain.png",
    thumb: "/assets/thumb_pufi_rain.png",
    row_reverse: false,
  },
  {
    id: 2,
    name: "Pufi PUFF",
    description: "Descripción del producto. Este es un texto simulado",
    image: "/assets/img_pufi_puff.png",
    thumb: "/assets/thumb_pufi_puff.png",
    row_reverse: true,
  },
  {
    id: 3,
    name: "Pufi CART",
    description: "Descripción del producto. Este es un texto simulado",
    image: "/assets/img_pufi_cart.png",
    thumb: "/assets/thumb_pufi_cart.png",
    row_reverse: false,
  },
  {
    id: 4,
    name: "Pufi NAP",
    description: "Descripción del producto. Este es un texto simulado",
    image: "/assets/img_pufi_nap.png",
    thumb: "/assets/thumb_pufi_nap.png",
    row_reverse: true,
  },
];

const pufiImages = [
  "/assets/img_grid_1.png",
  "/assets/img_grid_2.png",
  "/assets/img_grid_3.png",
  "/assets/img_grid_4.png",
  "/assets/img_grid_5.png",
  "/assets/img_grid_6.png",
];
function App() {
  const shuffledPufiImages = [...pufiImages].sort(() => Math.random() - 0.5);
  return (
    <>
      <Header />
      <Hero />
      <Products data={products} />
      <Gallery images={shuffledPufiImages} />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
