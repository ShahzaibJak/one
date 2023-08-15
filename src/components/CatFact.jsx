
import { useGet } from "../hooks/useGet";

export function CatFact() {
    const {data, refetch, isLoading} = useGet("https://catfact.ninja/fact");
    return (
        <div>
            <button onClick={refetch}>Generate Fact</button>
            <p>{isLoading? <b>Loading....</b> : data?.fact}</p>
            <br></br><br></br>
        </div>
    )
}