import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    text: "My amethyst bracelet has helped me stay calm during stressful situations. I can feel the energy flowing!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael T.",
    text: "I was skeptical at first, but after wearing my abundance bracelet for a month, I received an unexpected promotion!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma L.",
    text: "The custom bracelet I ordered for my anxiety has made such a difference. The crystals are beautiful and powerful.",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#f0ebe2]">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-light text-center text-[#2c2c2c] mb-12">Customer Experiences</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-sm border border-[#e5e0d5]">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "fill-[#c9a87c] text-[#c9a87c]" : "text-[#e5e0d5]"}`}
                  />
                ))}
              </div>
              <p className="text-[#5c5c5c] mb-6 italic">"{testimonial.text}"</p>
              <p className="font-medium text-[#2c2c2c]">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
