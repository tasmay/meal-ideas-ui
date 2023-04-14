import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Spinner from '../components/Spinner';
import SearchResults from '../components/SearchResults';
import postsService from '../services/posts';
import categoryService from '../services/categories'

export default function CategoryPage() {
    const [category, setCategory] = useState(null)
    const [searchResults, setSearchResults] = useState(null)
    let { id } = useParams();

    useEffect(() => {
        postsService
            .getByCategory(id)
            .then(obj => {      
                setSearchResults(obj)
            })
        categoryService
            .getById(id)
            .then(obj => {
                setCategory(obj)
            })
      }, [id])

      console.log(category)
      
    return (
        <div>
            <TopBar></TopBar>
            <div className="mx-auto max-w-full h-80">
                <div className="flex items-center relative h-full mx-auto sm:px-6 lg:px-40">
                    <div className="absolute inset-0">
                        <img className="h-full w-full object-cover" src={category?.image_url} alt="" />
                        <div className="absolute inset-0 mix-blend-multiply" aria-hidden="true" />
                    </div>
                </div>
            </div>
            
            <div className="relative mx-auto max-w-full bg-gray-50 pt-8">
                <div className="text-center">
                    <h2 className="font-merriweather text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{category?.name}</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                    {category?.description}
                    </p>
                </div>
                {searchResults ? 
                    <SearchResults data={searchResults}></SearchResults>
                :
                    <div className="mt-8">
                        <Spinner></Spinner>
                    </div>
                }
            </div>
            <Footer></Footer>
        </div>
    )
}