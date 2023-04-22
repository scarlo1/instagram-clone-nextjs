import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "codewithsahand",
      userImg:
        "https://yt3.googleusercontent.com/ytc/AL5GRJXhi1mm69MuHnk_n8-46VEFrMU8SelQCT3-Vv5H2A=s900-c-k-c0x00ffffff-no-rj",
      img: "https://images.unsplash.com/photo-1682128281178-24b8b96c4c3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      caption: "Nice picture",
    },
    {
      id: "2",
      username: "codewithcarlos",
      userImg:
        "https://yt3.googleusercontent.com/ytc/AL5GRJXhi1mm69MuHnk_n8-46VEFrMU8SelQCT3-Vv5H2A=s900-c-k-c0x00ffffff-no-rj",
      img: "https://images.unsplash.com/photo-1682070410768-1bd8c48cbdf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      caption: "Nice picture",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post 
            key={post.id} 
            id={post.id} 
            username={post.username} 
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
        />
      ))}
    </div>
  );
}
