import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 ">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="space-y-4">
            <h5 className="font-bold text-gray-800">About</h5>
            {[
              "How Airbnb works",
              "Newsroom",
              "Investors",
              "Airbnb Plus",
              "Airbnb Lux",
            ].map((item, i) => (
              <p key={i} className="text-gray-600">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
