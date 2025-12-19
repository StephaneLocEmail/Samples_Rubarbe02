Ext.define('eKiosk.view.Pos.Preset.Food', {
	extend: 'Ext.container.Container',
	alias: 'widget.pos.preset.food',
	defaultListenerScope: true,
	config: {
		smsEditable: true,
		smsEditor: {
			position: 'pos.preset.start'
		}
	},
	layout: {
		type: 'vbox',
		align: 'stretchmax',
		padding: '0 0 0 0',
		pack: 'start'
	},
	items: [
		{
			xtype: 'container',
			layout: {
				type: 'vbox',
				pack: 'start',
				align: 'begin'
			},
			flex: 1,
			margin: '10',
			items: [
				{
					xtype: 'button',
					text: 'Back',
					iconCls: 'x-fa fa-mail-reply fa-2x',
					iconAlign: 'left',
					smsExec: 'jsDesktop=pos.desktop',
					scale: 'medium',
					textSize: '17px',
					itemId: 'button_01073230764a6'
				}
			]
		},
		{
			xtype: 'container',
			layout: {
				type: 'hbox',
				pack: 'start',
				align: 'begin'
			},
			flex: 1,
			padding: '0 0 0 0',
			margin: '0px 0px 0px 0px',
			items: [
				{
					xtype: 'button',
					smsExec: 'jsDesktop=pos.preset.start',
					smsOptions: {
						smsSubView: 'Pos.Preset.Burgers',
						smsAttrib: 'SkipTask'
					},
					iconAlign: 'top',
					width: 220,
					height: 220,
					padding: '0 0 0 0',
					backgroundImage: '',
					scale: 'small',
					smsAlias: 'button_0',
					text: 'Burgers',
					icon: '/Bitmaps/9032.png',
					cls: 'sms-preset-btn',
					margin: '20px 20px 20px 20px',
					textSize: '16px'
				},
				{
					xtype: 'button',
					iconAlign: 'top',
					width: 220,
					height: 220,
					padding: '0 0 0 0',
					backgroundImage: '',
					scale: 'small',
					smsExec: 'jsDesktop=pos.preset.start',
					smsOptions: {
						smsSubView: 'Pos.Preset.Beverages',
						smsView: 14,
						itemId: 'workspace_card14'
					},
					smsAlias: 'button_1',
					text: 'Beverages',
					icon: '/Bitmaps/9065.jpg',
					cls: 'sms-preset-btn',
					margin: '20px 20px 20px 20px',
					textSize: '16px'
				},
				{
					xtype: 'button',
					iconAlign: 'top',
					width: 220,
					height: 220,
					padding: '0 0 0 0',
					backgroundImage: '',
					scale: 'small',
					smsExec: 'jsDesktop=pos.preset.start',
					smsOptions: {
						smsSubView: 'Pos.Preset.Desserts'
					},
					smsAlias: 'button_2',
					text: 'Desserts',
					icon: '/Bitmaps/9042.jpeg',
					cls: 'sms-preset-btn',
					margin: '20px 20px 20px 20px',
					textSize: '16px'
				},
				{
					xtype: 'button',
					iconAlign: 'top',
					width: 220,
					height: 220,
					padding: '0 0 0 0',
					backgroundImage: '',
					scale: 'small',
					smsExec: 'jsDesktop=pos.preset.start',
					smsOptions: {
						smsSubView: 'Pos.Preset.Wraps'
					},
					smsAlias: 'button_3',
					text: 'Wraps',
					icon: '/Bitmaps/9046.jpg',
					cls: 'sms-preset-btn',
					margin: '20px 20px 20px 20px',
					textSize: '16px'
				}
			],
			smsAlias: 'container_0'
		}
	],
	padding: '0 0 0 0',
	margin: '0px 0px 0px 0px'
});