Ext.define('Financeiro.view.billtopay.Ggrid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.billtopaygrid',
    title: 'Contas a Pagar',

    selectable: {
        checkbox: true,
    },

    plugins: {
        // rowedit: true, // edição de linha na grid
        gridpagingtoolbar: true, // paginação na grid
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-dollar-sign',
                    ui: 'action',
                    text: 'Novo',
                    tooltip: 'Clique para cadastra um novo fornecedor',
                    listeners: {
                        tap: 'onNewBillToPay', // no toque do botao ativa a funcão
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
                        disabled: '{!billtopaygrid.selection}',
                    },
                    listeners: {
                        tap: 'onEditBillToPay',
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
                        disabled: '{!billtopaygrid.selection}',
                    },
                    listeners: {
                        tap: 'onDeleteFornecedor',
                    },
                },
            ],
        },
    ],

    columns: [
        {
            text: 'Vencimento',
            dataIndex: 'due_date',
            align: 'center',
            width: 120,
            formatter: 'date("d/m/Y")',
        },
        {
            text: 'Categoria',
            dataIndex: 'bill_category_id',
            width: 130,
        },
        {
            text: 'Descrição',
            dataIndex: 'notes',
            flex: 1,
        },
        {
            text: 'Fornecedor',
            dataIndex: 'supplier_id',
            width: 130,
        },
        {
            text: 'Valor Previsto',
            dataIndex: 'amount',
            align: 'right',
        },
        {
            text: 'Valor Pago',
            dataIndex: 'paid_amount',
            align: 'right',
            width: 120,
        },
        {
            hidden: true,
            text: 'Data do Pagamento',
            dataIndex: 'paid_date',
            align: 'center',
            formatter: 'date("d/m/Y")',
            width: 110,
        },
        {
            text: 'Status',
            width: 120,
        },
    ],
});
