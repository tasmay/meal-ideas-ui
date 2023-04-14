// components
import Spinner from '../components/Spinner'
import RecipeCard from './RecipeCard';
// services
import postsService from '../services/posts';
import { useState, useEffect } from 'react';
  
export default function FeatureSection() {

    const [featuredPosts, setFeaturedPosts] = useState(null)

    useEffect(() => {
      postsService
        .getFeatured()
        .then(obj => {
          setFeaturedPosts(obj)
        })
    }, [])
    
    return (
      <div className="relative bg-gray-50 px-4 pt-16 pb-16 sm:px-6 lg:px-8 lg:pt-16 lg:pb-16">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-gray-50 sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-merriweather text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Browse Through Curated Recipes From Our Collection</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Shared by billions of chefs and creators all over the world, these tried and tested recipes are sure to bring joy to your plate!
            </p>
          </div>
          {featuredPosts ?
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <RecipeCard key={post.id} post={post} />
              ))}
            </div>
            : 
              <div className="mt-8">
                <Spinner></Spinner>
              </div>
          }
        </div>
      </div>
    )
  }
  