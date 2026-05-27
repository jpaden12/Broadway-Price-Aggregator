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
        const listings = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/all-price-listings', {
                    method: "GET", 
                    headers: {
                        "Content-Type": "application/json"
                    }
                }); 
                const result = await response.json();
                console.log(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        }
        listings()
    }, []);
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




    