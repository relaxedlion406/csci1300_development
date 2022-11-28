import { useEffect } from "react";

function Sort({filted, setFiltered}) {
    useEffect(() => {
       setFiltered(filted)
    }, [])

    function handleSort() {
        const sortedData = [...filted].sort((a, b) => {
            return a.name > b.name ? 1 : -1
        })
        setFiltered(sortedData)
    }
    return (
        <button onClick={handleSort} id="sort-a-z">Sort A-Z</button>
    )
}

export default Sort;