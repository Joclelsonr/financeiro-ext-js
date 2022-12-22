Ext.define("Financeiro.view.main.MainViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.mainviewmodel",

    requires: ["Ext.data.TreeStore"],

    stores: {
        menu: {
            type: "tree",
            proxy: {
                type: "ajax",
                url: "/resources/desktop/menu.json",
            },
            autoLoad: true,
        },
    },
});