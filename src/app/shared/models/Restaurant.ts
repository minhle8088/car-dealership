export class Restaurant {    
    id: number;
    name: string;    
    backgroundImageURL: string;
    category: string;
    contact: {
       phone: string;
       formattedPhone: string;
       twitter?: string;
       facebook?: string;
       facebookUsername?: string;
       facebookName?: string;
    };
    location: {
        address: string;
        crossStreet?: string,
        lat: number,
        lng: number,
        postalCode?: string,
        cc: string,
        city: string,
        state: string,
        country: string,
        formattedAddress: [string, string, string]
    }
}