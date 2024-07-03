import { FeatureCardProps } from "../../types/types";


// Feature Card Component
export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
    <div className="feature-card p-6 text-center">
      <img src={icon} alt={title} className="h-16 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
  
  // Features Grid Component
  export const FeaturesGrid: React.FC = () => (
    <section className="features-grid grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 px-6">
      <FeatureCard
        title="Access your files, anywhere"
        description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        icon="./images/icon-access-anywhere.svg"
      />
      <FeatureCard
        title="Security you can trust"
        description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        icon="./images/icon-security.svg"
      />
      <FeatureCard
        title="Real-time collaboration"
        description="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        icon="./images/icon-collaboration.svg"
      />
      <FeatureCard
        title="Store any type of file"
        description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        icon="./images/icon-any-file.svg"
      />
    </section>
  );