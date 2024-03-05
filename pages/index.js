import { useState } from 'react';

export default function Home() {

  async function update () {
    console.log(`${firstName} - ${lastName} - ${email} - ${phoneNumber}`);
  }

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  return (
    <form>
  <div className="grid gap-6 mb-6 mt-10 p-8 md:w-2/4">
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        First name
      </label>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        required=""
        onChange={(event) => setFirstName(event.target.value)}
        value={firstName}
      />
    </div>
    <div>
      <label
        htmlFor="last_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Last name
      </label>
      <input
        type="text"
        id="last_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Doe"
        required=""
        onChange={(event) => setLastName(event.target.value)}
        value={lastName}
      />
    </div>
    <div>
      <label
        htmlFor="company"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Email
      </label>
      <input
        type="text"
        id="company"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="joe@aucegypt.edu"
        required=""
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
    </div>
    <div>
      <label
        htmlFor="phone"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Phone number
      </label>
      <input
        type="tel"
        id="phone"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="01011011661"
        required=""
        onChange={(event) => setPhoneNumber(event.target.value)}
        value={phoneNumber}
      />
    </div>
    <button
    onClick={update}
    className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
  </div>
</form>

  );
}
