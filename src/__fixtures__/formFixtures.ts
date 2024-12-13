const formFixtures = {
  test1: `<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea name="job" cols="20" rows="40">hexlet</textarea></form>`,
  test2: `<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob" class="user-input"><label for="job">Job</label><input name="job" type="text" value="hexlet"></form>`,
  test3: `<form action="#" method="post"><label for="job">Job</label><textarea name="job" cols="20" rows="40">hexlet</textarea></form>`,
  test4: `<form action="#" method="post"><label for="job">Job</label><textarea name="job" cols="50" rows="50">hexlet</textarea></form>`,
  test5: `Error: Field 'age' does not exist in the template.`,
  test6: `<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea name="job" cols="20" rows="40">hexlet</textarea><input type="submit" value="Save"></form>`,
  test7: `<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea name="job" cols="20" rows="40">hexlet</textarea><input type="submit" value="Wow"></form>`,
};

export default formFixtures;

