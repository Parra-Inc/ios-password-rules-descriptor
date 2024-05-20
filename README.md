# UITextInputPasswordRules Descriptor Generator

A simple utility for generating the `descriptor` to initialize a `UITextInputPasswordRules` object per Apple's [Customizing Password AutoFill rules](https://developer.apple.com/documentation/security/password_autofill/customizing_password_autofill_rules) documentation. 

Maintained by [Parra](https://parra.io)

## Installation

Run `npm install @parra/ios-password-rules-descriptor`

## Usage

```javascript
const generatePasswordRulesDescriptor = require("@parra/ios-password-rules-descriptor")

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

// required: upper, lower, digit; allowed: [-().&@?\'#,/"+]; max-consecutive: 2; minlength: 8; maxlength: 128;
```

