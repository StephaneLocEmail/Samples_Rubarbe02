Ext.define('eKiosk.view.Pos.Preset.Sandwiches', {
	extend: 'Ext.container.Container',
	alias: 'widget.pos.preset.sandwiches',
	defaultListenerScope: true,
	config: {
		smsEditor: {
			position: 'pos.preset.start',
			type: 'dynamic'
		},
		smsEditable: true
	},
	layout: {
		type: 'vbox',
		align: 'stretchmax',
		padding: '0 0 0 10',
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
					smsExec: 'jsDesktop=pos.preset.start',
					smsOptions: {
						smsSubView: 'Pos.Preset.Deli'
					},
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
				pack: 'center',
				align: 'begin'
			},
			flex: 1,
			padding: '0 0 0 0',
			margin: '0px 0px 0px 0px',
			items: [
				{
					xtype: 'button',
					iconAlign: 'top',
					width: 220,
					height: 220,
					padding: '0 0 0 0',
					smsExec: 'jsItemDetail=0000000009095',
					icon: '/Bitmaps/9095.jpg',
					scale: 'small',
					smsAlias: 'button_0',
					text: 'Angus Roast Beef Submarine',
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
					smsExec: 'jsItemDetail=0000000009083',
					icon: '/Bitmaps/9083.jpg',
					scale: 'small',
					smsAlias: 'button_1',
					text: 'Smoked Meat Pretzel Sandwich',
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
					smsExec: 'jsItemDetail=0000000009093',
					icon: '/Bitmaps/9093.jpg',
					scale: 'small',
					smsAlias: 'button_2',
					text: 'Smoked Turkey Baguette',
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
					smsExec: 'jsItemDetail=0000000009094',
					icon: '/Bitmaps/9094.jpg',
					scale: 'small',
					smsAlias: 'button_3',
					text: 'Pizza Submarine Sandwiches',
					cls: 'sms-preset-btn',
					margin: '20px 20px 20px 20px',
					textSize: '16px'
				}
			],
			smsAlias: 'container_0'
		},
		{
			xtype: 'container',
			layout: {
				type: 'hbox',
				pack: 'center',
				align: 'begin'
			},
			flex: 1,
			padding: '0 0 0 0',
			margin: '0px 0px 0px 0px',
			items: [
				{
					xtype: 'button',
					smsExec: 'jsItemDetail=0000000009092',
					iconAlign: 'top',
					width: 220,
					height: 220,
					padding: '0 0 0 0',
					icon: '/Bitmaps/9092.jpg',
					scale: 'small',
					smsAlias: 'button_0',
					text: 'Minced Beef Submarine',
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
					icon: '/Bitmaps/9096.jpg',
					scale: 'small',
					smsExec: 'jsItemDetail=0000000009096',
					smsAlias: 'button_1',
					text: 'BBQ Chicken Submarine',
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
					icon: '/Bitmaps/9097.jpg',
					scale: 'small',
					smsExec: 'jsItemDetail=0000000009097',
					smsAlias: 'button_2',
					text: 'Italian Submarine Sandwich',
					cls: 'sms-preset-btn',
					margin: '20px 20px 20px 20px',
					textSize: '16px'
				}
			],
			smsAlias: 'container_1'
		}
	],
	padding: '0 0 0 0',
	margin: '0px 0px 0px 0px'
});