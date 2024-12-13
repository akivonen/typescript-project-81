import { describe, expect, test } from 'vitest';
import Tag from "../elements/Tag";

describe('Tag tests', () => {
  test('br', () => {
    expect(new Tag("br").toString()).toBe('<br>');
  });
  test('input', () => {
    expect(new Tag("input", { type: "submit", value: "Save" }).toString())
      .toBe('<input type="submit" value="Save">');
  });
  test('label', () => {
    expect(new Tag("label", {}, "Email").toString())
      .toBe('<label>Email</label>');
  });
  test('label for', () => {
    expect(new Tag("label", { for: "email" }, "Email").toString())
      .toBe('<label for="email">Email</label>');
  });
  test('div', () => {
    expect(new Tag("div").toString()).toBe('<div></div>');
  });
})
