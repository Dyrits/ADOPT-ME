import { useState, useEffect } from "react";

const localCache = {};

export default function useBreeds(animal) {
    const [breeds, setBreeds] = useState([]);
    const [status, setStatus] = useState("Unloaded");

    useEffect(() => {
        console.log(animal);
        if (!animal) { setBreeds([]) }
        else if (localCache[animal]) { setBreeds(localCache[animal]); }
        else { requestBreeds().then(() => { console.info("Breeds have been loaded."); }); }

        async function requestBreeds() {
            setBreeds([]);
            setStatus("Loading");
            const response = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            console.log(response);
            const { breeds } = await response.json();
            console.log(breeds);
            localCache[animal] = breeds || [];
            setBreeds(localCache[animal]);
            setStatus("Loaded");
        }
    }, [animal]);

    return [breeds, status];
}