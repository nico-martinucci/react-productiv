import React from 'react';
import Quote from "./Quote";
/** Site-wide header for Flüffy Data Enterprises, Inc. */

function Header() {
  return (
    <header className="container-fluid pt-4 pb-1">
      <div className="container">
        <h1>Prøductïv</h1>
        <p className="lead">The best name in todo list management.</p>
        <Quote />
      </div>
    </header>
  );
}

export default Header;