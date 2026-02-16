export interface KogiMineral {
  name: string;
  symbol?: string;
  depth?: string;
}

export const kogiMinerals: KogiMineral[] = [
  { name: "Gold (Au)", symbol: "Au", depth: "Alluvial & Primary" },
  { name: "Silver (Ag)", symbol: "Ag" },
  { name: "Iron Ore (Fe)", symbol: "Fe" },
  { name: "Tantalite" },
  { name: "Columbite" },
  { name: "Feldspar" },
  { name: "Mica" },
  { name: "Quartz" },
  { name: "Tourmaline" },
  { name: "Garnet" },
  { name: "Kaolin" },
  { name: "Clay" },
  { name: "Granite" },
  { name: "Laterite" },
];
