// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  const { name, phone, email, photo } = data;
  return (
    <div className="contact">
      <img src={photo} alt={name} className="contact-photo" />
      <div className="contact-info">
        <h1 className="contact-name">{name}</h1>
        <h2 className="contact-phone">{phone}</h2>
        <h2 className="contact-email">{email}</h2>
      </div>
    </div>
  );
};

export default Contact;
