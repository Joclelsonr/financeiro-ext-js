Ext.define('Financeiro.model.BillToPay', {
    extend: 'Financeiro.model.Base',

    requires: [
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Ext.data.proxy.Rest',
        'Ext.data.validator.Presence',
    ],

    // chamada para api
    proxy: {
        type: 'rest',
        url: 'http://localhost:3333/api/v1/bill_to_pay',
        reader: {
            type: 'json',
            rootProperty: 'data',
        },
        writer: {
            type: 'json',
        },
    },

    // validação, nao permite fica em branco
    validators: {
        supplier_id: 'presence',
        bill_category_id: 'presence',
        installment: 'presence',
        total_installments: 'presence',
        due_date: 'presence',
        amount: 'presence',
    },

    // mapeando campos de categoria de conta da api
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
        },
        {
            name: 'supplier_id', //FK
            type: 'int',
        },
        {
            name: 'bill_category_id', //FK
            type: 'int',
        },
        {
            name: 'bill_category_description',
            mapping: 'bill_category.description',
            persist: false,
        },
        {
            name: 'supplier_name',
            mapping: 'supplier.name',
            persist: false,
        },
        {
            name: 'installment',
            type: 'int',
            defaultValue: 1,
        },
        {
            name: 'total_installments',
            type: 'int',
            defaultValue: 1,
        },
        {
            name: 'due_date',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s',
        },
        {
            name: 'paid_date',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s',
        },
        {
            name: 'amount',
            type: 'float',
        },
        {
            name: 'discounts',
            type: 'float',
        },
        {
            name: 'interests_and_fine',
            type: 'float',
        },
        {
            name: 'paid_amount',
            type: 'float',
        },
        {
            name: 'competence',
            type: 'string',
        },
        {
            name: 'reference_code',
            type: 'int',
        },
        {
            name: 'notes',
            type: 'string',
        },
        {
            name: 'created_at',
            type: 'date',
            dateFormat: 'Y-m-d',
            persist: false,
        },
        {
            name: 'updated_at',
            type: 'date',
            dateFormat: 'Y-m-d',
            persist: false,
        },
    ],
});
