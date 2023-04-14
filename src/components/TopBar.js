// import mainlogo from '../assets/icons/lid.svg'
import mainlogo from '../assets/img/logo.svg'
import { PencilSquareIcon } from '@heroicons/react/20/solid'


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/about' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Subscribe', href: '/about' },
  ]
  
  export default function TopBar() {
    return (
      <header className="bg-white">
        <nav className="mx-auto max-w-full" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-zinc-200 py-6 px-4 sm:px-6 lg:px-20">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Meal Ideas</span>
                <img className="h-14 w-auto" src={mainlogo} alt="" />
              </a>
              <div className="ml-6 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-sm font-medium text-gray-700 tracking-wider uppercase hover:text-black">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <button
                type="button"
                className="inline-flex items-center border border-transparent bg-lime-600 px-4 py-2 text-xs text-white tracking-wider uppercase shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
              >
              <PencilSquareIcon className="ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Contribute
              </button>
            </div>
          </div>
        </nav>
      </header>
    )
  }
  