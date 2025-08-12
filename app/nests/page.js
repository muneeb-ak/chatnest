import Link from 'next/link';
import React from 'react';


const Page = () => {
  const topics = [
    {
      text: "Coding & Programming",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      des: "Discuss coding problems, share tips, and learn programming languages.",
            slug: "programming-coding",
    },
    {
      text: "Travel & Adventure",
      img: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
      des: "Share travel stories, tips, and dream destinations.",
           slug: "adventure-travel",
    },
    {
      text: "Food & Cooking",
      img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
      des: "Discuss recipes, cooking tips, and food reviews.",
            slug: "cooking-food",
    },
    {
      text: "Movies & TV Shows",
      img: "https://cdn-icons-png.flaticon.com/512/744/744922.png",
      des: "Talk about the latest movies, series, and entertainment news.",
            slug: "tv-movies",
    },
    {
      text: "Music & Podcasts",
      img: "https://cdn-icons-png.flaticon.com/512/920/920793.png",
      des: "Share playlists, discover new artists, and discuss music trends.",
           slug: "podcasts-music",
    },
    {
      text: "Sports & Fitness",
      img: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
      des: "Chat about sports events, workout tips, and staying active.",
            slug: "fitness-sports",
    },
    {
      text: "Books & Reading",
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
      des: "Exchange book recommendations and literary discussions.",
            slug: "reading-books",
    },
    {
      text: "Lifestyle & Self-Improvement",
      img: "https://cdn-icons-png.flaticon.com/512/4313/4313503.png",
      des: "Discuss habits, productivity, and personal growth.",
                slug: "self-improvement-and-lifestyle",
    },
    {
      text: "Pets & Animals",
      img: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
      des: "Share pet stories, tips, and animal care advice.",
            slug: "animals-pets",
    },
    {
      text: "Current Events & World News",
      img: "https://cdn-icons-png.flaticon.com/512/4834/4834560.png",
      des: "Discuss global news, politics, and important events.",
      slug: "news-and-current-events",
      
    },
    {
      text: "Gaming & eSports",
      img: "https://cdn-icons-png.flaticon.com/512/9408/9408275.png",
      des: "Talk about video games, eSports and gaming news.",
            slug: "esports-gaming",
    },
    {
      text: "Art & Creativity",
      img: "https://cdn-icons-png.flaticon.com/512/2331/2331929.png",
      des: "Share artworks, creative projects, and get inspired.",
           slug: "creativity-art",
    },
  ];

  return (
    <section className="px-4 sm:px-6 py-16 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Explore Chat Topics
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Join discussions on your favorite topics and connect with like-minded people.
        </p>

        {/* Max 3 per row */}
        <div className="flex flex-wrap justify-center gap-6">
          {topics.map((topic) => (
            <div
              key={topic.slug}
              className="bg-gray-800 rounded-xl shadow-md p-5 flex flex-col items-center text-center w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] min-h-[280px] hover:shadow-lg hover:shadow-purple-500/20 transition"
            >
              <img
                src={topic.img}
                alt={topic.text}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                {topic.text}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base flex-grow">
                {topic.des}
              </p>
              <Link
                href={`/nest/${topic.slug}`}
                className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-5 py-2 rounded-full font-medium shadow-lg transition"
              >
                Discuss Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;


export const metadata = {
  title: "Nests | ChatNest",
  description: "Connect with the world.",
};
