import { test } from 'node:test';
import assert from 'node:assert/strict';
import { aplatir, lireJson, placeholders, RACINE, REF } from '../tools/cles.mjs';

const en = aplatir(lireJson(`${REF}/en.json`));
const fr = aplatir(lireJson(`${RACINE}lang/fr.json`));

test('fr.json a exactement les clés de en.json', () => {
    assert.deepEqual(Object.keys(fr).sort(), Object.keys(en).sort());
});

test('aucune valeur vide là où l’anglais en a une', () => {
    const vides = Object.keys(en).filter((k) => en[k] !== '' && fr[k] === '');
    assert.deepEqual(vides, []);
});

test('les placeholders sont conservés', () => {
    const casses = Object.keys(en).filter(
        (k) => JSON.stringify(placeholders(en[k])) !== JSON.stringify(placeholders(fr[k])),
    );
    assert.deepEqual(casses, []);
});

test('le fichier Babele couvre tous les effets d’ARS, par _id', () => {
    const ids = Object.values(lireJson(`${REF}/ars-effects.manifest.json`).effects).map((e) => e.id).sort();
    const babele = lireJson(`${RACINE}compendium/fr/ars.ars-effects.json`);
    assert.deepEqual(Object.keys(babele.entries).sort(), ids);
    for (const [id, entree] of Object.entries(babele.entries)) {
        assert.ok(entree.name && entree.description, `entrée incomplète : ${id}`);
    }
});
