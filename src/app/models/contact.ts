export interface IContact {
      name: string;
      id: string;
      companyName: string;
      isFavorite: false;
      smallImageURL: string;
      largeImageURL: string;
      emailAddress: string;
      birthdate: Date;
      phone: {
        work: string,
        home: string,
        mobile: string
      };
      address: {
        street: string,
        city: string,
        state: string,
        country: string,
        zipCode: string
      };
      selected: boolean;
    }