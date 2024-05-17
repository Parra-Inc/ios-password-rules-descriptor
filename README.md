# UITextInputPasswordRules Descriptor Generator

A simple utility for generating the `descriptor` to initialize a `UITextInputPasswordRules` object per Apple's [Customizing Password AutoFill rules](https://developer.apple.com/documentation/security/password_autofill/customizing_password_autofill_rules) documentation.


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
  { minLength: 8 }
];

const descriptor = generatePasswordRulesDescriptor(rules);
```

