
export interface IArguments {
  name?: string,
  franchise?: string,
  type?: string,
  power?: string,
  description?: string
}

export interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

export interface INode {
  name: string,
  children?: INode[];
}
