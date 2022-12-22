Ext.define("Financeiro.view.supplier.DialogController", {
    extend: "Ext.app.ViewController",
    alias: "controller.supplierdialog",

    requires: ["Ext.Toast"],

    onSaveEdit: function () {
        var me = this,
            form = me.lookup("form"),
            viewModel = me.getViewModel(),
            gridView = viewModel.get("gridView");

        if (form.isValid()) {
            me.getView().mask("Salvando, aguarde...");
            viewModel.get("record").save({
                callback: function (record) {
                    me.getView().unmask();
                    if (gridView) {
                        gridView.getStore().reload();
                        Ext.toast("Registro salvo com sucesso!", 4000);
                        me.getView().close();
                    }
                },
            });
        } else {
            form.validate();
        }
    },
});
