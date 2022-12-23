Ext.define('Financeiro.view.billcategory.Grid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.billcategorygrid',
    title: 'Categorias de Contas',

    requires: ['Ext.grid.rowedit.Plugin', 'Ext.grid.plugin.PagingToolbar'],

    plugins: {
        rowedit: true, // edição de linha na grid
        gridpagingtoolbar: true, // paginação na grid
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Novo',
                    iconCls: 'x-fa fa-archive',
                    ui: 'active',
                    tooltip: 'Clique para adicionar um novo registro',
                    handler: 'onNovoBillCategory',
                },
            ],
        },
    ],

    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            width: 60,
            hidden: true, // inicia a coluna escondida
        },
        {
            text: 'Descrição',
            dataIndex: 'description',
            editable: true, // ativa a edição
            flex: 1,
        },
        {
            align: 'center',
            width: 50,
            cell: {
                tools: {
                    remove: {
                        iconCls: 'x-fa fa-trash', // icone na coluna
                        handler: 'onDeleteTool',
                    },
                },
            },
        },
    ],

    listeners: {
        edit: 'ongridRowEdit', // esta vendo se a linha e editada, so funciona com o plugin
    },
});
