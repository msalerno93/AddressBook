import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [occupation, setOccupation] = useState("");

  const navigate = useNavigate();

  const postNewContact = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3005/api/contacts`;
    const contact = {
      firstName,
      lastName,
      phoneNumber,
      email,
      street,
      city,
      state,
      zipCode,
      occupation,
    };
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    })
    setTimeout(() => {
      navigate("/allcontacts");
    }, 2000);
  };

  return (
    <div className="p-10 text-center">
      <div className="py-5 text-4xl font-bold">Add A New Contact!</div>
      <form
        action=""
        method="POST"
        className="text-center"
        onSubmit={postNewContact}
      >
        <div className="grid grid-cols-2 lg:mx-[25%] md:mx-[25%] max-w-full">
        <p className="pt-2 font-bold text-black text-xl">First Name:</p>{" "}
        <input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
          maxLength="15"
          className="px-5 my-2 rounded-2xl placeholder-slate-300 bg-slate-400 text-black font-bold text-lg"
        />
        <p className="pt-2 font-bold text-black text-xl">Last Name:</p>{" "}
        <input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type="text"
          maxLength="15"
          className="px-5 my-2 rounded-2xl bg-slate-400 text-black font-bold text-lg"
        />
        <p className="pt-2 font-bold text-black text-xl">Phone Number:</p>{" "}
        <input
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          type="tel"
          placeholder="123-45-678 format"
          maxLength="12"
          minLength="12"
          className="px-5 my-2 rounded-2xl bg-slate-400 placeholder-slate-300 text-black font-bold text-lg"
        />
        <p className="pt-2 font-bold text-black text-xl">Email:</p>{" "}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          maxLength="25"
          className="px-5 my-2 rounded-2xl bg-slate-400 text-black font-bold text-lg"
        />
        <p className="pt-2 font-bold text-black text-xl">Street:</p>{" "}
        <input
          onChange={(e) => setStreet(e.target.value)}
          value={street}
          type="text"
          maxLength="15"
          className="px-5 my-2 rounded-2xl bg-slate-400 text-black font-bold text-lg"
        />
        <p className="pt-2 font-bold text-black text-xl">City:</p>{" "}
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          type="text"
          maxLength="15"
          className="px-5 my-2 rounded-2xl bg-slate-400 text-black font-bold text-lg"
        />
        <p className="pt-2 font-bold text-black text-xl">State:</p>{" "}
        <input
          onChange={(e) => setState(e.target.value)}
          value={state}
          type="text"
          maxLength="2"
          minLength="2"
          className="px-5 my-2 rounded-2xl bg-slate-400 text-black font-bold text-lg"
        />
        <p className="pt-2 font-bold text-black text-xl">Zip Code:</p>{" "}
        <input
          onChange={(e) => setZipCode(e.target.value)}
          value={zipCode}
          type="text"
          maxLength="5"
          minLength="5"
          className="px-5 my-2 rounded-2xl bg-slate-400 text-black font-bold text-lg"
        />
        <p className="pt-2 font-bold text-black text-xl">Occupation:</p>{" "}
        <input
          onChange={(e) => setOccupation(e.target.value)}
          value={occupation}
          type="text"
          maxLength="15"
          className="px-5 my-2 rounded-2xl bg-slate-400 text-black font-bold text-lg"
        />
        </div>
        <div className="w-full text-center">
        <button className="rounded-2xl text-xl font-bold mx-5 bg-purple-600 px-2 py-2 text-black hover:bg-purple-700">
          Add Contact
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
