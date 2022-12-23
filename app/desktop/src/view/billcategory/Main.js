Ext.define('Financeiro.view.billcategory.Main', {
    extend: 'Ext.Container',
    alias: 'widget.categoryview',

    controller: 'categoryview',

    bodyPadding: 0,

    viewModel: {
        type: 'categoryview', // model do grid - mainviewmodel
    },

    layout: {
        type: 'vbox', // layout deixe os items no sentido vertical
        // align: "stretch",
    },

    items: [
        {
            xtype: 'billcategorygrid', // chama a grid
            flex: 1,
            margin: 10,
            shadow: true,
            reference: 'categoryGrid', // faz referencia a grid
            bind: {
                store: '{categories}', // bind dos dados que vem do model
            },
        },
    ],
});
