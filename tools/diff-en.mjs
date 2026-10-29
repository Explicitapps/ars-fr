// Compare le en.json d'une nouvelle version d'ARS à celui de référence :
//   node tools/diff-en.mjs <chemin/vers/en.json>
// Liste les clés ajoutées (à traduire), retirées (à supprimer de fr.json) et
// dont le texte anglais a changé (traduction à relire).
import { aplatir, lireJson, REF } from './cles.mjs';

const chemin = process.argv[2];
if (!chemin) {
    console.error('usage : node tools/diff-en.mjs <en.json>');
    process.exit(2);
}

const ancien = aplatir(lireJson(`${REF}/en.json`));
const nouveau = aplatir(lireJson(chemin));

const ajoutees = Object.keys(nouveau).filter((k) => !(k in ancien));
const retirees = Object.keys(ancien).filter((k) => !(k in nouveau));
const modifiees = Object.keys(nouveau).filter((k) => k in ancien && ancien[k] !== nouveau[k]);

console.log(`Référence : ${REF}`);
for (const [titre, cles] of [['Ajoutées', ajoutees], ['Retirées', retirees], ['Modifiées', modifiees]]) {
    console.log(`\n${titre} (${cles.length})`);
    for (const k of cles) {
        const texte = titre === 'Retirées' ? ancien[k] : nouveau[k];
        console.log(`  ${k}\t${texte}`);
    }
}
process.exit(ajoutees.length + retirees.length + modifiees.length > 0 ? 1 : 0);
