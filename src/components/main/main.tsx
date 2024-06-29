export const Hero: React.FC = () => (
  <section className="hero py-16 px-6 text-center">
    <h1 className="text-4xl font-bold mb-4">All your files in one secure location, accessible anywhere.</h1>
    <p className="mb-8 max-w-2xl mx-auto">
      Fylo stores all your most important files in one secure location.
      Access them wherever you need, share and collaborate with friends family, and co-workers.
    </p>
    <button className="bg-teal-400 text-gray-900 py-2 px-6 rounded-full hover:bg-teal-300">
      Get Started
    </button>
  </section>
);

// Feature Card Component
const FeatureCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => (
  <div className="feature-card p-6 text-center">
    <img src={icon} alt={title} className="h-16 mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

// Features Grid Component
export const FeaturesGrid: React.FC = () => (
  <section className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 px-6">
    <FeatureCard
      title="Access your files, anywhere"
      description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
      icon="/icon-access-anywhere.svg"
    />
    <FeatureCard
      title="Security you can trust"
      description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
      icon="/icon-security.svg"
    />
    <FeatureCard
      title="Real-time collaboration"
      description="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
      icon="/icon-collaboration.svg"
    />
    <FeatureCard
      title="Store any type of file"
      description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
      icon="/icon-any-file.svg"
    />
  </section>
);

// Stay Productive Section Component
export const StayProductive: React.FC = () => (
  <section className="stay-productive py-16 px-6 flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2 mb-8 lg:mb-0">
      <img src="/illustration-stay-productive.png" alt="Stay productive" className="w-full" />
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
        See how Fylo works <img src="/icon-arrow.svg" alt="Arrow" className="ml-2" />
      </a>
    </div>
  </section>
);

// Testimonial Card Component
export const TestimonialCard: React.FC<{ quote: string; name: string; title: string; avatar: string }> = ({ quote, name, title, avatar }) => (
  <div className="testimonial-card bg-gray-800 p-6 rounded-lg">
    <p className="mb-4">{quote}</p>
    <div className="flex items-center">
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full mr-4" />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  </div>
);

// Testimonials Section Component
export const Testimonials: React.FC = () => (
  <section className="testimonials py-16 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <TestimonialCard
        quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        name="Satish Patel"
        title="Founder & CEO, Huddle"
        avatar="/avatar-satish.jpg"
      />
      <TestimonialCard
        quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        name="Bruce McKenzie"
        title="Founder & CEO, Huddle"
        avatar="/avatar-bruce.jpg"
      />
      <TestimonialCard
        quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        name="Iva Boyd"
        title="Founder & CEO, Huddle"
        avatar="/avatar-iva.jpg"
      />
    </div>
  </section>
);

// Call-to-Action Component
export const CallToAction: React.FC = () => (
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
