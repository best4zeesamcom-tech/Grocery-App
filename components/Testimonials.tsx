export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Regular Customer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      comment: "Best grocery delivery service! The fruits are always fresh and delivery is super fast.",
      rating: 5
    },
    {
      id: 2,
      name: "Ali Raza",
      role: "Home Chef",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      comment: "Amazing quality vegetables. I've been ordering for 6 months and never disappointed.",
      rating: 5
    },
    {
      id: 3,
      name: "Fatima Khan",
      role: "Busy Mom",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      comment: "Saves me so much time! The app is easy to use and customer service is excellent.",
      rating: 5
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of happy customers who get fresh groceries delivered daily
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                  <p className="text-green-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              <p className="text-gray-600 italic">"{testimonial.comment}"</p>

              <div className="mt-4 flex gap-1 text-green-500">
                <span className="text-xl">❝</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}