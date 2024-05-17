/**
 * Constructs a password rules descriptor from an array of rule objects.
 *
 * @param {Array} rules - An array of rule objects.
 * @returns {string} The constructed password rules descriptor.
 * @example
 * const rules = [
 *  { required: 'upper' },
 *  { required: 'lower' },
 *  { required: 'digit' },
 *  { allowed: '[-().&@?\'#,/"+]' },
 *  { maxConsecutive: 2 },
 *  { minLength: 8 }
 *  { maxLength: 128 }
 * ];
 * 
 * const descriptor = generatePasswordRulesDescriptor(rules);
 * 
 * console.log(descriptor);
 * 
 * // expected output: 'required: upper, lower, digit; allowed: [-().&@?\'#,/"+]; max-consecutive: 2; minlength: 8; maxlength: 128;'
 */
module.exports = (rules) => {
  let requiredRulesSet = new Set();
  let allowedRulesSet = new Set();
  let maxConsecutive = null;
  let minLength = null;
  let maxLength = null;

  // Process each rule object
  rules.forEach(rule => {
    if (rule.required) {
      requiredRulesSet.add(rule.required);
    }
    if (rule.allowed) {
      allowedRulesSet.add(rule.allowed);
    }
    if (rule.maxConsecutive !== undefined) {
      if (maxConsecutive === null || rule.maxConsecutive < maxConsecutive) {
        maxConsecutive = rule.maxConsecutive;
      }
    }
    if (rule.minLength !== undefined) {
      minLength = rule.minLength; // Overwrite minLength if provided
    }

    if (rule.maxLength !== undefined) {
      maxLength = rule.maxLength; // Overwrite maxLength if provided
    }
  });

  const allowedRules = Array.from(allowedRulesSet);
  const requiredRules = Array.from(requiredRulesSet);

  // Construct the descriptor string
  let descriptorParts = [];

  if (requiredRules.length > 0) {
    descriptorParts.push(`required: ${requiredRules.join(', ')};`);
  }
  if (allowedRules.length > 0) {
    descriptorParts.push(`allowed: ${allowedRules.join(', ')};`);
  }
  if (maxConsecutive !== null) {
    descriptorParts.push(`max-consecutive: ${maxConsecutive};`);
  }
  if (minLength !== null) {
    descriptorParts.push(`minlength: ${minLength};`);
  }
  if (maxLength !== null) {
    descriptorParts.push(`maxlength: ${maxLength};`);
  }

  return descriptorParts.join(' ');
}
