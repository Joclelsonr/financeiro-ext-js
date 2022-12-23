Ext.define('Financeiro.view.main.MenuList', {
    extend: 'Ext.list.Tree', // renderiza os menus
    alias: 'widget.menulist',

    ui: 'nav', // estilo de navegação do menu
    scrollable: true, // scrol no menu se precisar

    bind: {
        // trazendo dados do mainviewmodel por bind
        store: '{menu}',
    },
});
