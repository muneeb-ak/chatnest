"use client";

import React, { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

function toTitleCaseWithAnd(str) {
  let words = str.replace(/-/g, " ").split(" ");
  words = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  if (words.length === 2) {
    return `${words[0]} and ${words[1]}`;
  }
  return words.join(" ");
}

const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = "ta5g89wjraqy";
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  const user = {
    id: userId,
    name: userName,
    image:
      clerkUser.profileImageUrl ||
      `https://getstream.io/random_png/?name=${encodeURIComponent(userName)}`,
  };

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel("messaging", slug, {
      image: `https://getstream.io/random_svg/?id=${slug}`,
      name: `${toTitleCaseWithAnd(slug)} Discussion`,
    });

    setChannel(channel);
    channel.addMembers([userId]);
  }, [client, slug, userId]);

  if (!client)
    return <div className="text-2xl m-5">Setting up....</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForum;
