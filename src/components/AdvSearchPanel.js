import SelectMenu from './SelectMenu'
import Select from "react-tailwindcss-select";
import Toggle from './Toggle'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react';
import { useNavigate, createSearchParams } from "react-router-dom";
import lovsService from '../services/lovs';

const DEFAULT_LIST_OPTIONS = [{
    id: -1,
    name: 'Any',
}]

export default function AdvSearchPanel(props) {
    const [mealsList, setMealsList] = useState(DEFAULT_LIST_OPTIONS)
    const [cuisinesList, setCuisinesList] = useState(DEFAULT_LIST_OPTIONS)
    const [ingredientsList, setIngredientsList] = useState([])
    const [mealValue, setMealValue] = useState(props.searchParams.meal)
    const [cuisineValue, setCuisineValue] = useState(props.searchParams.cuisine)
    const [ingredientsValue, setIngredientsValue] = useState(props.searchParams.ingredients)
    const [sliderValue, setSliderValue] = useState(props.searchParams.time)
    const [veganValue, setVeganValue] = useState(false)
    const [glutenValue, setGlutenValue] = useState(false)
    const [vegetarianValue, setVegetarianValue] = useState(false)
    const [allergyValue, setAllergyValue] = useState(false)

    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault()
        let ingredients = []
        if (ingredientsValue)
          ingredientsValue.map(ing => ingredients.push(ing.label))
        const params = {
            m: mealValue.id,
            c: cuisineValue.id,
            ingredients: ingredients,
            time: sliderValue,
            v: veganValue,
            g: glutenValue,
            veg: vegetarianValue,
            a: allergyValue
        }
        const data = {
            meal: mealValue,
            cuisine: cuisineValue,
            ingredients: ingredientsValue,
            time: sliderValue,
            v: veganValue,
            g: glutenValue,
            veg: vegetarianValue,
            a: allergyValue
        }
        navigate({
            pathname: '/search',
            search: `?${createSearchParams(params)}`,
          }, { state: data});
    }

    const loadMealsList = () => {
      let list = [...DEFAULT_LIST_OPTIONS];
      lovsService.getMealsList().then(res => {
        res.map(obj => list.push({id: obj['meal_id'], name: obj['name']}))
        setMealsList(list)
      })
    }
  
    const loadCuisinesList = () => {
      let list = [...DEFAULT_LIST_OPTIONS];
      lovsService.getCuisinesList().then(res => {
        res.map(obj => list.push({id: obj['cuisine_id'], name: obj['name']}))
        setCuisinesList(list)
      })
    }

    const loadIngredientsList = () => {
        let list = [];
        lovsService.getIngredientsList().then(res => {
          res.map(obj => list.push({value: obj['ingredient_id'], label: obj['name']}))
          setIngredientsList(list)
        })
    }
  
    useEffect(() => {
      loadMealsList()
      loadCuisinesList()
      loadIngredientsList()
    }, []);

    return (
        <div className="mx-auto max-w-full pb-3 border-b border-zinc-200">
            <div className="flex items-center relative h-full mx-auto sm:px-6 lg:px-20">
                <div className="flex flex-row items-stretch justify-center relative w-full bg-white px-4">
                    <div className="p-2 py-5 w-1/6">
                        <SelectMenu val={mealValue} onChange={setMealValue} buttonLabel="Meal" data={mealsList}></SelectMenu>
                    </div>
                    <div className="p-2 py-5 w-1/6">
                        <SelectMenu val={cuisineValue} onChange={setCuisineValue} buttonLabel="Cuisine" data={cuisinesList}></SelectMenu>
                    </div>
                    <div className="p-2 py-5 w-2/6">
                        <label htmlFor="Ingredients" className="block text-xs font-medium tracking-wider uppercase text-gray-700">
                            Ingredients
                        </label>
                        <div className="mt-1 border border-gray-300 bg-white shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm">
                            <Select
                                primaryColor={"lime"}
                                isMultiple={true}
                                isSearchable={true}
                                value={ingredientsValue}
                                onChange={setIngredientsValue}
                                options={ingredientsList}
                                placeholder={"Type ingredients..."}
                                searchInputPlaceholder={"Search..."}
                                classNames={{
                                    menuButton: () => "flex border-none rounded-none transition-all duration-300"
                                }}
                            />
                        </div>
                    </div>
                    <div className="p-2 py-5 w-1/6">
                        <span className="inline-flex">
                            <label className="block text-xs tracking-wider uppercase font-medium text-gray-700">Time</label>
                            <label className="ml-2 text-xs font-medium text-gray-700">(approx. {sliderValue} minutes)</label>
                        </span>
                        <div className="relative mt-1">
                            <input value={sliderValue} onChange={(e) => {setSliderValue(e.target.value)}} type="range" className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700" min="0" max="100" step="10" id="customRange3" />
                        </div>
                    </div>
                    <div className="w-1/6 pt-9 pl-4">
                        <button onClick={search} type="submit" className="inline-flex items-center rounded-full border border-transparent bg-lime-600 p-2 text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2">
                            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center relative h-full mx-auto sm:px-6 lg:px-20 space-x-8 mx-10">
                <Toggle label="Vegan Friendly" onChange={setVeganValue}></Toggle>
                <Toggle label="Gluten Free" onChange={setGlutenValue}></Toggle>
                <Toggle label="Vegetarian" onChange={setVegetarianValue}></Toggle>
                <Toggle label="Allergy Friendly" onChange={setAllergyValue}></Toggle>
            </div>
        </div>
    )
}