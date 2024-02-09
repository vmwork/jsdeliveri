interface Ilinks {
  self: string;
  bandwidth: string;
}

export interface Ipackadge {
  type: string;
  name: string;
  hits: string;
  bandwidth: number;
  prev?: Array;
  links: Array<Ilinks>;
}
