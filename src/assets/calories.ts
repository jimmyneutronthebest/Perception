import type { BaseItem } from '../types';

export interface FoodItem extends BaseItem {
  id: string;
  name: string;
  descriptor: string;
  category: 'fastfood' | 'restaurant' | 'breakfast' | 'drinks' | 'snacks';
  calories: number;
  source: string;
  imageKeyword: string;
  fact: string;
}

export const calorieItems: FoodItem[] = [
  { id: 'bigmac', name: 'Big Mac', descriptor: 'Standard, no modifications', category: 'fastfood', calories: 550, source: 'https://www.mcdonalds.com/us/en-us/product/big-mac.html', imageKeyword: 'big+mac+burger', difficulty: 1, fact: 'McDonald\'s sells millions of Big Macs daily.' },
  { id: 'mcfries', name: 'McDonald\'s Large Fries', descriptor: 'Large size', category: 'fastfood', calories: 490, source: 'https://www.mcdonalds.com/us/en-us/product/large-french-fries.html', imageKeyword: 'french+fries', difficulty: 1, fact: 'Large fries can outcalorie some burgers.' },
  { id: 'caesar', name: 'Caesar Salad', descriptor: 'With dressing and croutons', category: 'restaurant', calories: 470, source: 'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172059/nutrients', imageKeyword: 'caesar+salad', difficulty: 2, fact: 'Caesar salad was created in Tijuana.' },
  { id: 'padthai', name: 'Pad Thai', descriptor: 'Restaurant portion with chicken', category: 'restaurant', calories: 838, source: 'https://fdc.nal.usda.gov/fdc-app.html#/food-details/782198/nutrients', imageKeyword: 'pad+thai+noodles', difficulty: 2, fact: 'Portion size is the big calorie swing.' },
  { id: 'sweetgreen', name: 'Sweetgreen Chicken Pesto Parm', descriptor: 'Full size, standard build', category: 'restaurant', calories: 1010, source: 'https://www.sweetgreen.com/menu', imageKeyword: 'gourmet+salad+bowl', difficulty: 3, fact: 'This salad can beat fast-food burgers in calories.' },
  { id: 'bubbletea', name: 'Taro Bubble Tea', descriptor: '16 oz with tapioca', category: 'drinks', calories: 430, source: 'https://fdc.nal.usda.gov', imageKeyword: 'bubble+tea+taro', difficulty: 3, fact: 'The tapioca pearls add a lot of calories.' },
];
