function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
console.log(reverseString("playwright"));

function rev(){
  let rev:string="";
  const a:string = "Playwrigt";
  for(let i = a.length-1; i>=0; i-- ){
    rev = rev += a[i];
  }
  console.log(rev)
}
rev();

function isPalindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str.toLowerCase() === reversed.toLowerCase();
}
console.log(isPalindrome("madaM"));
console.log(isPalindrome("hello"));

function countVowels(str: string): number {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (const ch of str) {
    if (vowels.includes(ch)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Automation Testing"));

function findDuplicates(arr: number[]): number[] {
  const seen = new Set<number>();
  const duplicates = new Set<number>();
  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  return Array.from(duplicates); 
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));

function removeDuplicates(arr: number[]): number[] {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

function secondLargest(arr: number[]): number {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[0];
}

console.log(secondLargest([10, 20, 5, 40, 40, 30]));

function charCount(str: string): Record<string, number> {
  const result: Record<string, number> = {};
  for (const ch of str) {
    result[ch] = (result[ch] || 0) + 1;
  }
  return result;
}
console.log(charCount("testing"));

function extractNumbers(str: string): string {
  return str.replace(/[A-Za-z0-9]/g, "");
  //return str.replace(/[^A-Za-z0-9]/g, "");
  //return str.replace(/[^0-9]/g, "");
  //^ it is use to match the given string value and remaining will be empty
}

console.log(extractNumbers("a1b2c3$@"));

function firstNonRepeatedChar(str: string): string | null {
  const count: Record<string, number> = {};

  for (const ch of str) {
    count[ch] = (count[ch] || 0) + 1;
    console.log([ch])
  }
  console.log(str);

  for (const ch of str) {
    if (count[ch] === 1) {
      console.log([ch])
      return ch
    }
 
  }

  return null;
}

console.log(firstNonRepeatedChar("automation"));

function isAnagram(str1: string, str2: string): boolean {

  const format = (str: string) =>
    str.toLowerCase().split("").sort().join("");

  return format(str1) === format(str2);
}

console.log(isAnagram("listen11", "silent1"));

function findMaxMin(arr: number[]): { max: number; min: number } {
  let max = arr[0];
  let min = arr[0];

  for (const num of arr) {
    if (num > max) max = num;
    if (num < min) min = num;
  }

  return { max, min };
}
console.log(findMaxMin([10, 5, 30, 2, 50]));