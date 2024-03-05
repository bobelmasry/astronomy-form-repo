import Link from 'next/link';
import { useState } from 'react';

export default function Home() {

  async function update () {
    console.log(`${firstName} - ${lastName} - ${email} - ${phoneNumber}`);
  }

  const [fullName, setFullName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [grade, setGrade] = useState('')
  const [schoolType, setSchoolType] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [city, setCity] = useState('')
  const [id, setId] = useState('')

  return (
    <form>
  <div className="grid gap-6 mb-6 mt-10 p-8 md:w-2/4">
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Full name
      </label>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John Doe"
        required=""
        onChange={(event) => setFullName(event.target.value)}
        value={fullName}
      />
    </div>
    <div>
      <label
        htmlFor="last_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Age
      </label>
      <input
        type="tel"
        id="phone"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="16"
        required=""
        onChange={(event) => setAge(event.target.value)}
        value={age}
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
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Email
      </label>
      <input
        type="text"
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
        Grade
      </label>
      <input
        type="tel"
        id="phone"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="8"
        required=""
        onChange={(event) => setGrade(event.target.value)}
        value={grade}
      />
    </div>
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        School type (national – international – stem) 
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="international"
        required=""
        onChange={(event) => setSchoolType(event.target.value)}
        value={schoolType}
      />
    </div>
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        School Name
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="orabi thanaweya"
        required=""
        onChange={(event) => setSchoolName(event.target.value)}
        value={schoolName}
      />
    </div>
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        City
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Cairo"
        required=""
        onChange={(event) => setCity(event.target.value)}
        value={city}
      />
    </div>
    <div>
      <label
        htmlfor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Briefly explain what interests you about astronomy.{" "}
      </label>
      <input
        type="text"
        id="large-input"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <div>
      <label
        htmlfor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Have you participated in any astronomy-related activities before (clubs, workshops, etc.)? If so, please describe them. If not, please describe your involvement in any extracurricular activities.{" "}
      </label>
      <input
        type="text"
        id="large-input"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <div>
      <label
        htmlfor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Describe a time you collaborated on a project. What made you a successful teammate?{" "}
      </label>
      <input
        type="text"
        id="large-input"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <div>
      <label
        htmlfor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Please confirm your availability to participate in the Egyptian Space Camp program from March 15-17, 2024. (Yes/No){" "}
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Yes"
        required=""
        onChange={(event) => setCity(event.target.value)}
        value={city}
      />
    </div>
    <div>
      <label
        htmlfor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Type confirm after uploading a photo of your ID here : {" "}
      </label>
      <Link className="block mb-2 text-sm font-medium dark:text-cyan-400" href='www.github.com'>www.github.com</Link>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Confirmed !"
        required=""
        onChange={(event) => setCity(event.target.value)}
        value={city}
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
