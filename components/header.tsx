export default function Header() {
  return (
    <header className="bg-[--primary-color] border border-[--secondary-color]">
      <p className="text-center text-sm p-2">The source code for this blog is <a className="hover:text-[--accent-color]" href="https://github.com/adebsa2401/nextjs-blog" target="_blank" rel="noreferrer noopener">available on GitHub</a>.</p>
    </header>
  )
}