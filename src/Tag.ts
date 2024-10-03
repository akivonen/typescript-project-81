export default class Tag {
  private name: string;
  private attributes: Record<string, string | number>;
  private children: string | number;
  private isSingleTag: boolean;
  private singleTags: string[] = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'source',
  ];

  constructor(name: string, attributes?: Record<string, string | number>, children?: string | number) {
    this.name = name;
    this.attributes = attributes ?? {};
    this.children = children ?? '';
    this.isSingleTag = this.singleTags.includes(name);
  };

  attrsToString() {
    return Object.entries(this.attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
  }

  toString() {
    return this.isSingleTag 
      ? `<${this.name}${this.attrsToString()}>`
      : `<${this.name}${this.attrsToString()}>${this.children}</${this.name}>`; 
  };
}