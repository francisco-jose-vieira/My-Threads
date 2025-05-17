import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

type Post = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Content[];
  publishedAt: Date;
};

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1586299485759-f62264d6b63f?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sara Alves",
      role: "Designer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 design/doctorcare" },
    ],
    publishedAt: new Date("2025-05-15 20:37:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "João Silva",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 design/doctorcare" },
    ],
    publishedAt: new Date("2025-05-03 20:37:00"),
  }
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
