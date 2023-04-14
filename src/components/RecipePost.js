import { ChevronDoubleLeftIcon } from "@heroicons/react/20/solid"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid"
import { ClockIcon } from "@heroicons/react/24/outline"
import { TagIcon } from "@heroicons/react/24/outline"
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline"
import dayjs from 'dayjs'
import { Link } from "react-router-dom"

const socials = [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
]

export default function RecipePost(props) {
    return (
        <div className="overflow-hidden bg-white">
            <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
                <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
                    {/* Title */}
                    <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                        <div>
                            <h3 className="mt-2 font-merriweather text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">{props.data.title}</h3>
                        </div>
                    </div>
                    {/* Author */}
                    <div className="mt-6 flex items-center">
                            <div className="flex-shrink-0">
                                <a href={props.data.author_url}>
                                <span className="sr-only">{props.data.author_name}</span>
                                <img className="h-10 w-10 rounded-full" src={props.data.author_image} alt="" />
                                </a>
                            </div>
                            <div className="ml-3">
                                <p className="text-xs font-bold tracking-widest uppercase text-gray-900">
                                <a href={props.data.author_url} className="hover:underline">
                                    {props.data.author_name}
                                </a>
                                </p>
                                <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime={props.data.date}>{dayjs(props.data.date).format('MMM DD, YYYY')}</time>
                                </div>
                            </div>
                            <div className="flex items-center ml-4 pl-5 h-full border-l border-gray-300">
                                <p className="text-xs font-bold tracking-widest uppercase text-gray-900">Share: </p>
                                <div className="flex space-x-6 ml-3">
                                    {socials.map((item) => (
                                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                    </div>

                    {/* image and gray dotted bg */}
                    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative lg:col-start-2 lg:row-start-1">
                                <svg
                                className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                                >
                            <defs>
                                <pattern
                                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                                >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                            </svg>
                            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                            <figure>
                                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                <img
                                    className="rounded-lg object-cover object-center shadow-lg"
                                    src={props.data.image_url}
                                    alt={props.data.description}
                                    width={1184}
                                    height={1376}
                                />
                                </div>
                                {/* <figcaption className="mt-3 flex text-sm text-gray-500">
                                <CameraIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                <span className="ml-2">Photograph by Marcus O’Leary</span>
                                </figcaption> */}
                            </figure>
                        </div>
                    </div>

                    {/* Post content */}
                    <div className="mt-8 lg:mt-0">
                        <div className="overflow-hidden bg-lime-50">
                            <div className="px-4 py-5 sm:p-6 lg:grid lg:grid-cols-3 lg:gap-4">
                                    <div className="inline-flex items-center"><ClockIcon className="ml-1 mr-2 h-5 w-5" aria-hidden="true" />{props.data.time} mins</div>
                                    <div className="inline-flex items-center"><TagIcon className="ml-1 mr-2 h-5 w-5" aria-hidden="true" /><Link to={`/category/${props.data.category_id}`} className="hover:underline">{props.data.category}</Link></div>
                                    <div className="inline-flex items-center"><ChatBubbleLeftIcon className="ml-1 mr-2 h-5 w-5" aria-hidden="true" /><Link to={`#`} className="hover:underline">1345 Reviews</Link></div>
                            </div>
                        </div>
                        <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                            <p>{props.data.description}</p>
                        </div>
                        <div className="flex justify-center items-center pt-5">
                            <a href={props.data.url}>
                                <button
                                type="button"
                                className="inline-flex items-center border border-transparent bg-lime-600 px-4 py-2 text-xs text-white tracking-wider uppercase shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                                >
                            View Full Recipe
                            <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}