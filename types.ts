export enum ProductType {
  PUERTA_PRINCIPAL = 'PUERTA_PRINCIPAL',
  CONTRAPLACADA = 'CONTRAPLACADA', // Renamed from CONTRAPLACADA_SIMPLE
  CONTRAPLACADA_REFORZADA = 'CONTRAPLACADA_REFORZADA',
  PORTON = 'PORTON',
  PERSONALIZADO = 'PERSONALIZADO'
}

export enum WoodType {
  CEDRO = 'CEDRO',
  TORNILLO = 'TORNILLO',
  CACHIMBO = 'CACHIMBO'
}

export enum FinishType {
  LACA = 'LACA',
  DULLSEALER = 'DULLSEALER',
  DD = 'DD',
  BARNIZ_MARINO = 'BARNIZ_MARINO',
  VARATHANE = 'VARATHANE',
  PINTADO = 'PINTADO' // Enamel/Solid color
}

export enum MoldingType {
  NINGUNO = 'NINGUNO',
  JAMBA = 'JAMBA',
  RODON = 'RODON'
}

export interface QuoteItem {
  id: string;
  type: ProductType;
  name: string; 
  quantity: number;
  
  // Dimensions
  width: number; // meters
  height: number; // meters
  
  // Specs
  wood?: WoodType;
  finish?: FinishType;
  
  // Frame
  frameDepth: number; // The raw value entered (variable part)
  frameUnit: 'cm' | 'in'; // Unit entered
  
  // Extras
  includeInstallation: boolean;
  moldingOuter: MoldingType; // Cara 1
  moldingInner: MoldingType; // Cara 2
  
  // Custom Item specific
  customPrice?: number;
  
  // Calculated values
  unitPrice: number;
  totalPrice: number;
  details: string[]; // Breakdown of costs
}