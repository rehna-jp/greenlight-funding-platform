
const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">About GreenLight</h1>
      <div className="prose max-w-3xl mx-auto">
        <p className="text-lg mb-4">
          GreenLight is a decentralized platform connecting renewable energy projects
          with donors and validators to accelerate the transition to clean energy.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          To democratize funding for renewable energy projects and ensure
          transparency through community validation.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Project owners submit renewable energy initiatives</li>
          <li>DAO members validate project authenticity</li>
          <li>Donors contribute to validated projects</li>
          <li>Smart contracts ensure transparent fund distribution</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
