import React from "react";
import { useNavigate } from "react-router-dom";

const navigationItems = [
  {
    link: '/personal',
    name: 'Personal Info'
  },
  {
    link: '/contacts',
    name: 'Contacts'
  }
];

const Navigation = () => {
  const navigate = useNavigate();

  const NavigationButtons = () => navigationItems
    .map(navigationItem => {
      return (
        <button
          key={navigationItem.link}
          className={window.location.pathname === navigationItem.link ? 'active' : ''}
          onClick={() => navigate(navigationItem.link)}>
          {navigationItem.name}
        </button>
      );
    });

  return (
    <section className="container navigation">
      <NavigationButtons />
    </section>
  );
};

export default Navigation;
