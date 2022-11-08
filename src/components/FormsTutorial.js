import React from "react";

function FormsTutorial() {
  //test
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isRegistered: false,
    employmentStatus: "",
    favSeason: "",
  });

  //

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    // just grab the state and pass it as value to where ever you want to send it.
    // For example: submitBackend(formData)

    // Stop the page from refereshing and purging all form data with default values
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Input type: text, email, password etc */}
      <label htmlFor="firstNameInput"> Enter First Name: </label>
      <input
        className="textInput"
        id="firstNameInput"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName} // for controlled inputs
      />

      <label htmlFor="lastNameInput"> Enter Last Name: </label>
      <input
        className="textInput"
        id="lastNameInput"
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />

      <label htmlFor="emailInput"> Enter Your Email: </label>
      <input
        className="textInput"
        id="emailInput"
        type="email"
        placeholder="abc@email.com"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      {/* Text area */}
      <textarea
        value={formData.comments}
        placeholder="Enter your comments"
        onChange={handleChange}
        name="comments"
      />

      {/* Checkboxes don't have value. They have "checked" T/F attribute */}
      <input
        id="isRegistered"
        type="checkbox"
        checked={formData.isRegistered}
        onChange={handleChange}
        name="isRegistered"
      />
      <label htmlFor="isRegistered">Do you have another account?</label>
      <br />

      {/* radio buttons */}
      <fieldset>
        <legend>Are you employed?</legend>

        {/* When you give same name attribute, users can only select one radio btn at a time */}
        {/* The value attribute will be save in state depending upon radion btn selected */}
        <input
          type="radio"
          id="unemployed"
          name="employmentStatus"
          value="unemployed"
          onChange={handleChange}
        />
        <label htmlFor="unemployed"> Unemployed </label>
        <br />
        <input
          type="radio"
          id="part-time"
          name="employmentStatus"
          value="part-time"
          onChange={handleChange}
        />
        <label htmlFor="part-time"> Part-time </label>
        <br />
        <input
          type="radio"
          id="full-time"
          name="employmentStatus"
          value="full-time"
          onChange={handleChange}
        />
        <label htmlFor="full-time"> Full-time </label>
      </fieldset>
      <br />
      {/* select boxes and options */}
      <label htmlFor="favSeason"> What is your favorite season </label>
      <br />
      <select
        id="favSeason"
        value={formData.favSeason}
        onChange={handleChange}
        name="favSeason"
      >
        <option value="">Choose your favorite season</option>
        <option value="summer">Summer</option>
        <option value="fall">Fall</option>
        <option value="winter">Winter</option>
        <option value="spring">Spring</option>
      </select>
      {/* Form submission */}
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

export default FormsTutorial;
