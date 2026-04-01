export enum ShowType {
  PLAY = 'Play',
  MUSICAL = 'Musical',
  REVUE = 'Revue',
  CONCERT = 'Concert',
  OPERA = 'Opera',
  OTHER = 'Other',
}

export enum ShowLevel {
  BROADWAY = 'Broadway',
  OFFBROADWAY = 'Off-Broadway',
  OFFOFFBROADWAY = 'Off-Off-Broadway',
  WESTEND = 'West End',
  TOUR = 'Tour',
  REGIONAL = 'Regional',
  OTHER = 'Other',
}

export enum ShowTime {
  MATINEE = 'Matinee',
  EVENING = 'Evening',
}

export interface ShowInfo {
  id?: number;
  show_name?: string;
  venue?: string;
  address?: string;
  website?: string;
  type?: ShowType;
  level?: ShowLevel;
  runtime?: number;
  // poster: image 
  opening_date?: Date;
  closing_date?: Date;
  closed?: boolean;
  display?: boolean;
}

export interface PriceListing {
  id?: number;
  show_id?: ShowInfo;
  show_name?: string;
  site_name?: string;
  price?: number;
  show_date_time?: Date;
  show_time_period?: ShowTime;
  date_of_capture?: Date;
  fixed?: boolean;
  notes?: string;
}
