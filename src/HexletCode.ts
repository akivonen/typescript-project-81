type Attributes = Record<string, string> & {
  url?: string;
  method?: string;
};

export default class HexletCode {
  static formFor(template: Record<string, string>, attrs: Partial<Attributes> = {}, f: Function) {
    const url = attrs.url ?? '#';
    const method = attrs.method ?? 'post';
    return `<form action="${url}" method="${method}"></form>`;
  }
};