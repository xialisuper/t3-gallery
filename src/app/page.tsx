import Image from "next/image";
import { db } from "~/server/db";

export default async function HomePage() {
  // image数据库内容
  const images = await db.query.images.findMany();

  return (
    <main>
      <div className="flex h-screen flex-col p-4">
        <h1 className="text-3xl font-bold">Welcome to my Gallery</h1>

        <p className="text-lg">
          This is a simp1111le gallery app built with Next.js and React.js. You
          can view images and their descriptions.
        </p>
        <div className="flex flex-wrap gap-4">
          {images.map((image) => (
            <div key={image.id} className="flex flex-col items-center gap-2">
              <Image
                src={image.url}
                alt={image.name}
                width={400}
                height={300}
                className="rounded-xl border border-gray-200 p-2"
              />
              <p>{image.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
