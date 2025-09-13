Ext.define('SenchaTZ.Application', {
    extend: 'Ext.app.Application',

    name: 'SenchaTZ',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: function () {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            this.setMainView('SenchaTZ.view.main.Main');
        } else {
            this.setMainView('SenchaTZ.view.login.Login');
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
