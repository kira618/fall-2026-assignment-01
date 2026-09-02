export function transcribeDNA(dna: string): string {
let result = "";

  for (let i = 0; i < dna.length; i++) {
    const letter = dna[i];

    if (letter === "A") {
      result += "U";
    } else if (letter === "T") {
      result += "A";
    } else if (letter === "C") {
      result += "G";
    } else if (letter === "G") {
      result += "C";
    } else {
      throw new Error("Invalid DNA character found: " + letter);
    }
  }

  return result;
}
