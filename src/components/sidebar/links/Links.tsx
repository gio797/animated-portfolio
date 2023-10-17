import React from "react";
// import "./links.scss";

const items = ["Homepage", "Services", "Portfolio", "Contacts", "About"];
function links() {
  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}

export default links;
