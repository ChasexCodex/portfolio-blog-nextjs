import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elyas A. Al-Amri</title>
        <meta name="description" content="Elyas A. Al-Amri official website"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div id="app" className="w-screen h-screen bg-gray-100 flex flex-col items-center">
        <nav className="w-full h-8 flex space-x-2 justify-center items-center bg-gray-300">
          <Link href="/">About</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main className="mb-auto container max-w-sm py-4 mx-auto justify-center items-center w-full flex-1">
          <p className="text-2xl text-center italic font-bold my-2">&quot;Computer enthusiast with passion for music and coding&quot;</p>
          <div className="w-full h-40 bg-blue-600 shadow-md border-2 rounded-md">
            <p className="text-gray-200 text-xl p-1 inline-block w-2/3">
              Elyas A. Al-Amri is a technology driven individual, dedicated to solve the hardest problems out there.
            </p>
            <Image className="rounded-full" alt="Profile Image" src="/images/profile.jpg" width={120} height={120}/>
          </div>
        </main>
        <footer className="p-1 w-full justify-center items-center flex space-x-4 bg-gray-400">
          <p>Made by Elyas A. Al-Amri</p>
          <a href="https://vercel.com"
             target="_blank"
             rel="noopener noreferrer">
            Powered by{' '}
            <span className="mt-2">
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
            </span>
          </a>
        </footer>
      </div>
    </>
  )
}
