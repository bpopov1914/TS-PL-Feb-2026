
  interface ItemDetails {
    name: string;
    price: number;
    currency: string;
    price_for_quantity: number;
    quantity_unit: string;
    is_limited: boolean;
    catalog_number: string;
    outside_id: number;
    name_en: string;
    tags: string[];
  }

export { ItemDetails };