interface Ilinks {
  self: string;
  bandwidth: string;
  versions: string;
}

interface Itags {
  latest: string;
}
interface IprevVersion {
  bandwidth: number;
  hits: number;
}

export interface Ipackadge {
  type: string;
  name: string;
  hits: number;
  bandwidth: number;
  tags: Itags;
  prev?: IprevVersion;
  links: Ilinks;
}
[];
