import Cards from '../Cards/cards.js'
import ControlledCarousel from './Carousel/carousel.js'
import Footer from './Footer/footer.js'
import Navbars from './Navbar/Navbar.js';
import Cardstyled from '../Cards/cardsStyled.js';
import NavBarstyled from './Navbar/Navbarstyled.js';
// import Products from '../Products/Products.js';
import Cardstyleds from '../Cards/cardsStyledMapped.js';


function Home() {
  return (
    <>
      <Navbars/>
      <NavBarstyled/>
      <ControlledCarousel />
      {/* <Products/> */}
      {/* <Cards /> */}
      {/* <Cardstyled /> */}
      <Cardstyleds />
      <Footer />
    </>
  );
}

export default Home;