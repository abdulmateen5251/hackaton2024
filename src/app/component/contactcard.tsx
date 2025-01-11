import React from 'react';

const ContactCards = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      email: "georgia.young@example.com",
      altEmail: "georgia.young@ple.com",
      label: "Get Support"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      email: "georgia.young@example.com",
      altEmail: "georgia.young@ple.com",
      label: "Get Support",
      isHighlighted: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      email: "georgia.young@example.com",
      altEmail: "georgia.young@ple.com",
      label: "Get Support"
    }
  ];

  return (
    <div className="flex justify-center items-center gap-0">
      {contactMethods.map((method, index) => (
        <div
          key={index}
          className={`flex flex-col items-center p-8 w-[328px] h-[403px] ${
            method.isHighlighted 
              ? 'bg-[#252B42] text-white' 
              : 'bg-white text-gray-600'
          }`}
        >
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className={method.isHighlighted ? 'text-white' : ''}>
              {method.icon}
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm">{method.email}</p>
              <p className="text-sm">{method.altEmail}</p>
            </div>
            <p className="font-bold">{method.label}</p>
          </div>
          
          <button 
            className={`mt-4 px-10 py-3 rounded-full border ${
              method.isHighlighted
                ? 'border-white text-white hover:bg-white hover:text-[#252B42]'
                : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
            } transition-colors duration-300`}
          >
            Submit Request
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;