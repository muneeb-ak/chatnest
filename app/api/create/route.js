import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = "ta5g89wjraqy";
const api_secret = "s4x2w3h8ur9kkhudfwf6xhdew56x6zpt7ph5w8xrnasbgpk8a6txmtzdvsx85veg";
// const user_id = "user_318jyshIfdDrcnpP1fBsFdeVLSN"

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);

  const user = await request.json();


  function toTitleCaseWithAnd(str) {
    let words = str.replace(/-/g, " ").split(" ");

    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    if (words.length === 2) {
      return `${words[0]} and ${words[1]}`;
    }

    return words.join(" ");
  }


  const token = serverClient.createToken(user.data.id);
  const client = await clerkClient();
  await serverClient.upsertUser({ id: user.data.id })



  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: { token },
  })

  //give access to this user for all chats
  const topics = [
    {
      slug: "programming-coding",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      slug: "adventure-travel",
      image: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
    },
    {
      slug: "cooking-food",
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
      slug: "tv-movies",
      image: "https://cdn-icons-png.flaticon.com/512/744/744922.png",
    },
    {
      slug: "podcasts-music",
      image: "https://cdn-icons-png.flaticon.com/512/920/920793.png",
    },
    {
      slug: "fitness-sports",
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    },
    {
      slug: "reading-books",
      image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    },
    {
      slug: "self-improvement-and-lifestyle",
      image: "https://cdn-icons-png.flaticon.com/512/4313/4313503.png",
    },
    {
      slug: "animals-pets",
      image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    },
    {
      slug: "news-and-current-events",
      image: "https://cdn-icons-png.flaticon.com/512/4834/4834560.png",
    },
    {
      slug: "esports-gaming",
      image: "https://cdn-icons-png.flaticon.com/512/9408/9408275.png",
    },
    {
      slug: "creativity-art",
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331929.png",
    }
  ];


for (const topic of topics) {
  const channel = serverClient.channel("messaging", topic.slug);

  await channel.create({
    name: `${toTitleCaseWithAnd(topic.slug)} Discussion`,
    image: `${topic.image}?v=${Date.now()}`, // unique to bust cache
    created_by_id: user.data.id,
  });

  await channel.addMembers([user.data.id]);

  // // Make sure the latest image is applied
  // await channel.update({
  //   image: `${topic.image}?v=${Date.now()}`
  // });
}

//     return Response.json({message : "Done!"})
// }
}

export const metadata = {
  title: "Dicussion | ChatNest",
  description: "Connect with the world.",
};
