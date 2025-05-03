import InfoPageLayout from "@/components/info-page-layout"
import Image from "next/image"

export default function OurStoryPage() {
  return (
    <InfoPageLayout
      title="Our Mission"
      subtitle="The journey behind Yumiere and our mission to bring healing crystals into your life"
    >
      <div className="prose prose-lg max-w-none text-[#5c5c5c]">
        {/* Hero Image with Quote */}
        <div className="mb-16 relative h-96 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/crystal-bracelet-blue.png"
            alt="Yumiere founder working with crystals"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-xl italic mb-1">
              "I believe that crystals are more than just beautiful stones – they're tools for transformation."
            </p>
            <p className="text-sm">— Emma Chen, Founder</p>
          </div>
        </div>

        {/* The Beginning */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-4">The Beginning</h2>
          <p>
            Yumiere began in 2015 in Emma Chen's small apartment in Portland, Oregon. After experiencing the
            healing benefits of crystals during her own wellness journey, Emma became passionate about sharing these
            natural tools with others.
          </p>
          <p>
            What started as a hobby – making crystal bracelets for friends and family – quickly grew into something more
            as word spread about the quality and intention behind each piece.
          </p>
        </section>

        {/* Timeline
        <section className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                year: "2015",
                desc: "Emma creates her first collection of crystal bracelets and sells them at local wellness fairs and markets.",
              },
              {
                year: "2017",
                desc: "Yumiere opens its first small studio space and begins collaborating with local energy healers.",
              },
              {
                year: "2019",
                desc: "The team expands to include five artisans, and Yumiere launches its online store.",
              },
              {
                year: "2022",
                desc: "Yumiere introduces its custom bracelet design service, allowing customers to create personalized crystal combinations.",
              },
            ].map((item) => (
              <div
                key={item.year}
                className="bg-[#f0ebe2] p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-serif text-xl text-[#2c2c2c] mb-2">{item.year}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div> */}
        {/* </section> */}

        {/* Philosophy */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-4">Our Philosophy</h2>
          <p>
            At Yumiere, we believe that everyone deserves to experience the benefits of crystal energy in a way
            that's accessible, beautiful, and aligned with their personal journey.
          </p>
          <p>Our philosophy centers around three core principles:</p>
          <ul>
            <li>
              <strong>Intention:</strong> Every bracelet is created with purpose and positive energy.
            </li>
            <li>
              <strong>Quality:</strong> We use only genuine, high-quality crystals and materials.
            </li>
            <li>
              <strong>Accessibility:</strong> Crystal healing should be available to everyone, regardless of their
              experience level.
            </li>
          </ul>
        </section>

        {/* Looking Forward */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-4">Looking Forward</h2>
          <p>
            As we continue to grow, our commitment to quality, sustainability, and positive impact remains unwavering.
            We're excited to expand our collections, deepen our educational resources, and continue building a community
            of crystal enthusiasts.
          </p>
          <p>
            We're grateful for every customer who chooses to make Yumiere a part of their wellness journey, and we
            look forward to continuing to serve you with beautiful, intentional crystal jewelry for years to come.
          </p>
        </section>

        {/* Social CTA */}
        {/* <div className="mt-12 p-6 bg-white rounded-2xl shadow-md border border-[#e5e0d5] text-center">
          <h3 className="font-serif text-2xl font-light text-[#2c2c2c] mb-3">Join Our Journey</h3>
          <p className="text-[#5c5c5c] mb-4">
            Follow us on social media to stay updated on new collections, crystal education, and community events.
          </p>
          <div className="flex justify-center space-x-4">
            {["IG", "FB", "PT", "TW"].map((icon) => (
              <div
                key={icon}
                className="w-10 h-10 rounded-full bg-[#f0ebe2] flex items-center justify-center text-[#c9a87c] font-bold"
              >
                {icon}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </InfoPageLayout>
  )
}
