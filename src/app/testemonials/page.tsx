// src/app/testemonials/page.tsx
import React from 'react';

const testimonials = [ // Demo data for testing
  {
    id: 1,
    name: 'John Doe',
    testimonial: 'This is a great product!',
  },
  {
    id: 2,
    name: 'Jane Doe',
    testimonial: 'I love this product!',
  },
];

const TestimonialsPage: React.FC = () => {
  return (
    <div>
      <h1>Testimonials</h1>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <p>{testimonial.testimonial}</p>
            <p>— {testimonial.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestimonialsPage;