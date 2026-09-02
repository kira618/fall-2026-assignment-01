import * as fs from "fs";
import * as path from "path";
export type Gradebook = {
  [studentName: string]: {
    [subject: string]: number;
  };
};
export function calculateSubjectAverage(subject: string): number {
 const filePath = path.join(process.cwd(), "data", "gradebook.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const gradebook: Gradebook = JSON.parse(fileContents);

  let sum = 0;
  let count = 0;

  for (const student in gradebook) {
    const grades = gradebook[student];
    if (grades[subject] !== undefined) {
      sum += grades[subject];
      count++;
    }
  }
