# MongoDB $inc Operator Type Error
This example demonstrates an error that can occur when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numerical field by a specified value. However, if you provide a string value to the `$inc` operator, it will not perform the intended numerical increment, which can lead to unexpected results and debugging issues.

## Bug
The original code incorrectly provides a string value to the `$inc` operator, leading to an unexpected behavior.  The correct approach is to ensure that the value being incremented is a number.

## Solution
The solution demonstrates the correct usage of the `$inc` operator by providing a numerical value (an integer) instead of a string.  This fixes the error and ensures proper numerical increment.
