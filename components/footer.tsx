export default function Footer() {
  return (
    <footer className="bg-[--primary-color] py-28 border border-[--secondary-color]">
      <div className="container flex flex-col md:flex-row gap-10 items-center justify-center mx-auto px-5">
        <div className="text-[2.25rem]/[1.2] tracking-tighter text-center md:w-1/2 md:text-[2.5rem] md:text-left">
          <h4>Statically Generated with Next.js.</h4>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-6 pl-4 md:w-1/2">
          <a className="text-white hover:text-black bg-black hover:bg-white font-bold py-3 px-12 border border-black" href="https://nextjs.org/docs/basic-features/pages" target="_blank" rel="noreferrer noopener">Read Documentation</a>
          <a className="font-bold mx-3" href="https://github.com/adebsa2401/nextjs-blog" target="_blank" rel="noreferrer noopener">View on GitHub</a>
        </div>
      </div>
    </footer>
  )
}