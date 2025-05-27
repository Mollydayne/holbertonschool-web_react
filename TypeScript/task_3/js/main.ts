/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';

// Création d'un objet row de type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insertion de la ligne, retourne un ID
const newRowID: RowID = CRUD.insertRow(row);

// Mise à jour de l'objet avec un champ 'age'
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Mise à jour et suppression
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

// ---------- Affichage HTML ----------
const container = document.createElement('div');
container.style.fontFamily = 'Arial';
container.style.marginTop = '20px';
container.style.padding = '15px';
container.style.backgroundColor = '#f9f9f9';
container.style.border = '1px solid #ccc';
container.style.borderRadius = '5px';
container.style.width = 'fit-content';

const title = document.createElement('h2');
title.textContent = 'Base de données simulée';
container.appendChild(title);

const inserted = document.createElement('p');
inserted.textContent = `Ligne insérée : ${JSON.stringify(row)}`;
container.appendChild(inserted);

const updated = document.createElement('p');
updated.textContent = `Mise à jour avec : ${JSON.stringify(updatedRow)}`;
container.appendChild(updated);

const deleted = document.createElement('p');
deleted.textContent = `ID supprimé : ${newRowID}`;
container.appendChild(deleted);

document.body.appendChild(container);
