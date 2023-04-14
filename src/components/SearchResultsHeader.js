

export default function SearchResultsHeader(props) {
    return (
        <div className="relative bg-gray-50 pt-8 px-4 sm:px-6 lg:px-8 lg:pt-8">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-gray-50 sm:h-2/3" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <p className="font-merriweather text-2xl font-semibold text-gray-900">Recipes to inspire your tastebuds</p>
            <p className="mt-1 text-base text-gray-500">{props.count} results</p>
          </div>
        </div>
      )
}