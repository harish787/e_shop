import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../AuthContext'; 

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavBrand = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ open }) => (open ? 'block' : 'none')};
  }
`;

const NavLinkItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 10px 0;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 10px 15px;

  &:hover {
    background-color: #555;
    border-radius: 4px;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 20px; /* Adjust the distance from the right edge */
    top: 20px;   /* Adjust the distance from the top edge */
  }
`;

const LogoutButton = styled.button`
  text-decoration: none;
  color: #fff;
  padding: 10px 15px;
  background-color: #333;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #555;
    border-radius: 4px;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); 
  };

  return (
    <NavbarContainer>
      <NavBrand>E-Shop</NavBrand>
      <BurgerMenu onClick={() => setOpen(!open)}>
        <div>&#9776;</div>
      </BurgerMenu>
      <NavLinks open={open}>
        <NavLinkItem>
          <NavLink to="/">Home</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/products">Products</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/mycart">My Cart</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/account">Account</NavLink>
        </NavLinkItem>
        {isLoggedIn ? (
          <NavLinkItem>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </NavLinkItem>
        ) : (
          <>
            <NavLinkItem>
              <NavLink to="/login">Login</NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink to="/signup">Signup</NavLink>
            </NavLinkItem>
          </>
        )}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
