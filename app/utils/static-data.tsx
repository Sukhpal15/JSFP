import Image from "next/image";
import { Code2, BookOpen, Bug, MessageCircle, ChartNoAxesColumn} from "lucide-react";


export const questions = [
  { id: 1, title: "Print a message", category: "Basics", level: "Easy", description: "Print Hello World in the console.", starter: 'console.log("Hello World");' },
  { id: 2, title: "Swap two variables", category: "Basics", level: "Easy", description: "Swap the values of two variables.", starter: "let a = 5;\nlet b = 10;\n// Write your code" },
  { id: 3, title: "Calculate rectangle area", category: "Basics", level: "Easy", description: "Use the given width and height to calculate and print a rectangle's area.", starter: "const width = 8;\nconst height = 5;\n// Calculate and print the area" },
  { id: 4, title: "Convert minutes to hours", category: "Basics", level: "Easy", description: "Convert a number of minutes into whole hours and leftover minutes, then print both values.", starter: "const totalMinutes = 135;\n// Calculate hours and remaining minutes" },
  { id: 5, title: "Build a greeting", category: "Basics", level: "Easy", description: "Create a greeting using the person's name and print it with a template literal.", starter: 'const name = "Sukhpal";\n// Build and print a greeting' },
  { id: 6, title: "Check even or odd", category: "Conditions", level: "Easy", description: "Check whether a number is even or odd and print the result.", starter: "const num = 7;\n// Check and print even or odd" },
  { id: 7, title: "Find the largest number", category: "Conditions", level: "Easy", description: "Use conditional statements to find the largest among three numbers.", starter: "const a = 10, b = 25, c = 15;\n// Find and print the largest number" },
  { id: 8, title: "Classify a temperature", category: "Conditions", level: "Easy", description: "Print Cold below 15, Mild from 15 through 25, and Hot above 25 degrees.", starter: "const temperature = 22;\n// Classify the temperature" },
  { id: 9, title: "Print numbers from 1 to 10", category: "Loops", level: "Easy", description: "Use a loop to print each number from 1 through 10.", starter: "// Write your loop here" },
  { id: 10, title: "Sum numbers from 1 to 10", category: "Loops", level: "Easy", description: "Use a loop to calculate and print the sum of the numbers from 1 through 10.", starter: "let sum = 0;\n// Add each number to sum\nconsole.log(sum);" },
  { id: 11, title: "Print a multiplication table", category: "Loops", level: "Easy", description: "Print the 7 times table from 7 × 1 through 7 × 10.", starter: "const number = 7;\n// Use a loop to print the table" },
  { id: 12, title: "Find the largest array element", category: "Arrays", level: "Easy", description: "Find and print the largest number in the array without sorting it.", starter: "const numbers = [4, 9, 2, 15, 6];\n// Find the largest number" },
  { id: 13, title: "Remove duplicate values", category: "Arrays", level: "Medium", description: "Create and print a new array that contains each value only once.", starter: "const numbers = [1, 2, 2, 3, 4, 4];\n// Keep only unique values" },
  { id: 14, title: "Keep only even numbers", category: "Arrays", level: "Easy", description: "Make a new array containing only the even numbers, then print it.", starter: "const numbers = [3, 8, 11, 14, 20, 21];\n// Filter the even numbers" },
  { id: 15, title: "Calculate an array average", category: "Arrays", level: "Easy", description: "Calculate and print the average value in the array.", starter: "const scores = [80, 95, 70, 85];\n// Calculate the average score" },
  { id: 16, title: "Reverse a string", category: "Strings", level: "Easy", description: "Reverse the given string and print the result.", starter: 'const text = "javascript";\n// Reverse the string' },
  { id: 17, title: "Count vowels", category: "Strings", level: "Easy", description: "Count the vowels (a, e, i, o, u) in the text, regardless of case.", starter: 'const text = "Hello World";\n// Count the vowels' },
  { id: 18, title: "Check for a palindrome", category: "Strings", level: "Easy", description: "Check whether the text reads the same forward and backward, ignoring letter case.", starter: 'const text = "Level";\n// Check whether it is a palindrome' },
  { id: 19, title: "Capitalize each word", category: "Strings", level: "Medium", description: "Return a version of the sentence where the first letter of every word is uppercase.", starter: 'const sentence = "learning javascript is fun";\n// Capitalize each word' },
  { id: 20, title: "Create an add function", category: "Functions", level: "Easy", description: "Write a function that returns the sum of two numbers, then print its result.", starter: "function add(a, b) {\n  // Return the sum\n}\n\nconsole.log(add(2, 3));" },
  { id: 21, title: "Convert Celsius to Fahrenheit", category: "Functions", level: "Easy", description: "Write a function that converts Celsius to Fahrenheit using (C × 9/5) + 32.", starter: "function toFahrenheit(celsius) {\n  // Return the converted temperature\n}\n\nconsole.log(toFahrenheit(25));" },
  { id: 22, title: "Return the smallest value", category: "Functions", level: "Easy", description: "Write a function that takes an array of numbers and returns its smallest value.", starter: "function findSmallest(numbers) {\n  // Return the smallest number\n}\n\nconsole.log(findSmallest([8, 3, 12, -2]));" },
  { id: 23, title: "Count object properties", category: "Objects", level: "Easy", description: "Count and print how many own properties the user object has.", starter: 'const user = { name: "Divya", age: 23 };\n// Count the properties' },
  { id: 24, title: "Create a full name", category: "Objects", level: "Easy", description: "Use the firstName and lastName properties to print the person's full name.", starter: 'const person = { firstName: "Jayant", lastName: "Dhall" };\n// Build and print the full name' },
  { id: 25, title: "Calculate a shopping total", category: "Objects", level: "Easy", description: "Each item has a price and quantity. Calculate and print the total cost of the order.", starter: "const item = { price: 12, quantity: 4 };\n// Calculate the total cost" },
  { id: 26, title: "Find the most expensive product", category: "Objects", level: "Medium", description: "Find and print the name of the product with the highest price.", starter: 'const products = [{ name: "Pen", price: 2 }, { name: "Book", price: 8 }, { name: "Bag", price: 25 }];\n// Find the most expensive product' },
  { id: 27, title: "FizzBuzz", category: "Logic Building", level: "Medium", description: "For numbers 1–20, print Fizz for multiples of 3, Buzz for multiples of 5, and FizzBuzz for both.", starter: "// Loop from 1 through 20 and print each result" },
  { id: 28, title: "Generate a Fibonacci sequence", category: "Logic Building", level: "Medium", description: "Build and print an array containing the first 8 Fibonacci numbers, starting with 0 and 1.", starter: "const count = 8;\nconst sequence = [0, 1];\n// Build the rest of the sequence" },
  { id: 29, title: "Find the second largest number", category: "Logic Building", level: "Medium", description: "Find the second largest distinct value without sorting the array.", starter: "const numbers = [12, 5, 18, 12, 9, 18, 3];\n// Find the second largest distinct value" },
  { id: 30, title: "Check for a balanced string", category: "Logic Building", level: "Medium", description: "Check whether every opening parenthesis in the string has a matching closing parenthesis in the correct order.", starter: 'const expression = "(a + b) * (c - d)";\n// Check whether parentheses are balanced' },
  { id: 31, title: "Classify a number", category: "Conditions", level: "Easy", description: "Print whether the number is positive, negative, or zero.", starter: "const number = -4;\n// Check the number and print its category" },
  { id: 32, title: "Assign a letter grade", category: "Conditions", level: "Easy", description: "Print A for scores 90+, B for 80–89, C for 70–79, and F for anything lower.", starter: "const score = 84;\n// Use conditions to choose a letter grade" },
  { id: 33, title: "Count down to zero", category: "Loops", level: "Easy", description: "Use a loop to print each number from 5 down to 0.", starter: "// Write a countdown loop" },
  { id: 34, title: "Calculate a factorial", category: "Loops", level: "Medium", description: "Use a loop to calculate and print 6 factorial (6 × 5 × 4 × 3 × 2 × 1).", starter: "const number = 6;\nlet factorial = 1;\n// Multiply the numbers from 1 through number" },
  { id: 35, title: "Count matching array values", category: "Arrays", level: "Easy", description: "Count how many times the target value appears in the array.", starter: "const numbers = [2, 5, 2, 8, 2, 9];\nconst target = 2;\n// Count the matches" },
  { id: 36, title: "Count words in a sentence", category: "Strings", level: "Easy", description: "Count and print the words in the sentence. Words are separated by spaces.", starter: 'const sentence = "Code a little every day";\n// Count the words' },
  { id: 37, title: "Check for a prime number", category: "Functions", level: "Medium", description: "Write a function that returns true if its number is prime and false otherwise.", starter: "function isPrime(number) {\n  // Check whether number has any divisors\n}\n\nconsole.log(isPrime(17));" },
  { id: 38, title: "Format a person's name", category: "Functions", level: "Easy", description: "Write a function that accepts first and last names and returns them as one trimmed full name.", starter: 'function fullName(first, last) {\n  // Return the combined name\n}\n\nconsole.log(fullName("Priya", "Dhiman"));' },
  { id: 39, title: "Update an object property", category: "Objects", level: "Easy", description: "Increase the product's stock by 5, then print the updated product object.", starter: 'const product = { name: "Notebook", stock: 12 };\n// Update stock and print the product' },
  { id: 40, title: "Find a pair that adds to a target", category: "Logic Building", level: "Medium", description: "Find and print two different numbers in the array that add up to the target value.", starter: "const numbers = [4, 7, 1, 9, 3];\nconst target = 10;\n// Find a pair that adds up to target" },
];

export const categories = ["All Questions", "Basics", "Conditions", "Loops", "Arrays", "Strings", "Functions", "Objects", "Logic Building"];
export const navigation = [
  { label: "Practice", icon: Code2 }, { label: "Questions", icon: BookOpen },
  { label: "Bug Tracker", icon: Bug }, { label: "Need Help?", icon: MessageCircle },
  // { label: "Progress", icon: ChartNoAxesColumn },
];

export function CatIllustration({ type = "editor" }: { type?: "logo" | "editor" | "goodCode" | "sleeping" }) {
  const images = {
    logo: "/images/logoCat.png",
    editor: "/images/you-can-do-it-cat.png",
    goodCode: "/images/better-cat.png",
    sleeping: "/images/sleepingCat.png",
  };
  const altText = {
    logo: "Cute ginger kitten", editor: "You can do it ginger kitten",
    goodCode: "Ginger kitten with Good Code Better You", sleeping: "Sleeping ginger kitten",
  };
  return <Image src={images[type]} alt={altText[type]} width={300} height={300} className="h-auto w-full object-contain" />;
}
