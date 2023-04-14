import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom'
import TopBar from '../components/TopBar';
import AdvSearchPanel from '../components/AdvSearchPanel';
import SearchResultsHeader from '../components/SearchResultsHeader';
import SearchResults from '../components/SearchResults';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import postsService from '../services/posts';

export default function SearchResultsPage() {
    const [urlParams] = useSearchParams()
    const location = useLocation()
    const [searchResults, setSearchResults] = useState(null)
    const searchParams = location.state

    useEffect(() => {
      let params = {};

      if (urlParams.has("m")) {
        params["m"] = urlParams.get("m");
      }

      if (urlParams.has("c")) {
        params["c"] = urlParams.get("c");
      }

      if (urlParams.has("ingredients")) {
        params["ingredients"] = urlParams.getAll("ingredients");
      }

      if (urlParams.has("time")) {
        params["time"] = urlParams.get("time");
      }

      if (urlParams.has("v")) {
        params["v"] = urlParams.get("v");
      }

      if (urlParams.has("g")) {
        params["g"] = urlParams.get("g");
      }

      if (urlParams.has("veg")) {
        params["veg"] = urlParams.get("veg");
      }

      if (urlParams.has("a")) {
        params["a"] = urlParams.get("a");
      }

      postsService
        .search(params)
        .then(obj => {      
            setSearchResults(obj)
        })
      }, [urlParams]);

    return (
        <div>
            <TopBar></TopBar>
            <AdvSearchPanel searchParams={searchParams}></AdvSearchPanel>
            {searchResults ?
              <div>
                <SearchResultsHeader count={searchResults.length}></SearchResultsHeader>
                <SearchResults data={searchResults}></SearchResults>
              </div>
            : 
              <div className="mt-8">
                <Spinner></Spinner>
              </div>
            }
            <Footer></Footer>
        </div>
    )
}