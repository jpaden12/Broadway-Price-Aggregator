

export interface ShowInfo {
    id: number;
    name: string; 
    venue: string;
    website: string; 
    type: ShowType;
    runtime: number; 
    // poster: image 
    opening_date: Date; 
    closing_date: Date; 
    closed: boolean; 
}

export interface ShowPrice {
    id: number; 
    showName: string; 
    websites: string[]; 
    type: ShowType;
    lastUpdated: Date; 
}

export interface PriceListing {
    id: number; 
    showName: string; 
    siteName: string; 
    price: number; 
    date: Date; 
    time: number;
    showTimePeriod: ShowTime;
    dateOfCapture: Date;
    //fixed: enum 

}

export enum ShowType {
    PLAY = "Play", 
    MUSICAL = "Musical", 
    REVUE = "Revue", 
    CONCERT = "Concert", 
    OPERA = "Opera", 
    OTHER = "Other"
}

export enum ShowLevel {
    BROADWAY = "Broadway", 
    OFFBROADWAY = "Off-Broadway",
    OFFOFFBROADWAY = "Off-Off-Broadway",
    WESTEND = "West End",
    TOUR = "Tour",
    REGIONAL = "Regional",
    OTHER = "Other"
}

export enum ShowTime {
    MATINEE = "Matinee", 
    EVENING = "Evening"
}

export interface DummyShow {
    name: string,
    type: string
}