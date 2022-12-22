Ext.define("Financeiro.view.main.MainViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.mainviewcontroller",

    routes: {
        ":xtype": {
            action: "mainRoute",
        },
    },

    mainRoute: function (xtype) {
        console.log("MainRoute - procurando pelo componente => " + xtype);

        //procurar a view e exibir no center
        var centerView = this.lookup("centerview"), // busco o componente centerviw pela referencia
            navigationView = this.lookup("navview"), //  busco o componente navegação pela referencia
            menuList = this.lookup("menuList"), // busco o componente menu pela referencia
            exists = Ext.ClassManager.getByAlias("widget." + xtype), // busca a tela para ver se existe
            node;

        // verifico se existe o xtype
        if (!exists) {
            console.log(xtype + " Não existe");
            return;
        }

        // verifica se store esta disponivel
        if (!menuList.getStore()) {
            console.log("Não existe store para o menu list");
            return;
        }

        // verifica se existe o xtype no menu
        node = menuList.getStore().findNode("xtype", xtype);
        if (!node) {
            console.log("Rota não existe para o ", xtype);
            return;
        }

        if (!centerView.getComponent(xtype)) {
            centerView.add({
                xtype: xtype,
                itemId: "xtype",
            });
        }
        centerView.setActiveItem(xtype);
        menuList.setSelection(node);
    },

    onMenuSelection: function (tree, node) {
        console.log("item clicado " + node.get("text"));

        this.redirectTo(node.get("xtype"));
    },
});
