export function generateRandomUniqueName(length: number = 10): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';

  const nameArray = Array.from(
    { length: length - 1 },
    () => letters[Math.floor(Math.random() * letters.length)]
  );
  nameArray.push(digits[Math.floor(Math.random() * digits.length)]);

  shuffleArray(nameArray);

  return nameArray.join('');
}

function shuffleArray(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
