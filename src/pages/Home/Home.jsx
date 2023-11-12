import {
  HomePage,
  HomeImage,
  HomeTitle,
  HomeSubtitle,
  HomeStyledLink,
  Accent,
} from './Home.styled';
import car from '../../images/car-background.png';

const Home = () => {
  return (
    <HomePage>
      <HomeTitle>
        Instantly book cars <Accent>near you</Accent>
      </HomeTitle>
      <HomeSubtitle>Anytime Carsharing in Ukraine</HomeSubtitle>
      <HomeImage src={car} />
      <HomeStyledLink to="/catalog">Go to catalog</HomeStyledLink>
    </HomePage>
  );
};

export default Home;
