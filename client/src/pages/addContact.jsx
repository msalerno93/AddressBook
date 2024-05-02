import { addContactData } from "../assets/mockData";
import {useNavigate} from "react-router-dom"

const AddContact = () => {

const navigate = useNavigate()

const postNewContact = () => {
  navigate('/allcontacts')
}

  return (
    <div className="p-10 text-center">
      <div className="py-5 text-4xl font-bold">Add A New Contact!</div>
      <form action="" method="POST" className="pb-10">
        {addContactData.map(({ name, type, id }) => {
          return (
            <div key={id} className="grid grid-cols-2 lg:mx-[25%] md:mx-[25%] max-w-full">
              <p className="pt-2 font-bold text-black text-xl">{name}:</p>{" "}
              <input
                type={type}
                className="px-5 my-2 rounded-2xl bg-slate-400 text-black font-bold text-lg"
              />
            </div>
          );
        })}
        {/* <p className='pt-2 font-bold text-black'>First Name:</p> <input type="text" className='px-5 my-2 rounded-2xl bg-slate-400 text-black font-bold text-md' />
        <p className='pt-2 font-bold text-black'>First Name:</p> <input type="text" className='px-5 my-2 rounded-2xl bg-slate-400' />
        <p className='pt-2 font-bold text-black'>First Name:</p> <input type="text" className='px-5 my-2 rounded-2xl bg-slate-400' />
        <p className='pt-2 font-bold text-black'>First Name:</p> <input type="text" className='px-5 my-2 rounded-2xl bg-slate-400' />
        <p className='pt-2 font-bold text-black'>First Name:</p> <input type="text" className='px-5 my-2 rounded-2xl bg-slate-400' />
        <p className='pt-2 font-bold text-black'>First Name:</p> <input type="text" className='px-5 my-2 rounded-2xl bg-slate-400' /> */}
      </form>
      <button onClick={postNewContact} className="rounded-2xl text-xl font-bold mx-5 bg-purple-600 px-2 py-2 text-black hover:bg-purple-700">
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;
