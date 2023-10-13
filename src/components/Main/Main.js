import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import { useCurrentUser } from '../Hooks/useCurrentUser';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main() {
  const { isLoggedIn } = useCurrentUser();

  return (
    <>
      <Header loggedIn={isLoggedIn} color='blue' />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
