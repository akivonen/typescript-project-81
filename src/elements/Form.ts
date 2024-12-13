import Tag from "./Tag";
import Input from "./Input";
import Textarea from "./Textarea";
import Label from "./Label";
import { Template, Attributes, Field } from "../types";

export default class Form extends Tag {
  private template: Template;
  private inputs: Field[];
  private defaultAttributes: Attributes = {
    method: 'post',
    action: '#',
  };
  constructor(template: Record<string, string>, attributes: Attributes | {}) {
    super('form');
    this.attributes = { ...this.defaultAttributes, ...attributes };
    this.template = template;
    this.inputs = [];
  }

  public input(fieldName: string, attrs?: Attributes): void {
    if (!Object.hasOwn(this.template, fieldName)) {
      throw new Error(`Error: Field '${fieldName}' does not exist in the template.`);
    }
    const field = this.createInput(
      { name: fieldName, value: this.template[fieldName], ...attrs },
    )
    this.inputs.push(field);
  }

  public submit(value?: string, attributes?: Attributes) {
    const submitAttributes = {
      value: value ?? 'Save',
      type: 'submit',
      ...attributes,
    };
    const submit = new Input(submitAttributes);
    this.inputs.push(submit);
  }

  public label(fieldName: string, attributes?: Attributes) {
    const label = new Label({for: fieldName, ...attributes});
    return label;
  }

  public createInput(attrs: Attributes): Field {
    if (Object.hasOwn(attrs, 'as') && attrs.as === 'textarea') {
      const { as, ...textAreaAttrs } = attrs;
      return new Textarea(textAreaAttrs);
    }
    return new Input(attrs);
  }

  public inputsToString() : string {
    const inputsStr = this.inputs.reduce((inputsStr, currInput) => {
      if(currInput.attributes.type === 'submit') {
        return inputsStr += currInput.toString();
      }
      return inputsStr += `${this.label(currInput.attributes.name ?? '').toString()}${currInput.toString()}`
    }, '')
    return inputsStr;
  }

  public toString(): string {
    this.children = this.inputsToString();
    return super.toString();
  }
}