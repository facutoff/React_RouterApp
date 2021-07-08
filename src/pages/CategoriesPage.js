import { useLocation, useHistory } from "react-router"
export default function CategoriesPage() {
    const location = useLocation();
    const history = useHistory();
    const query = new URLSearchParams(location.search);
    const skip = parseInt(query.get("skip") )|| 0
    const limit = parseInt(query.get("limit") )|| 15

    const handleNext = () => {
        console.log('Next')
        query.set("skip",skip+limit)
        history.push({search: query.toString()})
    }

    return (
        <div>
            <h1>CategoriesPage</h1>
            <h3>Skip: {skip}</h3>
            <h3>Limit: {limit}</h3>
            <button onClick={handleNext} > Next </button>
        </div>
    )
}
