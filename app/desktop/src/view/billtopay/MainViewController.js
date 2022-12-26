Ext.define('Financeiro.view.billtopay.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.billtopaymaincontroller',

    onNewBillToPay: function (button) {
        var me = this;
        me.openEditDialog({
            viewModel: {
                data: {
                    record: Ext.create('Financeiro.model.BillToPay'),
                    gridView: me.lookup('billtopaygrid'),
                },
            },
        });
    },

    onEditBillToPay: function (button) {
        var me = this,
            gridView = me.lookup('billtopaygrid'),
            selected = gridView.getSelection();

        if (gridView.getSelected().getCount() === 1) {
            this.openEditDialog({
                title: 'Editar Conta a Pagar',
                viewModel: {
                    data: {
                        record: selected,
                        gridView: gridView,
                    },
                },
            });
        } else {
            Ext.Msg.alert('Aviso', 'Favor selecionar apenas um registro');
        }
    },

    onDeleteBillToPay: function (button) {
        var me = this,
            grid = me.lookup('billtopaygrid'), // pego o grid pela referencia
            selection = grid.getSelected(), // pego todas as informações selecionadas no model
            store = grid.getStore(), //  pego o acesso ao store da grid
            count = selection.getCount(); // contagem dos registros selecionados no model

        Ext.Msg.confirm(
            'Confirmação',
            'Deseja realmente excluir?',
            (option) => {
                if (option === 'yes') {
                    grid.mask(
                        Ext.String.format(
                            'Excluindo {0}, aguarde...',
                            Ext.util.Format.plural(count, 'registro')
                        )
                    );
                    store.remove(selection.items);
                    store.sync({
                        callback: (batch) => {
                            grid.unmask();
                            if (batch.complete) {
                                Ext.toast(
                                    'Exclusão realizada com sucesso!',
                                    4000
                                );
                                store.reload();
                            } else {
                                store.rejectChanges();
                            }
                        },
                    });
                }
            }
        );
    },

    openEditDialog: function (config) {
        var me = this,
            wizardDialog = Ext.create(
                'Financeiro.view.billtopay.Dialog',
                Ext.apply({}, config)
            );

        wizardDialog.show();
        return wizardDialog;
    },

    onExportExcel: function (button) {
        const month = new Date().getMonth();
        const year = new Date().getFullYear();

        this.lookup('billtopaygrid').saveDocumentAs({
            title: 'Contas a Pagar',
            type: 'excel',
            fileName: `relatorio_${month}-${year}.xlsx`,
        });
    },
});
