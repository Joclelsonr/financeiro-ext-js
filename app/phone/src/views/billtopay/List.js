Ext.define('Financeiro.view.billtopay.List', {
    extend: 'Ext.dataview.List',
    alias: 'widget.billtopaylist',

    controller: 'billtopaycontroller',
    requires: [
        'Ext.dataview.plugin.ListPaging',
        'Ext.dataview.listswiper.ListSwiper',
        'Ext.dataview.pullrefresh.PullRefresh',
    ],

    store: {
        model: 'Financeiro.model.BillToPay',
        autoLoad: true,
        pageSize: 10,
    },

    plugins: {
        pullrefresh: true, // faz reload ao puxa para baixo
        // paginação infinita
        listpaging: {
            autoPaging: true,
        },
        // habilita botoes ao arrasta para lado
        listswiper: {
            left: [
                {
                    iconCls: 'x-fa fa-trash',
                    text: 'Excluir',
                    commit: 'onExcluirSwiper',
                },
            ],
            right: [
                {
                    iconCls: 'x-fa fa-plus',
                    text: 'Adicionar',
                },
            ],
        },
    },

    itemTpl: new Ext.XTemplate(`
        <div class="testview" style="width: 100%; border: 0px solid green;">
            <table style="width: 100%; boder: 0px solid green;">
                <tr>
                    <td style="font-size: 16px;">
                        <div style="..." class="xitem-title">{description}</div>
                        <div style="..." class="xitem-caption">{amount:brMoney}</div>
                        <div style="..." class="xitem-caption">{due_date:date("d/m/Y")}</div>
                    </td>
                </tr>
            </table>
        </div>
    `),
});
