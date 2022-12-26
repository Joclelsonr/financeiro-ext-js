Ext.define('Financeiro.view.billtopay.Ggrid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.billtopaygrid',
    title: 'Contas a Pagar',

    requires: ['Ext.grid.plugin.Exporter'],

    selectable: {
        checkbox: true,
    },

    plugins: {
        gridpagingtoolbar: true, // paginação na grid
        gridexporter: true, // exportação da grid para pdf
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
                    tooltip: 'Clique para excluir o ',
                    disabled: true,
                    bind: {
                        disabled: '{!billtopaygrid.selection}',
                    },
                    listeners: {
                        tap: 'onDeleteBillToPay',
                    },
                },
                {
                    xtype: 'spacer',
                    flex: 1,
                },
                {
                    xtype: 'button',
                    text: 'Exportar',
                    iconCls: 'x-fa fa-file-excel',
                    handler: 'onExportExcel',
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
            dataIndex: 'bill_category_description',
            width: 130,
        },
        {
            text: 'Descrição',
            dataIndex: 'description',
            flex: 1,
        },
        {
            text: 'Fornecedor',
            dataIndex: 'supplier_name',
            flex: 1,
            // width: 150,
        },
        {
            text: 'Valor Previsto',
            dataIndex: 'amount',
            formatter: 'brMoney',
            align: 'right',
            width: 110,
        },
        {
            text: 'Valor Pago',
            dataIndex: 'paid_amount',
            formatter: 'brMoney',
            align: 'right',
            width: 110,
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
            align: 'center',
            width: 120,
            exportRenderer: true,
            // renderer: (value, record, dataIndex, cell, column) => {
            //     if (record.get('paid_amount') && record.get('paid_date')) {
            //         return 'Pago';
            //     } else {
            //         return 'Aberto';
            //     }
            // },
            renderer: (value, record, dataIndex, cell, column) => {
                if (record.get('paid_amount') && record.get('paid_date')) {
                    cell.addCls('text-grid-green');
                    return 'Pago';
                } else {
                    if (
                        record.get('due_date').getTime() < new Date().getTime()
                    ) {
                        cell.addCls('text-grid-red');
                    }
                    return 'Aberto';
                }
            },
        },
    ],
});
