/* exported titleCase */
function titleCase(title) {
  const newTitle = title.toLowerCase().split(' ');
  let endTitle = '';
  for (let i = 0; i < newTitle.length; i++) {
    if (newTitle[i].length <= 3) {
      if (newTitle[i] === 'api') {
        endTitle += 'API ';
      } else if (newTitle[i] === newTitle[0] || newTitle[i] === 'web') {
        endTitle += newTitle[i][0].toUpperCase() + newTitle[i].slice(1) + ' ';
      } else if (newTitle[i - 1].includes(':')) {
        endTitle += newTitle[i][0].toUpperCase() + newTitle[i].slice(1) + ' ';
      } else {
        endTitle += newTitle[i] + ' ';
      }
    } else {
      if (newTitle[i].includes('javascript')) {
        if (newTitle[i].includes(':')) {
          endTitle += 'JavaScript: ';
        } else {
          endTitle += 'JavaScript ';
        }
      } else if (newTitle[i].includes('-')) {
        const newLetter = newTitle[i][newTitle[i].indexOf('-') + 1];
        const capitalLetter = newTitle[i][newTitle[i].indexOf('-') + 1].toUpperCase();
        const newWord = newTitle[i];
        const capitalizedSecondWord = newWord.replace(newLetter, capitalLetter);
        const newCapitalizedWord = capitalizedSecondWord[0].toUpperCase() + capitalizedSecondWord.slice(1) + ' ';
        endTitle += newCapitalizedWord;
      } else {
        endTitle += newTitle[i][0].toUpperCase() + newTitle[i].slice(1) + ' ';
      }
    }
  }
  return endTitle.trim();
}
