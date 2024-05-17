const generatePasswordRulesDescriptor = require("../index")

describe("Tests", () => {
  it("can generate password rules descriptor", () => {
    const rules = [
      { required: 'upper' },
      { required: 'lower' },
      { required: 'digit' },
      { allowed: '[-().&@?\'#,/"+]' },
      { maxConsecutive: 2 },
      { minLength: 8 },
      { maxLength: 128 }
    ];

    const descriptor = generatePasswordRulesDescriptor(rules);

    expect(descriptor).toBe('required: upper, lower, digit; allowed: [-().&@?\'#,/"+]; max-consecutive: 2; minlength: 8; maxlength: 128;');
  })
})