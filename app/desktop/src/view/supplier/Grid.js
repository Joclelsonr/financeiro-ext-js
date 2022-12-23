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
                    iconCls: 'x-fa fa-user-tie',
                    ui: 'action',
                    text: 'Novo',
                    tooltip: 'Clique para cadastra um novo fornecedor',
                    listeners: {
                        tap: 'onNovoFornecedor', // no toque do botao ativa a funcão
                    },
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-pen',
                    margin: '0 0 0 5',
                    text: 'Editar',
                    tooltip: 'Clique para editar o fornecedor selecionado',
                    disabled: true,
                    bind: {
                        disabled: '{!supplierGrid.selection}',
                    },
                    listeners: {
                        tap: 'onEditFornecedor',
                    },
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-trash',
                    ui: 'decline',
                    margin: '0 0 0 5',
                    text: 'Excluir',
                    tooltip: 'Clique para excluir o fornecedor',
                    disabled: true,
                    bind: {
                        disabled: '{!supplierGrid.selection}',
                    },
                    listeners: {
                        tap: 'onDeleteFornecedor',
                    },
                },
            ],
        },
    ],

    // ativa multi seleção do grid com checkbox
    selectable: {
        checkbox: true,
    },

    emptyText: true, // habilito o texto de vazio quando nao tiver registro

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
