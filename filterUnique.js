const textRef = document.querySelector("p[data-text]");
const inputRef = document.querySelector("textarea[data-input]");

export function filterUnique(event) {
  event.preventDefault();

  let countryName = inputRef.value.trim();
  if (countryName === "") {
    return (textRef.textContent = "");
  }

  const arrUnique = [];
  const words = countryName.split(" ");

  for (const word of words) {
    const letters = word.split("");
    const uniqueArr = [...new Set(letters)];

    const result = uniqueArr.find(
      (value) => letters.indexOf(value) === letters.lastIndexOf(value)
    );

    if (result) {
      arrUnique.push(result);
    }
  }

  const uniqueLetter = [...new Set(arrUnique)];
  const finishResult = uniqueLetter.find(
    (value) => arrUnique.indexOf(value) === arrUnique.lastIndexOf(value)
  );

  finishResult
    ? (textRef.textContent = `Відповідь: ${finishResult} - перший унікальний символ`)
    : (textRef.textContent = "Відповідь: 0 знайдених");
}
