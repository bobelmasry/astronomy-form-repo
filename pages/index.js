import Link from 'next/link';
import { useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import Image from 'next/image';
import Head from 'next/head';

export const supabase = createClient(
  'https://ytcrlhunvsrhhiagfqoa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Y3JsaHVudnNyaGhpYWdmcW9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MzA3OTAsImV4cCI6MjAyNTIwNjc5MH0.ke5FhCRVwyxb_nflqN_bexctY5kDhLhWq51bMsy5vOo'
)
export default function Home() {

    async function insertFormRecord() {
    
      // Check if all required fields are filled (adjust as needed)
      if (!fullName || !email || !phoneNumber) {
        alert('Please fill in all fields');
        return; // Prevent further execution if required fields are missing
      }
    
        const { data, error } = await supabase
          .from('form')
          .insert({
            fullName: fullName,
            email : email,
            phoneNumber: phoneNumber,
            age : age,
            grade : grade,
            schoolType: schoolType,
            schoolName: schoolName,
            city : city,
            interests : interests,
            participation : participation,
            collaboration : collaboration,
            confirm : confirm,
            idField : idField
          });
    
        if (error) {
          console.error('Error inserting form record:', error);
          return; // Handle error appropriately (e.g., display error message to user)
        }
    
        console.log('Form record inserted successfully:'); // Log the inserted data for debugging or confirmation
        setSubmitted(true)
      }
    

  const [fullName, setFullName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [grade, setGrade] = useState('')
  const [schoolType, setSchoolType] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [city, setCity] = useState('')
  const [interests, setInterests] = useState('')
  const [participation, setParticipation] = useState('')
  const [collaboration, setCollaboration] = useState('')
  const [confirm, setConfirm] = useState('')
  const [idField, setIdField] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (!submitted){
  return (
    <>
    <Head>
    <title>Egyptian Space Camp Form</title>
    </Head>
    <form>
  <div className="grid gap-6 mb-6 mt-10 p-8 md:w-2/4">
    <p>Egyptian Space Camp is a three-day-long educational program introducing high school students to Astronomy and space sciences through immersive sessions, interactive activities, and project-based learning. This experience not only ignites curiosity for space sciences but also highlights its importance for the community through its applications in SDGs and integration in interdisciplinary sciences. All participants will receive a certification in the closing ceremony of the program.
    For the first edition of the Egyptian Space Camp, we will only select 50 students who will receive full funding*, so the application will be highly competitive. 
    Try to show your best in the application form!
    Location: AUC New Cairo
    Timing: 14 March to 16 March
    * The program does not include an overnight stay for the participants, so you will be required to come to campus daily.
    </p>
    <Image src={"/1212.png"} width={500} height={500} alt='space camp image' />
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
        required
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
        required
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
        required
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
        required
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
        required
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
        required
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
        required
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
        required
        onChange={(event) => setCity(event.target.value)}
        value={city}
      />
    </div>
    <div>
      <label
        htmlFor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Briefly explain what interests you about astronomy.{" "}
      </label>
      <textarea
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here...."
        onChange={(event) => setInterests(event.target.value)}
        value={interests}
        required
      />
    </div>
    <div>
      <label
        htmlFor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Have you participated in any astronomy-related activities before (clubs, workshops, etc.)? If so, please describe them. If not, please describe your involvement in any extracurricular activities.{" "}
      </label>
      <textarea
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here....."
        onChange={(event) => setParticipation(event.target.value)}
        value={participation}
        required
      />
    </div>
    <div>
      <label
        htmlFor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Describe a time you collaborated on a project. What made you a successful teammate?{" "}
      </label>
      <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here......"
          onChange={(event) => setCollaboration(event.target.value)}
          value={collaboration}  
          required
        />
    </div>
    <div>
      <label
        htmlFor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Please confirm your availability to participate in the Egyptian Space Camp program from March 15-17, 2024. (Yes/No){" "}
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Yes"
        required
        onChange={(event) => setConfirm(event.target.value)}
        value={confirm}
      />
    </div>
    <div>
      <label
        htmlFor="large-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Type confirm after uploading a photo of your ID here : {" "}
      </label>
      <a className="block mb-2 text-sm font-medium dark:text-cyan-400" href='https://aucegypt0-my.sharepoint.com/:f:/g/personal/basmalakamal_aucegypt_edu/EvIPA1MN-UFMoskC5isCjvwBJ3_4XvGW3dI6km6EZvwq6w' target="_blank">Drive Folder</a>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Confirmed !"
        required
        onChange={(event) => setIdField(event.target.value)}
        value={idField}
      />
    </div>
    <button
    onClick={(event) => {
      event.preventDefault();
      insertFormRecord();
    }}
    className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
  </div>
</form>
</>
  );
}
else {
  return (
    <>
    <Head>
    <title>Egyptian Space Camp Form</title>
    </Head>
    <div className='flex flex-col justify-center items-center h-screen'> {/* Sets full screen height */}
      <h1 className='text-3xl text-white font-bold'>Submitted successfully !</h1>
    </div>
    </>
  );
}
}