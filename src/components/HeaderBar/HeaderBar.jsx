import { Container } from "components/SharedLayout/SharedLayout.styled";
import { Header, Navigation, StyledLink } from "./HeaderBar.styled";

const HeaderBar = () => {
    return (
      <Header>
        <Container>
          <Navigation>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/catalog">Catalog</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </Navigation>
        </Container>
      </Header>
    );
  };
  
  export default HeaderBar;