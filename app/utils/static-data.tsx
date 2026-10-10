import Image from "next/image";
import { Code2, BookOpen, Bug, MessageCircle, ChartNoAxesColumn} from "lucide-react";


export const questions = [
  { id: 1, title: "Print a message", category: "Basics", level: "Easy", description: "Print Hello World in the console.", starter: 'console.log("Hello World");' },
  { id: 2, title: "Swap two variables", category: "Basics", level: "Easy", description: "Swap the values of two variables.", starter: "let a = 5;\nlet b = 10;\n// Write your code" },
  { id: 3, title: "Check even or odd", category: "Conditions", level: "Easy", description: "Check whether a number is even or odd.", starter: "let num = 7;\n// Write your code" },
  { id: 4, title: "Find the largest number", category: "Conditions", level: "Easy", description: "Find the largest among three numbers.", starter: "let a = 10, b = 25, c = 15;\n// Write your code" },
  { id: 5, title: "Print numbers from 1 to 10", category: "Loops", level: "Easy", description: "Use a loop to print numbers from 1 to 10.", starter: "// Write your loop here" },
  { id: 6, title: "Sum of numbers", category: "Loops", level: "Easy", description: "Calculate the sum of numbers from 1 to 10.", starter: "let sum = 0;\n// Write your loop here" },
  { id: 7, title: "Find the largest array element", category: "Arrays", level: "Easy", description: "Find the largest number in an array.", starter: "const numbers = [4, 9, 2, 15, 6];\n// Write your code" },
  { id: 8, title: "Remove duplicate values", category: "Arrays", level: "Medium", description: "Return an array containing only unique values.", starter: "const numbers = [1, 2, 2, 3, 4, 4];\n// Write your code" },
  { id: 9, title: "Reverse a string", category: "Strings", level: "Easy", description: "Reverse a given string.", starter: 'const text = "javascript";\n// Write your code' },
  { id: 10, title: "Count vowels", category: "Strings", level: "Easy", description: "Count the vowels in a string.", starter: 'const text = "hello world";\n// Write your code' },
  { id: 11, title: "Create a function", category: "Functions", level: "Easy", description: "Create a function that returns the sum of two numbers.", starter: "function add(a, b) {\n  // Write your code\n}\n\nconsole.log(add(2, 3));" },
  { id: 12, title: "Count object properties", category: "Objects", level: "Easy", description: "Count how many properties an object has.", starter: 'const user = { name: "Priya", age: 25 };\n// Write your code' },
  { id: 13, title: "FizzBuzz", category: "Logic Building", level: "Medium", description: "Print Fizz for multiples of 3, Buzz for 5, and FizzBuzz for both.", starter: "// Write your solution" },
];

export const categories = ["All Questions", "Basics", "Conditions", "Loops", "Arrays", "Strings", "Functions", "Objects", "Logic Building"];
export const navigation = [
  { label: "Practice", icon: Code2 }, { label: "Questions", icon: BookOpen },
  { label: "Bug Tracker", icon: Bug }, { label: "Need Help?", icon: MessageCircle },
  { label: "Progress", icon: ChartNoAxesColumn },
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