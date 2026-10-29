import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const RACINE = fileURLToPath(new URL('..', import.meta.url));

// La version d'ARS traduite : le dossier ref/ars-<version> le plus récent.
export const REF = `${RACINE}ref/${readdirSync(`${RACINE}ref`).filter((d) => d.startsWith('ars-')).sort().at(-1)}`;

export function lireJson(chemin) {
    return JSON.parse(readFileSync(chemin, 'utf8'));
}

// { a: { b: "x" } } → { "a.b": "x" }
export function aplatir(noeud, prefixe = '') {
    const plat = {};
    for (const [cle, valeur] of Object.entries(noeud)) {
        if (valeur !== null && typeof valeur === 'object') Object.assign(plat, aplatir(valeur, `${prefixe}${cle}.`));
        else plat[`${prefixe}${cle}`] = valeur;
    }
    return plat;
}

export function placeholders(texte) {
    return (texte.match(/\{[^}]*\}/g) ?? []).sort();
}
