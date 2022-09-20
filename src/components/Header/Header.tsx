import { Header, NavItem, Hamburger } from "./Header.styled";
import { Button } from "../helpers/Button.styled";
import logo from "../../assets/logo.svg";
import hamburger from '../../assets/hamburger.svg'
import { H5, Link } from "../helpers/Utils.styled";
import { FlexItem } from "../helpers/Utils.styled";

const NavBar = () => {

  return (
    <>
      <Header>
        <FlexItem>
          <img src={logo} alt="logo bealy" />
          <H5>Bealy</H5>
        </FlexItem>
        <NavItem>
            <Link href="#" color='grey'>Personnel</Link>
            <Link href="#" font='bold'>Entreprise</Link>
        </NavItem>
        <NavItem>
            <Link href="#">Tarifs</Link>
            <Link href="#">Téléconsultaion</Link>
            <Link href="#">Nos solutions</Link>
        </NavItem>
        <NavItem>
          <Link href="#">Se connecter</Link>
          <Button bg="black" color="#fff">Ouvrir un compte</Button>
        </NavItem>
        <Hamburger>
          <img src={hamburger} alt="hamburger" />
        </Hamburger>
      </Header>
    </>
  );
};

export default NavBar;
