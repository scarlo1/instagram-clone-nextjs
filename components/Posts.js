import { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { snapshot } from "recoil";
import { db } from "../firebase";

export default function Posts() {
  // const posts = [
  //   {
  //     id: "1",
  //     username: "codewithsahand",
  //     userImg:
  //       "https://yt3.googleusercontent.com/ytc/AL5GRJXhi1mm69MuHnk_n8-46VEFrMU8SelQCT3-Vv5H2A=s900-c-k-c0x00ffffff-no-rj",
  //     img: "https://images.unsplash.com/photo-1682128281178-24b8b96c4c3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //     caption: "Nice picture",
  //   },
  //   {
  //     id: "2",
  //     username: "codewithcarlos",
  //     userImg:
  //       "https://yt3.googleusercontent.com/ytc/AL5GRJXhi1mm69MuHnk_n8-46VEFrMU8SelQCT3-Vv5H2A=s900-c-k-c0x00ffffff-no-rj",
  //     img: "https://images.unsplash.com/photo-1682070410768-1bd8c48cbdf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //     caption: "Nice picture",
  //   },
  // ];
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy(("timestamp"), "desc")), (snapshot) => {
        setPosts(snapshot.docs)
      }
    )
    return unsubscribe;
  })
  return (
    <div>
      {posts.map((post) => (
        <Post 
            key={post.id} 
            id={post.id} 
            username={post.data().username} 
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
        />
      ))}
    </div>
  );
}
