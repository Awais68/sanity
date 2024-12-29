import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { map } from "sanity/migrate";

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'test']{
  name, 
  "imageUrl": image.asset->url
}`);
  return fetchData;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Sanity CMS Control Management System</h1>
      {data.map((val: any, i: number) => {
        return (
          <>
            <div key={i}>
              <h1>{val.name}</h1>
              <Image
                src={val.imageUrl}
                alt="atma ram"
                width={500}
                height={500}
              />
            </div>
          </>
        );
      })}
    </main>
  );
}
