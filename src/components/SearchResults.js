import RecipeCard from './RecipeCard'

export default function SearchResults({ data }) {
    return (
        <div className="relative bg-gray-50 px-4 pt-4 pb-16 sm:px-6 lg:px-8 lg:pb-16">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-gray-50 sm:h-2/3" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {data.map((post) => (
                <RecipeCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      )
}