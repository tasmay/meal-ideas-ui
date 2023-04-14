export default function Testimonials() {
    return (
      <section className="overflow-hidden bg-gray-50 pt-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="font-merriweather text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted By Cooking Enthusiasts All Over The World</h2>
            </div>
          <div className="relative">
            <blockquote className="mt-10">
              <div className="mx-auto max-w-3xl text-center text-xl font-medium leading-9 text-gray-600">
                <p>
                As a busy mom of two young kids, finding delicious and easy-to-make recipes that the whole family will enjoy can be a daunting task. That's why I was so grateful to stumble upon Meal Ideas. I was impressed by the clean and user-friendly design, which made it easy to find exactly what I was looking for. I loved that I could browse recipes by category, from quick and easy meals to special occasion dishes, and filter by dietary preferences like gluten-free and vegetarian. What really sets this website apart, however, is the quality of the recipes themselves. Every recipe I've tried has been not only delicious but also reliable and well-tested.
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">Judith Black</div>
  
                    <svg className="mx-1 hidden h-5 w-5 text-lime-600 md:block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>
  
                    <div className="text-base font-medium text-gray-500">Toronto, Canada</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    )
  }
  