import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import postsService from '../services/posts';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import RecipePost from '../components/RecipePost';
import Spinner from '../components/Spinner';

export default function RecipePage() {
    const [recipe, setRecipe] = useState(null)
    let { id } = useParams();

    useEffect(() => {
        postsService
            .getById(id)
            .then(obj => {      
                setRecipe(obj)
            })
      }, [id])

    return (
        <div>
            <TopBar></TopBar>
            {recipe === null ? (
                <div className="mt-8">
                    <Spinner></Spinner>
                </div>
            ) : (
                <RecipePost data={recipe}></RecipePost>
            )}
            <Footer></Footer>
        </div>
    )
}