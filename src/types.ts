export interface PriceOption {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  icon: string;
  title: string;
  description: string;
  pricing: {
    type: 'simple' | 'detailed';
    items?: PriceOption[];
    sections?: PricingSection[];
  };
  buttonText: string;
  whatsappUrl: string;
}

export interface PricingSection {
  title: string;
  note?: string;
  isPremium?: boolean;
  items: PriceOption[];
}
