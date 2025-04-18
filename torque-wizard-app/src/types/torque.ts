export interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
  items: TorqueSpec[];
}

export interface TorqueSpec {
  id: string;
  categoryId: string;
  subcategoryId: string;
  name: string;
  description: string;
  torqueValue: number;
  unit: 'Nm' | 'ft-lb' | 'in-lb';
  notes?: string;
  lastUpdated: string;
}

export type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ru' | 'ar'; 