import Footer from '../components/Footer';
import TopBar from '../components/TopBar';

export default function About() {
    return (
        <div>
        <TopBar></TopBar>
        <div className="overflow-hidden bg-white py-32">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is Meal Ideas?</h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                Meal Ideas is a user-friendly platform that offers meal suggestions based on various search parameters such as preferred cuisine, dietary restrictions, available ingredients, and desired cooking time. The recipes featured on the website are a curated collection from creators all over the world, ensuring a diverse and exciting selection of meal ideas. Users can easily find recipe ideas that match their preferences and easily filter through the options to narrow down their choices.
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                Whether you're a beginner cook or a seasoned chef, this website provides a convenient way to discover new and exciting meal ideas that cater to your specific needs and tastes.
                </p>
                <div className="mt-10 flex">
                    <a
                    href="#"
                    className="bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                    >
                    Get Started <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
                </div>
                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                    <img
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                        src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                    </div>
                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                        src="https://images.unsplash.com/photo-1606787620484-4561d4d20907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                    </div>
                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                        src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}