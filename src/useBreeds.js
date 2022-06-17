import { useState, useEffect } from "react";

const localCache = {};

export default function useBreeds(animal) {
    const [breeds, setBreeds] = useState([]);
    const [status, setStatus] = useState("Unloaded");

    useEffect(() => {
        if (!animal) { setBreeds([]) }
        else if (localCache[animal]) { setBreeds(localCache[animal]); }
        else { requestBreeds().then(() => { console.info("Breeds have been loaded."); }); }

        async function requestBreeds(animal) {
            setBreeds([]);
            setStatus("Loading");
            const response = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const { breeds } = await response.json();
            localCache[animal] = breeds || [];
            setBreeds(localCache[animal]);
            setStatus("Loaded");
        }
    }, [animal]);

    return [breeds, status];
}