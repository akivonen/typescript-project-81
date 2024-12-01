import { expect, test } from 'vitest';
import HexletCode from "../HexletCode";

const template = { name: 'rob', job: 'hexlet', gender: 'm' };
test('br', () => {
  const form = HexletCode.formFor(template, {}, () => {});
  expect(form).toBe('<form action="#" method="post"></form>');
});
test('br', () => {
  const form = HexletCode.formFor(template, {url: '/users'}, () => {});
  expect(form).toBe('<form action="/users" method="post"></form>');
});