import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";

const MessageForm = () => {
  const [message, setMessage] = useState<string>("");
  const [delay, setDelay] = useState<number>(2);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [sendMessage, setSendMessage] = useState<string>("");

  const handleSend = () => {
    setIsSending(true);

    const id = setTimeout(() => {
      setSendMessage(message);
      setMessage("");
      setIsSending(false);

  toast("📨 Message Sent!", {
    description: message,
    duration: delay * 1000,
  });
      // Auto-clear the sendMessage after 3 seconds
      setTimeout(() => {
      setSendMessage("");
      console.log('Message cleared automatically');
      }, 3000);

    }, delay * 1000);
    
    setTimerId(id);

  };


  const handleCancle = () => {
    if (timerId) clearTimeout(timerId);
    setSendMessage("");
    setIsSending(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 border rounded-lg shadow-sm bg-white space-y-4 ">
      <h2 className="text-2xl font-bold text-gray-500">DM Delay Button</h2>

      <Textarea
        placeholder="Type your message here."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isSending}
      />

      {/* <Input
        type="number"
        placeholder="Enter the minuts"
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))}
        disabled={isSending}
      /> */}

      {/* Optional Preview */}
      {message && (
        <div className="p-3 bg-gray-50 border rounded-md text-sm text-gray-700">
          <strong>Preview:</strong> {message}
        </div>
      )}

      {/* Delay   Selector */}
      <div className="flex gap-2">
        {[2, 4, 5].map((sec) => (
          <Button
            key={sec}
            variant={delay === sec ? "default" : "outline"}
            onClick={() => setDelay(sec)}
            disabled={isSending}
          >
            {sec}s
          </Button>
        ))}
      </div>


      {!isSending ? (
        <Button className="w-full bg-green-600" onClick={handleSend}>
          Send With Delay
        </Button>
      ) : (
        <Button
          className="w-full"
          variant={"destructive"}
          onClick={handleCancle}
        >
          Cancle Sending
        </Button>
      )}

      {sendMessage && (
        <div className="bg-green-100 border border-green-400
         text-green-800 p-4 rounded-lg shadow-md space-y-2">
          <p className="text-sm font-semibold">Send Message:</p>
          <p className="text-base">{sendMessage}</p>
        </div>
      )}
    </div>
  );
};

export default MessageForm;
