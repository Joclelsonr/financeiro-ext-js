Ext.define('Financeiro.view.supplier.Grid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.suppliergrid',
    title: 'Fornecedores',

    requires: ['Ext.dataview.plugin.ListPaging', 'Ext.grid.plugin.Editable'],

    plugins: {
        listpaging: {
            autoPaging: true, // implementando paginação
        },
        grideditable: true, // implementando edição no grid
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-address-card',
                    ui: 'action',
                    text: 'Novo',
                    tooltip: 'Clique para cadastra um novo fornecedor',
                    listeners: {
                        tap: 'onNovoFornecedor', // no toque do botao ativa a funcão
                    },
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-edit',
                    margin: '0 0 0 5',
                    text: 'Editar',
                    tooltip: 'Clique para editar o fornecedor selecionado',
                    listeners: {
                        tap: 'onEditFornecedor',
                    },
                },
            ],
        },
    ],

    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            width: 50,
        },
        {
            text: 'Nome', // nome da coluna
            dataIndex: 'name', // nome do campo no mapeado pelo model
            flex: 1,
            editable: true, // ativando colunas para edição
        },
        {
            text: 'Telefone',
            dataIndex: 'phone',
            width: 150,
            editable: true,
        },
        {
            text: 'E-mail',
            dataIndex: 'email',
            flex: 1,
            editable: true,
        },
    ],
});
