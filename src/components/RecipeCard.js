import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

export default function RecipeCard({ post }) {
    return (
        <div key={post.id} className="flex flex-col overflow-hidden shadow-lg">
            <div className="flex-shrink-0">
              <Link to={`/recipe/${post.id}`}>
                <img className="h-48 w-full object-cover" src={post.image_url} alt="" />
              </Link>
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                    <p className="text-sm tracking-wider uppercase font-medium text-lime-600">
                      <Link to={`/category/${post.category_id}`} className="hover:underline">{post.category}</Link>
                    </p>
                    <Link to={`/recipe/${post.id}`} className="mt-2 block">
                      <p className="font-merriweather text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author_url}>
                        <span className="sr-only">{post.author_name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author_image} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                        <p className="text-xs tracking-wider uppercase font-medium text-gray-900">
                            <a href={post.author_url} className="hover:underline">
                            {post.author_name}
                            </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={post.date}>{dayjs(post.date).format('MMM DD, YYYY')}</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}