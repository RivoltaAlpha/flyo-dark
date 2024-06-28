const MainContent = () => {
  return (
    <main className="flex flex-col items-center text-center">
      <section className="mt-10 mb-20">
        <h1 className="text-4xl font-bold mb-6">All your files in one secure location, accessible anywhere.</h1>
        <p className="text-lg mb-6">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
        <button className="bg-brightBlue text-white py-3 px-6 rounded-full hover:bg-lightCyan">Get Started</button>
      </section>

      <section className="flex flex-wrap justify-center space-x-6 mt-10">
        <div className="flex flex-col items-center max-w-sm">
          <img src="path/to/icon-access-anywhere.svg" alt="Access your files, anywhere" />
          <h2 className="text-xl font-bold mt-4">Access your files, anywhere</h2>
          <p className="mt-2">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
        </div>
        <div className="flex flex-col items-center max-w-sm">
          <img src="path/to/icon-security.svg" alt="Security you can trust" />
          <h2 className="text-xl font-bold mt-4">Security you can trust</h2>
          <p className="mt-2">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
        </div>
        {/* Add more sections as needed */}
      </section>
    </main>
  );
};

export default MainContent;
