import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { contacts } from "../assets/mockData";

const AllContacts = () => {

  // const [searchValue, setSearchValue] = useState("");
  const [contact, setContact] = useState([])

  const getContacts = async () => {
    const url = `http://localhost:3005/api/contacts`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.contacts) {
      setContact(responseJson.contacts)
    }
  };

  useEffect(() => {
    getContacts();  //searchValue
  }, []);

  return (
    <div className="p-5">
      <div className="text-center pt-5 text-6xl font-logo font-bold">
        Your Contact List
      </div>
      {/* <div className="text-center pt-5">
      <input
        className="bg-white text-black md:w-2/5 sm:w-2/5 h-8 text-xl text-center outline-none rounded-lg placeholder-slate-400 font-bold"
        type="text"
        placeholder="Search Contact List"
        // onChange={(event) => {setSearchValue(event.target.value)}}
      />
    </div> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-center pt-16">
        {contact.map(
          ({ firstName, lastName, phoneNumber, city, state, _id }) => {
            return (
              <Link key={_id} to={`/contact/${_id}`}>
              <div
                className="shadow-md bg-purple-600 mx-10 my-3 shadow-black rounded-3xl py-5 hover:scale-110 duration-200"
              >
                <p className="text-2xl font-bold">
                  {firstName} {lastName}
                </p>
                <p className="text-xl">{phoneNumber}</p>
                <p className="text-xl">
                  {city}, {state}
                </p>
              </div>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default AllContacts;
