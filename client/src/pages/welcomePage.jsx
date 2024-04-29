import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="font-bold text-center p-5 w-full h-full">
      <div className="text-4xl pt-3 pb-10">
        Welcome to your address book!
      </div>
      <div className="w-full pb-5">
      <p className="text-lg">With this application you can add contacts that save to a database.</p>
      <p className="text-lg">Think of it as your personal digital rolodex</p>
      </div>
      <button className="rounded-2xl text-3xl bg-blue-500 px-2 py-2 text-gray-100 hover:bg-blue-600">
        <Link to="/addcontact">
        Add New Contact
        </Link>
      </button>
    </div>
  );
};

export default WelcomePage;
