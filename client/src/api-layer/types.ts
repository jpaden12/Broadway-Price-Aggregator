

export interface ShowInfo {
    id: number;
    show_name: string; 
    venue: string;
    address: string;
    website: string; 
    type: ShowType;
    level: ShowLevel;
    runtime: number; 
    // poster: image 
    opening_date: Date; 
    closing_date: Date; 
    closed?: boolean; 
    display: boolean; 
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