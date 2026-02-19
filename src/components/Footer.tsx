import { Github } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer data-cy="footer" className="border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">&copy; {year} Lorem Ipsum. Dolor sit amet.</p>
          <div className="flex items-center gap-4">
            <a
              data-cy="footer-github"
              href="https://github.com/uphoffjs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
