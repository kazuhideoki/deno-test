import { readLines } from "https://deno.land/std@0.82.0/io/bufio.ts";

async function question(arg: string) {
  console.log(arg);
  // Listen to stdin input, once a new line is entered return
  for await (const line of readLines(Deno.stdin)) {
    // do something...
    const result = line;

    return result;
  }
}

const answer = await question("input?...");
console.log(answer);
