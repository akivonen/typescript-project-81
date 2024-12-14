### Hexlet tests and linter status:
[![Maintainability](https://api.codeclimate.com/v1/badges/501972a1c616dab4aa66/maintainability)](https://codeclimate.com/github/akivonen/typescript-project-81/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/501972a1c616dab4aa66/test_coverage)](https://codeclimate.com/github/akivonen/typescript-project-81/test_coverage)

### Form Generator
### Description
This project is a Form Generator library that simplifies creating forms for website templates. It significantly reduces the code required for form descriptions by automating error handling and processing various form controls.
### Stack
- TypeScript
- ESLint
- Vitest
### Learned Skills
- Environment Setup with TypeScript: Installing and configuring the TypeScript compiler and related tools.
- Test-Driven Development (TDD): Writing tests before implementation to ensure code quality and reliability.
- Object-Oriented Programming (OOP): Applying OOP principles in the context of TypeScript.
- Code Organization and Architecture: Structuring code for maintainability and scalability.

Example usage:

```
const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('name');
      f.input('job', { as: 'textarea' });
      f.submit('Wow');
    });

console.log(form);

/* <form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea><input type="submit" value="Wow"></form> */
```