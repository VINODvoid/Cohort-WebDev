import React, { useState } from "react";

const AgeVerification2 = () => {
  const [birthDate, setBirthDate] = useState("");

  const handleContinue = () => {
    if (birthDate) {
      alert(`You entered: ${birthDate}`);
      // Implement your logic here (e.g., age check, navigation)
    }
  };

  return (
    <div className="bg-[#002B5B] text-white min-h-screen flex items-center justify-center">
      <div className="text-center w-full max-w-md px-4">
        <h1 className="text-3xl font-bold mb-6">Verify Your Age</h1>
        <p className="mb-4 text-gray-300">
          Please confirm your birth year. This data will not be stored.
        </p>

        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full px-4 py-3 rounded-md bg-[#123456] text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 transition mb-6"
        />

        <button
          onClick={handleContinue}
          className="bg-gray-400 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AgeVerification2;
