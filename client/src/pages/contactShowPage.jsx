import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ContactShowPage = () => {
  const [contact, setContact] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  const url = `http://localhost:3005/api/contacts/${id}`;

  const deleteContact = () => {
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        navigate('/allcontacts')
      })
      .catch((e) => console.log(e));
  };

  const getSingleContact = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.contact) {
      setContact(responseJson.contact);
    }
  };

  useEffect(() => {
    getSingleContact(); //searchValue
  }, []);

  return (
    <div className="pt-10">
      <Link
        to="/allcontacts"
        className="rounded-2xl text-xl font-bold mx-5 bg-purple-600 px-2 py-2 text-black hover:bg-purple-700"
      >
        Back to Contacts
      </Link>
      <div className="w-full text-center">
        <div className="pt-10 px-5 lg:px-2">
          <div className="lg:mx-[30%] bg-purple-500 rounded-3xl py-5 mb-5">
            <h1 className="font-bold lg:text-5xl text-3xl py-3">
              {contact.firstName} {contact.lastName}
            </h1>
            <p className="font-bold text-2xl">{contact.phoneNumber}</p>
            <p className="font-bold text-2xl">{contact.email}</p>
            <p className="font-bold text-2xl">{contact.occupation}</p>
            <p className="font-bold text-xl">{contact.street}</p>
            <p className="font-bold text-xl">
              {contact.city} {contact.state} {contact.zipCode}
            </p>
          </div>
          <button className="rounded-xl text-xl font-bold mx-5 bg-purple-600 py-2 px-5 text-black hover:bg-purple-700">
            Edit
          </button>{" "}
          <button
            onClick={deleteContact}
            className="rounded-2xl text-xl font-bold mx-5 bg-red-600 px-5 py-2 text-black hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactShowPage;
