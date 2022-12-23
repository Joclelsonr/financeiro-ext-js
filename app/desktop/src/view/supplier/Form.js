Ext.define('Financeiro.view.supplier.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.supplier-form',

    requires: ['Ext.field.Container', 'Ext.field.trigger.Search'],
    modelValidation: true,

    items: [
        {
            xtype: 'textfield',
            label: 'Nome',
            bind: {
                value: '{record.name}',
            },
        },
        {
            xtype: 'fieldcontainer',
            defaults: {
                flex: 1,
            },
            items: [
                {
                    xtype: 'textfield',
                    label: 'Telefone',
                    margin: '0 5 0 0',
                    bind: {
                        value: '{record.phone}',
                    },
                },
                {
                    xtype: 'textfield',
                    label: 'Email',
                    bind: {
                        value: '{record.email}',
                    },
                },
            ],
        },
        {
            xtype: 'fieldcontainer',
            defaults: {
                flex: 1,
            },
            items: [
                {
                    xtype: 'textfield',
                    label: 'CNPJ/CPF',
                    margin: '0 5 0 0',
                    bind: {
                        value: '{record.cnpj_cpf}',
                    },
                },
                {
                    xtype: 'textfield',
                    label: 'IE/RG',
                    bind: {
                        value: '{record.rg_ie}',
                    },
                },
            ],
        },
        {
            xtype: 'textfield',
            label: 'CEP',
            width: '35%',
            bind: {
                value: '{record.address_postal_code}',
            },
            triggers: [
                {
                    type: 'search',
                    handler: 'onSearchCep',
                },
            ],
        },
        {
            xtype: 'fieldcontainer',
            defaults: {
                flex: 1,
            },
            items: [
                {
                    xtype: 'textfield',
                    label: 'Endereço',
                    margin: '0 5 0 0',
                    bind: {
                        value: '{record.address}',
                    },
                },
                {
                    xtype: 'textfield',
                    label: 'Complemento',
                    bind: {
                        value: '{record.address_complement}',
                    },
                },
            ],
        },
        {
            xtype: 'fieldcontainer',
            items: [
                {
                    xtype: 'textfield',
                    label: 'Bairro',
                    margin: '0 5 0 0',
                    flex: 2,
                    bind: {
                        value: '{record.address_neighborhood}',
                    },
                },
                {
                    xtype: 'textfield',
                    label: 'Nº',
                    flex: 1,
                    bind: {
                        value: '{record.address_number}',
                    },
                },
            ],
        },
        {
            xtype: 'fieldcontainer',
            items: [
                {
                    xtype: 'textfield',
                    label: 'UF',
                    margin: '0 5 0 0',
                    flex: 1,
                    bind: {
                        value: '{record.address_state}',
                    },
                },
                {
                    xtype: 'textfield',
                    label: 'Cidade',
                    flex: 2,
                    bind: {
                        value: '{record.address_city}',
                    },
                },
            ],
        },
    ],
});
