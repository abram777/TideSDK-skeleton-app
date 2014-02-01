// create and set menu
var menu = Ti.UI.createMenu(),
    fileItem = Ti.UI.createMenuItem('File'),
    exitItem = fileItem.addItem('Exit', function () {
	if (confirm('Are you sure you want to quit?')) {
	    Ti.App.exit();
	}
    });

menu.appendItem(fileItem);
Ti.UI.setMenu(menu);
