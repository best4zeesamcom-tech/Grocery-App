export default function Features() {
  const features = [
    {
      icon: "🚚",
      title: "Free Delivery",
      description: "Free shipping on orders above $50"
    },
    {
      icon: "🌿",
      title: "100% Fresh",
      description: "Farm fresh products daily"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Delivery in 30-45 minutes"
    },
    {
      icon: "💳",
      title: "Secure Payment",
      description: "Multiple payment options"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}