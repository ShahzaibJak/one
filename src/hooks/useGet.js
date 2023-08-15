import axios from "axios";
import { isError, useQuery } from "@tanstack/react-query";


export function useGet(url) {
    const { data, isLoading, error, refetch } = useQuery(["CATFACT"], async () => {
        return axios.get(url).then((res) => res.data)
    })

    return {data, refetch, isLoading, error}
}