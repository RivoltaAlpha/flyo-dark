// Footer Component
export const Footer: React.FC = () => (
  <footer className="bg-gray-800 py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <img src="/fylo-logo.svg" alt="Fylo logo" className="h-8 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p className="flex items-start mb-4">
            <img src="/icon-location.svg" alt="Location" className="mr-4 mt-1" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <p className="flex items-center mb-4">
            <img src="/icon-phone.svg" alt="Phone" className="mr-4" />
            +1-543-123-4567
          </p>
          <p className="flex items-center">
            <img src="/icon-email.svg" alt="Email" className="mr-4" />
            example@fylo.com
          </p>
        </div>
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-teal-400">About Us</a></li>
            <li><a href="#" className="hover:text-teal-400">Jobs</a></li>
            <li><a href="#" className="hover:text-teal-400">Press</a></li>
            <li><a href="#" className="hover:text-teal-400">Blog</a></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-teal-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-teal-400">Terms</a></li>
            <li><a href="#" className="hover:text-teal-400">Privacy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);