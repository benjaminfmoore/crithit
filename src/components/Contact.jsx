import React from "react";
import "../index.css";

function Contact() {
  return (
    <>
      <form
        class="contact-form"
        alt="contact form"
        onSubmit={this.handleSubmit}
      >
        <label class="name-label" alt="first name">
          First Name:
          <input
            type="text"
            placeholder="First Name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label class="name-label" alt="last name">
          Last Name:
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label class="name-label" alt="email address">
          Email Address
          <input
            type="text"
            placeholder="Email Address"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label class="contact-form-body" alt="contact form body">
          Message
          <textarea
            type="text"
            placeholder="Feel free to say hi!"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Contact;
