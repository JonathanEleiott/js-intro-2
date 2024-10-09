# JS Intro

## General JS Rules

- JavaScript is not the same as Java
- script tag - link JS to an HTML file
- alert - pop up for users
- console.log - used by devs for debugging
- comment - lines of code that won't run
- pseudocode - writing a step by step process in plain english
- variables - placeholders for values
- data types
  - number - strictly numbers
  - string - any character within double quotes, single quotes or back-ticks
  - boolean - true or false
  - null - absolutely nothing
  - undefined - variable that has a name, but not a value yet
  - object - data storage in a key/value

- declaring a variable (be a good dev)
  - use camel case
  - be descriptive
  - const - variables that don't change (ALWAYS start off your variables as a const)
  - let - variables that change
  - var - DO NOT USE (old syntax)

## Data Type Details

- Numbers
  - mathematical operators
    - \+ -> add
    - \- -> subtract
    - \* -> multiply
    - / -> divide
    - % -> modulus
- Strings
  - concatenation - bringing two things together
    - use the + symbol between two strings
    - template literals -> back-ticks (variable => ${variableName}, no need for a +)
  - typeof -> returns the data type as a word (string)

## Logical operators - always come out as a boolean (true or false)

- && -> and (means both are true)
- || -> or (at least one is true)
- ! -> not/bang (opposite of whatever it is describing)

## Comparison Operators - always comes out as a boolean (true or false)

- == -> loosely equals (DO NOT USE)
- === -> strictly equals (checks data type AND value)
- != -> loosely does not equal (DO NOT USE)
- !== -> strictly does not equal
- \> -> greater than
- < -> less than
- \>= -> greater than or equal to
- <= -> less than or equal to
