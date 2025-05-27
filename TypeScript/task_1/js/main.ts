// Interface de base pour un enseignant
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

// Interface Directors qui hérite de Teacher et ajoute une propriété obligatoire
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface pour la fonction printTeacher
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Fonction printTeacher : retourne la première lettre du prénom + nom complet
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Interface décrivant le comportement attendu d’un étudiant
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface décrivant le constructeur de la classe StudentClass
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Classe représentant un étudiant
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
