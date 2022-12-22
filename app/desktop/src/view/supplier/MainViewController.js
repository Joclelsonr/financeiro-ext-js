Ext.define("Financeiro.view.supplier.MainViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.suppliercontroller",

    onNovoFornecedor: function (button) {
        var me = this;
        me.openEditDialog({
            viewModel: {
                data: {
                    record: Ext.create("Financeiro.model.Supplier"),
                    gridView: me.lookup("supplierGrid"),
                },
            },
        });
    },

    onEditFornecedor: function (button) {
        var me = this,
            gridView = me.lookup("supplierGrid"),
            selected = gridView.getSelection();

        if (gridView.getSelected().getCount() === 1) {
            this.openEditDialog({
                title: "Editar Fornecedor",
                viewModel: {
                    data: {
                        record: selected,
                        gridView: me.lookup("supplierGrid"),
                    },
                },
            });
        } else {
            Ext.Msg.alert("Aviso", "Favor selecionar apenas um registro");
        }
    },

    openEditDialog: function (config) {
        var me = this,
            wizardDialog = Ext.create(
                "Financeiro.view.supplier.Dialog",
                Ext.apply({}, config)
            );

        wizardDialog.show();
        return wizardDialog;
    },
});
