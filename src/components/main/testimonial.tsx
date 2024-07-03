import {TestimonialCardProps } from "../../types/types";

// Testimonial Card Component
export const TestimonialCard = ({ quote, name, title, avatar }: TestimonialCardProps) => (
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
  export const Testimonials = () => (
    <section className="testimonials py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          name="Satish Patel"
          title="Founder & CEO, Huddle"
          avatar="./images/profile-1.jpg"
        />
        <TestimonialCard
          quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          name="Bruce McKenzie"
          title="Founder & CEO, Huddle"
          avatar="./images/profile-2.jpg"
        />
        <TestimonialCard
          quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          name="Iva Boyd"
          title="Founder & CEO, Huddle"
          avatar="./images/profile-3.jpg"
        />
      </div>
    </section>
  );
  