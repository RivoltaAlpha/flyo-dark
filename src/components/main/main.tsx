export const Hero = () => (
  <section className="hero py-16 px-6 text-center">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <img src="./images/illustration-intro.png" alt="Stay productive" className="ml-[600px] mb-6 " />
      </div>
    <div>
      <h1 className="text-4xl font-bold mb-4">All your files in one secure location, accessible anywhere.</h1>
      <p className="mb-8 max-w-2xl mx-auto">
        Fylo stores all your most important files in one secure location.<br></br>
        Access them wherever you need, share and collaborate with friends family, and co-workers.
      </p>
      <button className="bg-teal-400 text-gray-900 py-2 px-6 rounded-full hover:bg-teal-300">
        Get Started
      </button>
    </div>
  </section>
);



// Stay Productive Section Component
export const StayProductive = () => (
  <section className="stay-productive py-16 px-6 flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2 mb-8 lg:mb-0">
      <img src="./images/illustration-stay-productive.png" alt="Stay productive" className="w-full" />
    </div>
    <div className="lg:w-1/2 lg:pl-12">
      <h2 className="text-3xl font-bold mb-4">Stay productive, wherever you are</h2>
      <p className="mb-4">
        Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
      </p>
      <p className="mb-4">
        Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
      </p>
      <a href="#" className="text-teal-400 hover:text-teal-300 flex items-center">
        See how Fylo works <img src="./images/icon-arrow.svg" alt="Arrow" className="ml-2" />
      </a>
    </div>
  </section>
);


// Call-to-Action Component
export const CallToAction = () => (
  <section className="cta bg-gray-800 py-16 px-6 rounded-lg max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Get early access today</h2>
    <p className="mb-8 max-w-2xl mx-auto">
      It only takes a minute to sign up and our free starter tier is extremely generous. 
      If you have any questions, our support team would be happy to help you.
    </p>
    <form className="flex flex-col md:flex-row justify-center items-center">
      <input 
        type="email" 
        placeholder="email@example.com" 
        className="w-full md:w-2/3 mb-4 md:mb-0 md:mr-4 py-2 px-4 rounded-full text-gray-900"
      />
      <button 
        type="submit" 
        className="w-full md:w-auto bg-teal-400 text-gray-900 py-2 px-6 rounded-full hover:bg-teal-300"
      >
        Get Started For Free
      </button>
    </form>
  </section>
);
