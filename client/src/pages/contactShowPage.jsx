import { Link, useNavigate, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import EditModal from "../components/EditModal";

const ContactShowPage = () => {
  const [contact, setContact] = useState([]);
  const [editContact, setEditContact] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const url = `http://localhost:3005/api/contacts/${id}`;

  const deleteContact = () => {
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        navigate("/allcontacts");
      })
      .catch((e) => console.log(e));
  };

  const updateContact = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editContact)
    })
      .then((response) => {
        return response.json()
        })
      .catch((e) => console.log(e));
  };

  const getSingleContact = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.contact) {
      setContact(responseJson.contact)
      setEditContact(responseJson.contact)
    }
  };

  useEffect(() => {
    getSingleContact(); //searchValue
  }, []);

  return (
    <Fragment>
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
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="rounded-xl text-xl font-bold mx-5 bg-purple-600 py-2 px-5 text-black hover:bg-purple-700"
            >
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
      <EditModal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="text-center w-full">
          <h1 className="text-2xl font-bold">Edit Contact</h1>
          <form action="">
            <div className="grid grid-cols-2 gap-1 p-5">
              <p className="font-bold text-xl pt-2">First Name: </p>{" "}
              <input
                className="mt-2 lg:w-[60%] w-[100%] bg-slate-100 rounded-lg pl-3 font-semibold"
                type="text"
                value={editContact.firstName}
                onChange={(e) => {
                  setEditContact({...editContact, firstName: e.target.value})
                }}
              />
              <p className="font-bold text-xl pt-2">Last Name: </p>{" "}
              <input
                className="mt-2 lg:w-[60%] w-[100%] bg-slate-100 rounded-lg pl-3 font-semibold"
                type="text"
                value={editContact.lastName}
                onChange={(e) => {
                  setEditContact({...editContact, lastName: e.target.value})
                }}
              />
              <p className="font-bold text-xl pt-2">Phone Number: </p>{" "}
              <input
                className="mt-2 lg:w-[60%] w-[100%] bg-slate-100 rounded-lg pl-3 font-semibold"
                type="text"
                value={editContact.phoneNumber}
                onChange={(e) => {
                  setEditContact({...editContact, phoneNumber: e.target.value})
                }}
              />
              <p className="font-bold text-xl pt-2">Email: </p>{" "}
              <input
                className="mt-2 lg:w-[60%] w-[100%] bg-slate-100 rounded-lg pl-3 font-semibold"
                type="text"
                value={editContact.email}
                onChange={(e) => {
                  setEditContact({...editContact, email: e.target.value})
                }}
              />
              <p className="font-bold text-xl pt-2">Street: </p>{" "}
              <input
                className="mt-2 lg:w-[60%] w-[100%] bg-slate-100 rounded-lg pl-3 font-semibold"
                type="text"
                value={editContact.street}
                onChange={(e) => {
                  setEditContact({...editContact, street: e.target.value})
                }}
              />
              <p className="font-bold text-xl pt-2">City: </p>{" "}
              <input
                className="mt-2 lg:w-[60%] w-[100%] bg-slate-100 rounded-lg pl-3 font-semibold"
                type="text"
                value={editContact.city}
                onChange={(e) => {
                  setEditContact({...editContact, city: e.target.value})
                }}
              />
              <p className="font-bold text-xl pt-2">State: </p>{" "}
              <input
                className="mt-2 lg:w-[60%] w-[100%] bg-slate-100 rounded-lg pl-3 font-semibold"
                type="text"
                value={editContact.state}
                onChange={(e) => {
                  setEditContact({...editContact, state: e.target.value})
                }}
              />
              <p className="font-bold text-xl pt-2">Zip Code: </p>{" "}
              <input
                className="mt-2 lg:w-[60%] w-[100%] bg-slate-100 rounded-lg pl-3 font-semibold"
                type="text"
                value={editContact.zipCode}
                onChange={(e) => {
                  setEditContact({...editContact, zipCode: e.target.value})
                }}
              />
              <p className="font-bold text-xl pt-2">Occupation: </p>{" "}
              <input
                className="mt-2 lg:w-[60%] w-[100%] bg-slate-100 rounded-lg pl-3 font-semibold"
                type="text"
                value={editContact.occupation}
                onChange={(e) => {
                  setEditContact({...editContact, occupation: e.target.value})
                }}
              />
            </div>
            <button onClick={() => {
              updateContact()
              setTimeout(() => {
                setShowModal(false)
              }, 1000);
            }} className="rounded-xl text-xl font-bold mx-5 bg-purple-600 py-2 px-5 text-black hover:bg-purple-700">
              Submit
            </button>
          </form>
        </div>
      </EditModal>
    </Fragment>
  );
};

export default ContactShowPage;
