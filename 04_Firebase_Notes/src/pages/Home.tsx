import NodeForm from "@/components/NodeForm";
import NodeList from "@/components/NodeList";
import React from "react";

function Home() {
  return (
    <div
      className="flex items-center justify-center px-4 py-8
     bg-yellow-100 shadow-2xl
    max-w-screen-sm mx-auto w-full "
    >
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-6 ">Fire Notes </h1>
        <div className="p-6 bg-white rounded-lg shadow">
          <NodeForm />
        </div>
        <NodeList />
      </div>
    </div>
  );
}

export default Home;
