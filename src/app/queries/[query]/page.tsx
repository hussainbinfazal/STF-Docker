import axios from "axios";
import React from "react";

const page: React.FC = () => {
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const createQuery = async (query: string, email: string): Promise<void> => {
    try {
      const response = await axios.post("/api/queries", {
        query,
        email,
      });
      const data = response.data;
      console.log("Query created successfully:", data);
    } catch (error) {
      console.error("Error creating query:", error);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p>Please write your queries here</p>
        <input
          type="text"
          placeholder="Enter your query"
          className="border border-gray-300 rounded-md p-2 mb-4"
        />
        <p>Please add your email here</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-md p-2 mb-4"
        />
        <p>Our team will get back to you shortly</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;
