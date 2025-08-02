import { MoodInput } from "@/components/MoodInput";
import MoodOutput from "@/components/MoodOutput";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function Home() {
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generated, setGenerated] = useState(false);

  const getFormattedDate = () => {
    const today = new Date();
    return today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }); // "02 Aug 2025"
  };

  const handleGenerate = () => {
    const lowerMood = mood.toLowerCase();
    const today = getFormattedDate();

    if (lowerMood.includes("happy")) {
      setSubject(`Feeling Great Today! (${today})`);
      setFooter("Stay awesome 😊");
    } else if (lowerMood.includes("sad")) {
      setSubject(`A Bit Down Today (${today})`);
      setFooter("Sending virtual hugs 🤗");
    } else if (lowerMood.includes("angry")) {
      setSubject(`Need to Vent (${today})`);
      setFooter("Take a breath 🔥");
    } else if (lowerMood.includes("nervous")) {
      setSubject(`Feeling Anxious (${today})`);
      setFooter("You've got this 💪");
    } else if (lowerMood.includes("excited")) {
      setSubject(`Can't Contain the Excitement! (${today})`);
      setFooter("Let's gooo 🎉");
    } else {
      setSubject(`Just Another Day (${today})`);
      setFooter("Keep going 💫");
    }

    setGenerated(true);
  };

  const handleReset = () => {
    setMood("");
    setSubject("");
    setFooter("");
    setGenerated(false);
  };

  const handleCopy = () => {
    const textToCopy = `Subject: ${subject}\nFooter: ${footer}`;
    navigator.clipboard.writeText(textToCopy);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-w-lg mx-auto mt-20 p-6 rounded-lg shadow-2xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">MoodMail Generator</h2>

      {!generated ? (
        <MoodInput
          mood={mood}
          setMood={setMood}
          onGenerate={handleGenerate}
          disabled={generated}
        />
      ) : (
        <div className="space-y-4">
          <MoodOutput subject={subject} footer={footer} onReset={handleReset} />
          <Button
            onClick={handleCopy}
            className=" w-full bg-blue-600 hover:bg-blue-700 text-white 
            px-4 py-2 rounded-md">
            Copy to Clipboard
          </Button>
        </div>
      )}
    </div>
  );
}


export default Home;











// function Home() {
//   const [mood, setMood] = useState("");
//   const [subject, setSubject] = useState("");
//   const [footer, setFooter] = useState("");
//   const [generated, setGenerated] = useState(false);

//   const handleGenerate = () => {
//     const lowerMood = mood.toLocaleLowerCase();
//     console.log("lowerMood : ", lowerMood);

//     if (lowerMood.includes("happy")) {
//       setSubject("Feeling Great Today!");
//       setFooter("Stay awesome 😊");
//     } else if (lowerMood.includes("sad")) {
//       setSubject("A Bit Down Today");
//       setFooter("Sending virtual hugs 🤗");
//     } else if (lowerMood.includes("angry")) {
//       setSubject("Need to Vent");
//       setFooter("Take a breath 🔥");
//     } else if (lowerMood.includes("nervous")) {
//       setSubject("Feeling Anxious");
//       setFooter("You've got this 💪");
//     } else if (lowerMood.includes("excited")) {
//       setSubject("Can't Contain the Excitement!");
//       setFooter("Let's gooo 🎉");
//     } else {
//       setSubject("Just Another Day");
//       setFooter("Keep going 💫");
//     }
//     setGenerated(true);
//   };

//   const handleReset = () => {
//     setMood("");
//     setSubject("");
//     setFooter("");
//     setGenerated(false);
//   };

//   return (
//     <div className="min-w-lg mx-auto mt-20 p-6 rounded-lg shadow-2xl space-y-6">
//       <h2 className="text-2xl font-bold text-gray-800"> MoodMail Generator</h2>

//       {!generated ? (
//         <MoodInput
//           mood={mood}
//           setMood={setMood}
//           onGenerate={handleGenerate}
//           disabled={generated}
//         />
//       ) : (
//         <MoodOutput subject={subject} footer={footer} onReset={handleReset} />
//       )}
//     </div>
//   );
// }