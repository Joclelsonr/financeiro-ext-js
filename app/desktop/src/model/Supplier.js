Ext.define("Financeiro.model.Supplier", {
    extend: "Financeiro.model.Base",

    requires: ["Ext.data.proxy.Rest"],

    // chamada para api
    proxy: {
        type: "rest",
        url: "http://localhost:3333/api/v1/supplier",
        reader: {
            type: "json",
            rootProperty: "data",
        },
        writer: {
            type: "json",
        },
    },

    // validação, nao permite fica em branco
    validators: {
        name: "presence",
    },

    // mapeando campos de fornecedores da api
    idProperty: "id",
    fields: [
        {
            name: "id",
            type: "int",
        },
        {
            name: "name",
            type: "string",
        },
        {
            name: "phone",
            type: "string",
        },
        {
            name: "address",
            type: "string",
        },
        {
            name: "address_complement",
            type: "string",
        },
        {
            name: "address_reference",
            type: "string",
        },
        {
            name: "address_number",
            type: "string",
        },
        {
            name: "address_neighborhood",
            type: "string",
        },
        {
            name: "address_state",
            type: "string",
        },
        {
            name: "address_city",
            type: "string",
        },
        {
            name: "address_postal_code",
            type: "string",
        },
        {
            name: "email",
            type: "string",
        },
        {
            name: "cnpj_cpf",
            type: "string",
        },
        {
            name: "rg_ie",
            type: "string",
        },
        {
            name: "created_at",
            type: "date",
            //formatando data do back-end
            dateFormat: "Y-a-d H:i:s",
        },
        {
            name: "updated_at",
            type: "date",
            dateFormat: "Y-a-d H:i:s",
        },
    ],
});
