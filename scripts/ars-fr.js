// Babele lit compendium/<langue>/<système>.<pack>.json ; sans Babele, seule l'interface est traduite.
Hooks.once('babele.init', (babele) => {
    babele.register({ module: 'ars-fr', lang: 'fr', dir: 'compendium' });
});
