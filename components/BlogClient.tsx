
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const categories = ["All", "Crystal Properties", "Tutorials", "Astrology"];

export default function BlogClient({ blogPosts }: { blogPosts: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-[#c9a87c] text-white"
                  : "bg-[#f0ebe2] text-[#5c5c5c] hover:bg-[#e5e0d5]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredPosts.map((post) => (
          <Link href={`/crystal-healing-blog/${post.slug}`} key={post.id}>
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#c9a87c] text-white text-xs px-2 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-[#5c5c5c] text-sm mb-2">{post.date}</p>
                <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-2">{post.title}</h3>
                <p className="text-[#5c5c5c] text-sm">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* <div className="text-center">
        <button className="border border-[#c9a87c] text-[#c9a87c] hover:bg-[#f8f5f0] px-8 py-3 rounded-full">
          Load More Articles
        </button>
      </div> */}
    </>
  );
}