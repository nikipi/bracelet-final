import InfoPageLayout from "@/components/info-page-layout"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Cleanse and Charge Your Crystal Bracelet? | Crystal Healing",
  description:
    "Learn how to cleanse and charge your crystal bracelet to keep it energetically clear and radiating its full potential.",
  keywords:
    "crystal bracelet, crystal bracelet cleansing, crystal bracelet charging, crystal healing, crystal care, crystal properties, crystal jewelry, crystal bracelet care",
  openGraph: {
    title: "How to Cleanse and Charge Your Crystal Bracelet?",
    description:
      "Learn how to cleanse and charge your crystal bracelet to keep it energetically clear and radiating its full potential.",
    images: [
      {
        url: "/images/crystal-ensemble.png",
        width: 1200,
        height: 630,
        alt: "Crystal bracelet cleansing",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Cleanse and Charge Your Crystal Bracelet?",
    description:
      "Learn how to cleanse and charge your crystal bracelet to keep it energetically clear and radiating its full potential.",
    images: ["/images/crystal-ensemble.png"],
  },
}

export default function CleanseChargeCrystalBraceletPage() {
  return (
    <InfoPageLayout 
      title="How to Cleanse and Charge Your Crystal Bracelet?"
      subtitle="Keep your crystal jewelry energetically clear and radiating its full potential."
      className="prose prose-lg max-w-6xl text-[#5c5c5c]"
    >
      <div className="flex items-center gap-2 text-sm text-[#5c5c5c] mb-8">
        <span>February 28, 2024</span>
        <span>•</span>
        <span>Crystal Care</span>
        <span>•</span>
        <span>6 min read</span>
      </div>

      <div className="relative h-96 rounded-xl overflow-hidden mb-12 shadow-lg">
        <Image src="/images/crystal-ensemble.png" alt="Crystal bracelet cleansing" fill className="object-cover" />
      </div>

      {/* WHY CLEANSE */}
      <section className="mt-1">
        <p>
          Crystals absorb and emit energy, which is what makes them such powerful tools for healing and manifestation. But just like any tool, your crystal bracelet needs regular care to stay energetically clear. Over time, it may absorb stagnant or negative energies—cleansing and charging help restore its vibrancy and effectiveness.
        </p>

        <p>Look out for these signs that your bracelet needs a cleanse:</p>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li>Duller crystal colors than usual</li>
          <li>A heavy or "off" feeling when wearing it</li>
          <li>Weakened energetic connection</li>
          <li>Less noticeable effects</li>
          <li>Exposure to emotional stress or negativity</li>
        </ul>
      </section>

      {/* HOW OFTEN TO CLEANSE */}
      <section className="mt-12">
        <p>
          Cleaning frequency depends on how often you wear it and the environments you're in. Here are general guidelines:
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-6">
          {[
            {
              title: "Regular Wear",
              desc: "Cleanse weekly if you wear it daily.",
            },
            {
              title: "Occasional Wear",
              desc: "Cleanse monthly or after each use.",
            },
            {
              title: "Stressful Exposure",
              desc: "Cleanse immediately after intense emotions or crowded spaces.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl border border-[#e5e0d5] text-center shadow-sm"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#f0ebe2] text-[#c9a87c] font-semibold">
                {i + 1}
              </div>
              <h4 className="text-[#2c2c2c] font-medium mb-2">{item.title}</h4>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLEANSING METHODS */}

      <section className="mt-12">

  <p>Choose a method that feels aligned with your crystals and intention:</p>

  <div className="grid md:grid-cols-2 gap-6 mt-6">
    {[
      {
        title: "Moonlight Cleansing",
        desc: "Perfect during a full moon. Gentle and safe for all crystals.",
        steps: [
          "Place your bracelet on a windowsill or outside.",
          "Leave overnight, ideally during a full moon.",
          "Retrieve before direct sunlight exposure.",
        ],
        note: "Safe for all crystals.",
      },
      {
        title: "Smudging with Sage or Palo Santo",
        desc: "Smoke is used to purify and release stagnant energy.",
        steps: [
          "Light the herb and let it smolder.",
          "Pass the bracelet through the smoke for 30–60 seconds.",
          "Visualize energy clearing as the smoke rises.",
        ],
        note: "Safe for all crystals.",
      },
      {
        title: "Sound Cleansing",
        desc: "Sound waves break up stagnant energy patterns.",
        steps: [
          "Play a singing bowl or bell near the bracelet.",
          "Let the sound wash over it for 2–3 minutes.",
          "Use a tuning fork as an alternative.",
        ],
        note: "Safe for all crystals.",
      },
      {
        title: "Selenite Plate",
        desc: "Selenite naturally cleanses other crystals without absorbing energy itself.",
        steps: [
          "Place the bracelet on a selenite plate or next to a wand.",
          "Leave for 6–24 hours.",
        ],
        note: "Safe for all crystals.",
      },
      {
        title: "Visualization",
        desc: "Harness your own intention to cleanse and reset the bracelet.",
        steps: [
          "Hold the bracelet in both hands.",
          "Visualize white light filling it.",
          'Say: "I cleanse this bracelet of all stagnant energy."',
        ],
        note: "Can be done anywhere.",
      },
      {
        title: "Brown Rice",
        desc: "Absorbs energy from crystals via grounding.",
        steps: [
          "Fill a bowl with dry brown rice.",
          "Bury the bracelet completely.",
          "Leave for 24 hours, then discard rice.",
        ],
        note: "Avoid with soft or porous stones.",
      },
    ].map((method, i) => (
      <div key={i} className="bg-[#f0ebe2] p-6 rounded-lg">
        <h3 className="text-xl font-medium mb-2">{`${i + 1}. ${method.title}`}</h3>
        <p className="mb-3">{method.desc}</p>
        <p className="font-semibold">How to do it:</p>
        <ol className="list-decimal pl-5 space-y-1 mt-2">
          {method.steps.map((step, j) => (
            <li key={j}>{step}</li>
          ))}
        </ol>
        <p className="text-sm italic mt-3">
          <strong>Note:</strong> {method.note}
        </p>
      </div>
    ))}
  </div>
</section>







      <section className="mt-16">
        <p>
          After cleansing, charging restores the crystal’s full energetic potential and aligns it with your intention.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-8">
          {[
            {
              title: "Sunlight Charging",
              desc: "Best for energizing crystals associated with vitality and clarity.",
              caution:
                "Avoid overexposure — some crystals fade in sunlight (e.g., amethyst, rose quartz).",
              how: "Place in morning sunlight for 1–2 hours.",
            },
            {
              title: "Earth Charging",
              desc: "Reconnects your bracelet with grounding and stabilizing Earth energy.",
              how: "Bury it in a flower pot or garden for 24 hours.",
              note: "Place in a cloth bag for easy retrieval.",
            },
            {
              title: "Crystal Clusters",
              desc: "Quartz or amethyst geodes recharge and amplify your bracelet.",
              how: "Place on or near a crystal cluster for 24 hours.",
            },
            {
              title: "Intentional Charging",
              desc: "Use focused thought to set energetic direction.",
              how: 'Hold the bracelet and state an affirmation like "I charge this bracelet with healing and clarity."',
            },
          ].map((charge, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-[#e5e0d5] shadow-sm">
              <h3 className="text-lg font-medium text-[#2c2c2c] mb-2">{charge.title}</h3>
              <p className="mb-2">{charge.desc}</p>
              <p className="text-sm mb-1">
                <strong>How to do it:</strong> {charge.how}
              </p>
              {charge.caution && (
                <p className="text-sm italic text-red-500">{charge.caution}</p>
              )}
              {charge.note && <p className="text-sm italic">{charge.note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* SPECIAL CARE TABLE
      <section className="mt-16">
        <h2>Special Care for Popular Crystals</h2>
        <p>
          Not all crystals respond the same to water or sunlight. Here's a quick reference:
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white border border-[#e5e0d5] text-sm">
            <thead>
              <tr className="bg-[#f0ebe2] text-left">
                <th className="py-3 px-4">Crystal</th>
                <th className="py-3 px-4">Water Safe?</th>
                <th className="py-3 px-4">Sunlight Safe?</th>
                <th className="py-3 px-4">Best Cleansing Method</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Amethyst",
                  water: "Yes",
                  sunlight: "No (fades)",
                  method: "Moonlight, Sound, Selenite",
                  link: "/blog/amethyst",
                },
                {
                  name: "Rose Quartz",
                  water: "Yes",
                  sunlight: "Limited",
                  method: "Moonlight, Visualization, Sound",
                  link: "/blog/rose-quartz",
                },
                {
                  name: "Selenite",
                  water: "No",
                  sunlight: "Yes",
                  method: "Visualization, Sound",
                  link: "/blog/selenite",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#f8f5f0]"}
                >
                  <td className="py-3 px-4">
                    <Link href={row.link} className="text-[#c9a87c] hover:underline">
                      {row.name}
                    </Link>
                  </td>
                  <td className="py-3 px-4">{row.water}</td>
                  <td className="py-3 px-4">{row.sunlight}</td>
                  <td className="py-3 px-4">{row.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section> */}

      <div className="mt-16">
        <Link href="/crystal-healing-blog">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    </InfoPageLayout>
  )
}
