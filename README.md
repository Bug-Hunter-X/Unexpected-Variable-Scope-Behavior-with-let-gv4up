# JavaScript Block Scope Bug
This example demonstrates how JavaScript's block scope, introduced with the `let` keyword, can lead to unexpected behavior if you're not careful.

## The Bug
The `myFunction` function declares a variable `x` with `let`. Inside an `if` block, another variable `x` is declared, shadowing the outer `x`.  The inner `x` is only accessible within the `if` block. Once the `if` block concludes, the outer `x` remains unchanged, leading to a potential misunderstanding of variable scope.

## The Solution
The issue is resolved by being mindful of how `let` creates block scope. If you intend to modify the outer variable, you should not redeclare it within inner blocks.