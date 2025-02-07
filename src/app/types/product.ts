export interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    productImage: {
      asset: {
        _ref: string;
      };
    };
    tags: string[];
    slug : {
        _type : "slig"
        current : string;
    };
  }
  