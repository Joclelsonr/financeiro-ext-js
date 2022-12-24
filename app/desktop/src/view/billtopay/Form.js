Ext.define('Financeiro.view.billtopay.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.billtopay-form',

    items: [
        {
            xtype: 'fieldset',
            title: 'Dados Principais',
            layout: {
                type: 'vbox',
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'combobox',
                            label: 'Categoria',
                            margin: '0 5 0 0',
                            flex: 2,
                            valueField: 'id',
                            displayField: 'description',
                            autoLoadOnValue: true,
                            store: {
                                model: 'Financeiro.model.BillCategory',
                            },
                            bind: {
                                value: '{record.bill_category_id}',
                            },
                        },
                        {
                            xtype: 'datefield',
                            label: 'Vencimento',
                            flex: 1,
                            bind: {
                                value: '{record.due_date}',
                            },
                        },
                    ],
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'combobox',
                            label: 'Fornecedor',
                            margin: '0 5 0 0',
                            flex: 2,
                            valueField: 'id',
                            displayField: 'name',
                            autoLoadOnValue: true,
                            store: {
                                model: 'Financeiro.model.Supplier',
                            },
                            bind: {
                                value: '{record.supplier_id}',
                            },
                        },
                        {
                            xtype: 'numberfield',
                            label: 'Valor',
                            flex: 1,
                            bind: {
                                value: '{record.amount}',
                            },
                        },
                    ],
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'textfield',
                            label: 'Descrição',
                            bind: {
                                value: '{record.description}',
                            },
                        },
                        {
                            xtype: 'textareafield',
                            label: 'Observação',
                            height: 80,
                            bind: {
                                value: '{record.notes}',
                            },
                        },
                    ],
                },
            ],
        },
        {
            xtype: 'checkbox',
            label: 'Conta paga',
            reference: 'checkContaPaga',
        },
        {
            xtype: 'fieldset',
            title: 'Pagamento',
            disabled: true,
            bind: {
                disabled: '{!checkContaPaga.checked}',
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    defaults: {
                        flex: 1,
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            label: 'Data Pgto',
                            bind: {
                                value: '{record.paid_date}',
                            },
                        },
                        {
                            xtype: 'numberfield',
                            label: 'Valor Pago',
                            margin: '0 0 0 5',
                            bind: {
                                value: '{record.paid_amount}',
                            },
                        },
                        {
                            xtype: 'numberfield',
                            label: 'Juros e Multa',
                            bind: {
                                value: '{record.interests_and_fine}',
                            },
                        },
                        {
                            xtype: 'numberfield',
                            label: 'Descontos',
                            margin: '0 0 0 5',
                            bind: {
                                value: '{record.discounts}',
                            },
                        },
                    ],
                },
            ],
        },
    ],
});
