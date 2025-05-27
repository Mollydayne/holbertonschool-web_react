// Déclaration du type littéral
type Subjects = 'Math' | 'History';

// Fonction qui retourne la phrase associée à la matière
function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

// ---------- Tests console ----------
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History

// ---------- Affichage HTML ----------
const container = document.createElement('div');
container.style.fontFamily = 'Arial';
container.style.marginTop = '20px';

const header = document.createElement('h3');
header.textContent = 'Class Schedule';
container.appendChild(header);

['Math', 'History'].forEach((subject) => {
  const p = document.createElement('p');
  p.textContent = teachClass(subject as Subjects);
  p.style.fontSize = '16px';
  container.appendChild(p);
});

document.body.appendChild(container);
