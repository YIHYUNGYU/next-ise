import Link from "next/link";

export default function Home() {
  return (
      <div className='justify-center items-center'>
          <div className="bg-fuchsia-100">
              <h1 className="text-6xl font-bold underline">
                  Hello world!
              </h1>
              <div className='my-3 flex-col justify-around'>
                  <div><Link href='/post'>Post</Link></div>
                  <div><Link href='/post/create'>Create</Link></div>
              </div>
          </div>
      </div>
  )
}