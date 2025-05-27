// Interface décrivant le constructeur (type de la classe)
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface décrivant le comportement de l'objet Student
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Classe implémentant l'interface StudentClassInterface
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Création d'une instance
const student = new StudentClass("Clarisse", "Perez");

console.log(student.displayName()); // Clarisse
console.log(student.workOnHomework()); // Currently working

// ---------- Affichage HTML ----------
const container = document.createElement('div');
container.style.fontFamily = 'Arial';
container.style.marginTop = '20px';

const nameParagraph = document.createElement('p');
nameParagraph.textContent = `Student: ${student.displayName()}`;
nameParagraph.style.fontSize = '18px';

const homework = document.createElement('p');
homework.textContent = `Status: ${student.workOnHomework()}`;
homework.style.fontSize = '18px';

container.appendChild(nameParagraph);
container.appendChild(homework);
document.body.appendChild(container);
