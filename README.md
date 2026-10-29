# ARS — traduction française

Traduction française du système [Advanced Roleplay System](https://gitlab.com/foundryprojects/systems/advanced-roleplay-system)
(ARS) pour Foundry VTT v14.

- **Interface** : les 2 137 clés de `en.json`, dans `lang/fr.json`.
- **Compendiums** : le pack d'effets `ars-effects` (16 effets), traduit via
  [Babele](https://gitlab.com/riccisi/foundryvtt-babele) ≥ 2.9.1. Sans Babele,
  seule l'interface est traduite.
- **Pas encore traduit** : la documentation intégrée (`ars-documentation`).

Version d'ARS traduite : **2026.10.26** (`ref/ars-2026.10.26/`).

## Installation

Dans Foundry, « Installer un module », coller l'URL du manifeste :

```
https://github.com/Explicitapps/ars-fr/releases/latest/download/module.json
```

Activer le module dans le monde, puis choisir le français dans les réglages de
Foundry. Pour le cœur de Foundry, installer aussi le module communautaire
`fr-core`.

## Publier une version

Monter `version` dans `module.json`, committer, pousser, puis créer sur GitHub
une release taguée `vX.Y.Z`. Le workflow `.github/workflows/release.yml` lance
les tests et joint `module.json` et `module.zip` à la release.

## Limite connue

Une partie des textes d'ARS est écrite en dur dans ses templates et ses
notifications, sans passer par `localize` : ils restent en anglais.

## Glossaire

La traduction suit le vocabulaire des éditions françaises d'AD&D 2e
(TSR/Descartes).

| VO | VF |
|---|---|
| THAC0 / AC / HD / HP | TAC0 / CA / DV / PV |
| Ability (score) / Ability check | Caractéristique / test de caractéristique |
| Ability (item) | Capacité |
| Saving throw | Jet de sauvegarde |
| Paralyzation, Poison, Death Magic | Paralysie, poison, mort magique |
| Rod, Staff, Wand | Sceptre, bâton, baguette |
| Petrification, Polymorph | Pétrification, métamorphose |
| Breath Weapon / Spell | Souffle / sort |
| Weapon proficiency (item `proficiency`) | Compétence martiale |
| Nonweapon proficiency, skill (item `skill`) | Compétence |
| Proficiency slots | Unités de compétences |
| Speed factor / Casting time | Facteur de vitesse / temps d'incantation |
| Turn undead | Renvoi des morts-vivants |
| Pick pockets, Open locks, Find/remove traps | Vol à la tire, crochetage, détection et désamorçage des pièges |
| Move silently, Hide in shadows | Déplacement silencieux, se cacher dans l'ombre |
| Detect noise, Climb walls, Read languages | Perception des bruits, escalade, lecture des langues |
| Arcane / Divine | Profane / divin |
| Round / Turn | Round / tour |
| Grapple, Overbear, Pummel | Lutte, plaquage, pugilat |
| Subdual damage | Dégâts assommants |
| PSP | PFP (points de force psionique) |
| Background / Kit | Historique / profil |
| Bundle / Lootable | Lot / butin |
| GM / DM | MD |
| Token / Actor / Item | Jeton / acteur / objet |
| cp, sp, ep, gp, pp | pc, pa, pe, po, pp |
| Wight, Ghast, Wraith | Nécrophage, blême, âme-en-peine |
| Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma, Comeliness | Force, Dextérité, Constitution, Intelligence, Sagesse, Charisme, Beauté (For, Dex, Con, Int, Sag, Cha, Bea) |

Les clés `ARS.inventoryTypeMaps.*` restent en anglais : ce sont des
identifiants internes.

## Quand ARS publie une version

```sh
node tools/diff-en.mjs <chemin>/ars/lang/en.json   # clés ajoutées, retirées, modifiées
```

Traduire les écarts, copier le nouveau `en.json` (et le registre des effets)
dans `ref/ars-<version>/`, puis `npm test` : mêmes clés que `en.json`, aucune
valeur vide, placeholders (`{name}`) conservés, tous les effets couverts.

## Licence

GPL-3.0, comme ARS, dont ce module traduit les fichiers de langue.
