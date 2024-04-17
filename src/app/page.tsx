import Image from "next/image";
import { db } from "~/server/db";

// mock images urls
const imagesUrls = [
  "https://images.pexels.com/photos/3934192/pexels-photo-3934192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3934192/pexels-photo-3934192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3934192/pexels-photo-3934192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3934192/pexels-photo-3934192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

const images = imagesUrls.map((url, index) => ({
  id: index,
  url: url,
}));

export default async function HomePage() {
  const selectResult = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex h-screen flex-col p-4">
        <h1 className="text-3xl font-bold">Here is the list of posts</h1>
        <ol>
          {selectResult.map((post, index) => {
            return (
              <li key={index}>
                {post.name +
                  " create  at " +
                  post.createdAt.toLocaleTimeString()}
              </li>
            );
          })}
        </ol>

        <h1 className="text-3xl font-bold">Welcome to my Gallery</h1>

        <p className="text-lg">
          This is a simp1111le gallery app built with Next.js and React.js. You
          can view images and their descriptions.
        </p>
        <div className="flex flex-wrap gap-4">
          {images.map((image) => (
            <div key={image.id} className="w-1/6">
              <Image src={image.url} alt="Image" width={400} height={300} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
