import { Header, Logo, Item, Link, Hamburger } from "./Header.styled";
import { Button } from "../Button.styled";
import logo from "../../assets/logo.svg";
import hamburger from '../../assets/hamburger.svg'

const NavBar: React.FC = () => {

  return (
    <>
      <Header>
        <Logo>
          <img src={logo} alt="logo bealy" />
          <h2>Bealy</h2>
        </Logo>
        <Item>
            <Link href="#" color='grey'>Personnel</Link>
            <Link href="#" font='bold'>Entreprise</Link>
        </Item>
        <Item>
            <Link href="#">Tarifs</Link>
            <Link href="#">Téléconsultaion</Link>
            <Link href="#">Nos solutions</Link>
        </Item>
        <Item>
          <Link href="#">Se connecter</Link>
          <Button bg="black">Ouvrir un compte</Button>
        </Item>
        <Hamburger>
          <img src={hamburger} alt="hamburger" />
        </Hamburger>

      </Header>
    </>
  );
};

export default NavBar;
