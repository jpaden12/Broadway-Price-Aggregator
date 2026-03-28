import { useEffect } from "react";
import type { PriceListing, ShowInfo } from "./types";


// Default: all sites, all shows 
// GET /PriceListingsMain/shows=a,b,c&sites=1,2,3
export async function fetchPriceListings(shows: string[], sites: string[]): Promise<PriceListing[]> {
    const res: Response = await fetch('', {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: new URLSearchParams({ username: "example"}),
    }); 
}

export async function getListings() {
    useEffect(() => {
        fetch("http://localhost:3000/api/GetAllShows")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
    });
}



async function getCheapestPrice(showId: string): Promise<PriceListing[]> {
    const res: Response = await fetch('', {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        },
        body: "{}"
    });
}




    