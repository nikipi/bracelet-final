import ProductPage from "@/components/product-page-components/page"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const allProducts = [
    {
      id: "serenity-bracelet",
      name: "Serenity Crystal Bracelet",
      price: 89.99,
      compareAtPrice: 109.99,
      description:
        "A handcrafted crystal bracelet designed to promote calm, balance, and inner peace. Each crystal has been carefully selected and arranged to create a harmonious energy flow.",
      images: [
        "/images/crystal-bracelet.png",
        "/images/crystal-bracelet-blue.png",
        "/crystal-silk-harmony.png",
        "/images/crystal-selection.png",
      ],
      metafields: {
        crystal_properties: {
          crystals_included: JSON.stringify(["Amethyst", "Clear Quartz", "Rose Quartz"]),
          primary_intention: "Healing",
          secondary_intentions: JSON.stringify(["Calm", "Balance"]),
          crystal_descriptions: JSON.stringify({
            Amethyst: "Promotes calm and balance, helps with stress relief and emotional healing.",
            "Clear Quartz": "Amplifies energy and thought, aids concentration and memory.",
            "Rose Quartz": "Stone of unconditional love, promotes compassion and peace.",
          }),
        },
        customization_options: {
          available_sizes: JSON.stringify(['Small (6.5")', 'Medium (7")', 'Large (7.5")', 'X-Large (8")']),
        },
        product_details: {
          creation_time: "3-5 business days",
          handcrafted_details:
            "Each bracelet is handcrafted with care by our artisans. Natural variations in the crystals make each piece unique.",
        },
      },
      variants: [
        { id: "var1", title: 'Small (6.5")', price: 89.99, available: true },
        { id: "var2", title: 'Medium (7")', price: 89.99, available: true },
        { id: "var3", title: 'Large (7.5")', price: 89.99, available: true },
        { id: "var4", title: 'X-Large (8")', price: 89.99, available: false },
      ],
      relatedProducts: [
        {
          id: "abundance-flow",
          title: "Abundance Flow Bracelet",
          price: 99.99,
          image: "/images/crystal-bracelet-blue.png",
          intention: "Abundance",
        },
        {
          id: "protection-shield",
          title: "Protection Shield Bracelet",
          price: 79.99,
          image: "/crystal-silk-harmony.png",
          intention: "Protection",
        },
        {
          id: "self-love-embrace",
          title: "Self-Love Embrace Bracelet",
          price: 94.99,
          image: "/images/crystal-selection.png",
          intention: "Self-Love",
        },
      ],
    },
    {
      id: "abundance-flow",
      name: "Abundance Flow Bracelet",
      price: 99.99,
      compareAtPrice: 119.99,
      description:
        "A powerful crystal bracelet designed to attract abundance, prosperity, and success into your life. Carefully selected crystals are aligned to amplify positive energy and manifest wealth and opportunities.",
      images: [
        "/images/crystal-bracelet-blue.png",
        "/images/abundance-flow-bracelet.png",
        "/images/abundance-flow-crystals.png",
      ],
      metafields: {
        crystal_properties: {
          crystals_included: JSON.stringify(["Citrine", "Green Aventurine", "Pyrite"]),
          primary_intention: "Abundance",
          secondary_intentions: JSON.stringify(["Prosperity", "Wealth", "Success"]),
          crystal_descriptions: JSON.stringify({
            Citrine: "Known as the stone of wealth, it attracts abundance and success.",
            "Green Aventurine": "Brings luck, prosperity, and good fortune.",
            Pyrite: "A stone of protection and abundance, it enhances confidence and manifesting power.",
          }),
        },
        customization_options: {
          available_sizes: JSON.stringify(['Small (6.5")', 'Medium (7")', 'Large (7.5")', 'X-Large (8")']),
        },
        product_details: {
          creation_time: "3-5 business days",
          handcrafted_details:
            "Each bracelet is handcrafted by skilled artisans, ensuring that each piece is unique and imbued with positive energy.",
        },
      },
      variants: [
        { id: "var1", title: 'Small (6.5")', price: 99.99, available: true },
        { id: "var2", title: 'Medium (7")', price: 99.99, available: true },
        { id: "var3", title: 'Large (7.5")', price: 99.99, available: true },
        { id: "var4", title: 'X-Large (8")', price: 99.99, available: false },
      ],
      relatedProducts: [
        {
          id: "serenity-bracelet",
          title: "Serenity Crystal Bracelet",
          price: 89.99,
          image: "/images/crystal-bracelet.png",
          intention: "Healing",
        },
        {
          id: "protection-shield",
          title: "Protection Shield Bracelet",
          price: 79.99,
          image: "/crystal-silk-harmony.png",
          intention: "Protection",
        },
        {
          id: "self-love-embrace",
          title: "Self-Love Embrace Bracelet",
          price: 94.99,
          image: "/images/crystal-selection.png",
          intention: "Self-Love",
        },
      ],
    },
  ]
  
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    // Find the product by slug
    const product = allProducts.find((p) => p.id === params.slug)
  
    // If product not found, return 404
    if (!product) {
      notFound()
    }
  
    return <ProductPage product={product} />
  }

