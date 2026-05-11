// npx ts-node typescript/conditional-statements/ternary.operator.ts

// The conditional operator is a shorthand for writing conditional if...else statements.
// It is called a ternary operator because it takes three operands.

// Syntax
// condition ? expression1 : expression2;

// Parameter	Description
// condition 	Required. The condition to be tested. An expression that evaluates to true or false.
// ? 	        Required. The operator separating the condition from the expressions.
// expression1 	Required. The value to return if the condition is true.
// : 	        Required. The operator separating the expressions.
// expression2 	Required. The value to return if the condition is false.

// Example:
const age: number = 20;
let text: string = age < 18 ? 'Minor' : 'Adult';
console.log('Ternary Operator Result:', text);

// The above example is equivalent to the following if...else statement:
if (age < 18) {
  text = 'Minor';
} else {
  text = 'Adult';
}
console.log('If...Else Statement Result:', text);

// Example 2:
const isMember: boolean = false;
const discount: number = isMember ? 0.2 : 0;
console.log('Discount:', discount);
