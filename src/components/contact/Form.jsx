import { useState } from "react";
export default function Form() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const submitInfo = async (e) => {
    e.preventDefault();
    const Options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Nimi: e.target.elements.Nimi.value,
        Email: e.target.elements.Email.value,
        Viesti: e.target.elements.Viesti.value,
      }),
    };
    const response = await fetch("https://submit-form.com/SJkNdvVmj", Options)
      .then(function (response) {
        setError(false);
        setSuccess(true);
      })
      .catch(function (response) {
        console.log(response);
        setError(true);
      });
  };
  return (
    <div className="relative min-w-[300px] justify-center sm:min-w-[380px]">
      {!success && (
        <p className="text-center text-xl font-[500] text-white">
          Leave your details below
        </p>
      )}
      {error && (
        <div className="mt-3 rounded-lg bg-red-700 px-3 py-1">
          <p className="text-sm font-[500] text-white">
            Could not send your contact request! Try again later.
          </p>
        </div>
      )}
      {success ? (
        <div className="relative mx-auto mt-10 flex w-full flex-col gap-4 text-center  text-white">
          <h2 className="text-3xl font-[600]">Thank you!</h2>
          <p className="text-xl font-[500]">I will contact you back ASAP</p>
        </div>
      ) : (
        <form onSubmit={(e) => submitInfo(e)} className="mt-10">
          <input type="hidden" name="_append" value="false" />
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="Nimi"
              id="name"
              className="peer block w-full appearance-none border-0 border-b-2 border-white bg-transparent px-0 py-2.5 text-base text-white focus:border-amber-700 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-amber-700"
            >
              Your name
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="email"
              name="Email"
              id="email"
              className="peer block w-full appearance-none border-0 border-b-2 border-white bg-transparent px-0 py-2.5 text-base text-white focus:border-amber-700 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-amber-700"
            >
              Email address
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <textarea
              type="text"
              rows="4"
              name="Viesti"
              id="floating_message"
              className="peer block w-full appearance-none border-0 border-b-2 border-white bg-transparent px-0 py-2.5 text-base text-white focus:border-amber-700 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_message"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-amber-700"
            >
              How can I help you?
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="hover:text-datablack font-transducer-extended cursor-pointer rounded-full border-2 border-white bg-transparent px-3 text-xl font-semibold text-white duration-300 hover:border-transparent hover:bg-amber-700 hover:text-black"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
