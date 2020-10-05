window.skins=window.skins||{};
window.baccarat=window.baccarat||{};
window.Base=window.Base||{};
window.MineSlot=window.MineSlot||{};
window.Slot=window.Slot||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/haydn_skins/baccarat/Main.exml'] = window.baccarat.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["btnPlay","btnStop","btnVolumeB","btnVolumeS","lbl","imgABC"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.btnPlay_i(),this.btnStop_i(),this.btnVolumeB_i(),this.btnVolumeS_i(),this.lbl_i(),this.imgABC_i()];
	}
	var _proto = Main.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x000eff;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.source = "ng_bg_01_png";
		t.width = 1600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnPlay_i = function () {
		var t = new eui.Button();
		this.btnPlay = t;
		t.label = "btnPlay";
		t.x = 116.008;
		t.y = 757.346;
		return t;
	};
	_proto.btnStop_i = function () {
		var t = new eui.Button();
		this.btnStop = t;
		t.label = "btnStop";
		t.x = 498.84;
		t.y = 763.011;
		return t;
	};
	_proto.btnVolumeB_i = function () {
		var t = new eui.Button();
		this.btnVolumeB = t;
		t.label = "btnVolumeB";
		t.x = 114.315;
		t.y = 660.29;
		return t;
	};
	_proto.btnVolumeS_i = function () {
		var t = new eui.Button();
		this.btnVolumeS = t;
		t.label = "btnVolumeS";
		t.x = 245.707;
		t.y = 664.509;
		return t;
	};
	_proto.lbl_i = function () {
		var t = new eui.Label();
		this.lbl = t;
		t.text = "Label";
		t.x = 596.169;
		t.y = 260.255;
		return t;
	};
	_proto.imgABC_i = function () {
		var t = new eui.Image();
		this.imgABC = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "Icon_07_png";
		t.verticalCenter = 0;
		t.width = 302;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/haydn_skins/base/ButtonSkin.exml'] = window.Base.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	var ButtonSkin$Skin1 = 	(function (_super) {
		__extends(ButtonSkin$Skin1, _super);
		function ButtonSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","icon_08_blur_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","")
					])
			];
		}
		var _proto = ButtonSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Icon_08_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ButtonSkin$Skin1;
	})(eui.Skin);

	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["m_Btn"];
		
		this.elementsContent = [this.m_Btn_i()];
	}
	var _proto = ButtonSkin.prototype;

	_proto.m_Btn_i = function () {
		var t = new eui.Button();
		this.m_Btn = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.skinName = ButtonSkin$Skin1;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/haydn_skins/base/LoadingSkin.exml'] = window.Base.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["btnPlay","btnStop","btnVolumeB","btnVolumeS","lbl","imgABC"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.btnPlay_i(),this.btnStop_i(),this.btnVolumeB_i(),this.btnVolumeS_i(),this.lbl_i(),this.imgABC_i()];
	}
	var _proto = LoadingSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x000eff;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.source = "ng_bg_01_png";
		t.width = 1600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnPlay_i = function () {
		var t = new eui.Button();
		this.btnPlay = t;
		t.label = "btnPlay";
		t.x = 116.008;
		t.y = 757.346;
		return t;
	};
	_proto.btnStop_i = function () {
		var t = new eui.Button();
		this.btnStop = t;
		t.label = "btnStop";
		t.x = 498.84;
		t.y = 763.011;
		return t;
	};
	_proto.btnVolumeB_i = function () {
		var t = new eui.Button();
		this.btnVolumeB = t;
		t.label = "btnVolumeB";
		t.x = 114.315;
		t.y = 660.29;
		return t;
	};
	_proto.btnVolumeS_i = function () {
		var t = new eui.Button();
		this.btnVolumeS = t;
		t.label = "btnVolumeS";
		t.x = 245.707;
		t.y = 664.509;
		return t;
	};
	_proto.lbl_i = function () {
		var t = new eui.Label();
		this.lbl = t;
		t.text = "Label";
		t.x = 596.169;
		t.y = 260.255;
		return t;
	};
	_proto.imgABC_i = function () {
		var t = new eui.Image();
		this.imgABC = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "Icon_07_png";
		t.verticalCenter = 0;
		t.width = 302;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);generateEUI.paths['resource/haydn_skins/base/TopToolSkin.exml'] = window.Base.TopToolSkin = (function (_super) {
	__extends(TopToolSkin, _super);
	var TopToolSkin$Skin2 = 	(function (_super) {
		__extends(TopToolSkin$Skin2, _super);
		function TopToolSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_icon_00_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_icon_00_png")
					])
			];
		}
		var _proto = TopToolSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_icon_00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TopToolSkin$Skin2;
	})(eui.Skin);

	var TopToolSkin$Skin3 = 	(function (_super) {
		__extends(TopToolSkin$Skin3, _super);
		function TopToolSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_icon_01_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_icon_01_png")
					])
			];
		}
		var _proto = TopToolSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_icon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TopToolSkin$Skin3;
	})(eui.Skin);

	var TopToolSkin$Skin4 = 	(function (_super) {
		__extends(TopToolSkin$Skin4, _super);
		function TopToolSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_icon_02_black_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_icon_02_black_png")
					])
			];
		}
		var _proto = TopToolSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_icon_02_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TopToolSkin$Skin4;
	})(eui.Skin);

	var TopToolSkin$Skin5 = 	(function (_super) {
		__extends(TopToolSkin$Skin5, _super);
		function TopToolSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_icon_03_black_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_icon_03_black_png")
					])
			];
		}
		var _proto = TopToolSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_icon_03_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TopToolSkin$Skin5;
	})(eui.Skin);

	var TopToolSkin$Skin6 = 	(function (_super) {
		__extends(TopToolSkin$Skin6, _super);
		function TopToolSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_icon_04_black_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_icon_04_black_png")
					])
			];
		}
		var _proto = TopToolSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_icon_04_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TopToolSkin$Skin6;
	})(eui.Skin);

	var TopToolSkin$Skin7 = 	(function (_super) {
		__extends(TopToolSkin$Skin7, _super);
		function TopToolSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_icon_05_black_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_icon_05_black_png")
					])
			];
		}
		var _proto = TopToolSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_icon_05_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TopToolSkin$Skin7;
	})(eui.Skin);

	function TopToolSkin() {
		_super.call(this);
		this.skinParts = ["m_BtnVolumeOn","m_BtnVolumeOff","m_BtnRank","m_BtnShoppingCart","m_BtnFullScreenOn","m_BtnFullScreenOff","m_Bottom"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this.m_Bottom_i()];
	}
	var _proto = TopToolSkin.prototype;

	_proto.m_Bottom_i = function () {
		var t = new eui.Group();
		this.m_Bottom = t;
		t.height = 900;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.visible = true;
		t.width = 1600;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.m_BtnVolumeOn_i(),this.m_BtnVolumeOff_i(),this.m_BtnRank_i(),this.m_BtnShoppingCart_i(),this.m_BtnFullScreenOn_i(),this.m_BtnFullScreenOff_i()];
		return t;
	};
	_proto.m_BtnVolumeOn_i = function () {
		var t = new eui.Button();
		this.m_BtnVolumeOn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 20;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.visible = true;
		t.x = 1225;
		t.skinName = TopToolSkin$Skin2;
		return t;
	};
	_proto.m_BtnVolumeOff_i = function () {
		var t = new eui.Button();
		this.m_BtnVolumeOff = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 20;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.visible = true;
		t.x = 1225;
		t.skinName = TopToolSkin$Skin3;
		return t;
	};
	_proto.m_BtnRank_i = function () {
		var t = new eui.Button();
		this.m_BtnRank = t;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 20;
		t.visible = true;
		t.x = 1325;
		t.skinName = TopToolSkin$Skin4;
		return t;
	};
	_proto.m_BtnShoppingCart_i = function () {
		var t = new eui.Button();
		this.m_BtnShoppingCart = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 20;
		t.visible = true;
		t.x = 1425;
		t.skinName = TopToolSkin$Skin5;
		return t;
	};
	_proto.m_BtnFullScreenOn_i = function () {
		var t = new eui.Button();
		this.m_BtnFullScreenOn = t;
		t.height = 58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 20;
		t.visible = true;
		t.x = 1530;
		t.skinName = TopToolSkin$Skin6;
		return t;
	};
	_proto.m_BtnFullScreenOff_i = function () {
		var t = new eui.Button();
		this.m_BtnFullScreenOff = t;
		t.height = 58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 20;
		t.visible = true;
		t.x = 1530;
		t.skinName = TopToolSkin$Skin7;
		return t;
	};
	return TopToolSkin;
})(eui.Skin);generateEUI.paths['resource/haydn_skins/LobbySkin.exml'] = window.LobbySkin = (function (_super) {
	__extends(LobbySkin, _super);
	function LobbySkin() {
		_super.call(this);
		this.skinParts = ["imgABC"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this._Image1_i(),this.imgABC_i()];
	}
	var _proto = LobbySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.source = "ng_bg_01_png";
		t.width = 1600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgABC_i = function () {
		var t = new eui.Image();
		this.imgABC = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 190;
		t.horizontalCenter = -2;
		t.source = "Icon_09_png";
		t.verticalCenter = -246;
		t.width = 302;
		return t;
	};
	return LobbySkin;
})(eui.Skin);generateEUI.paths['resource/haydn_skins/mineSlot/MainSkin.exml'] = window.MineSlot.MainSkin = (function (_super) {
	__extends(MainSkin, _super);
	function MainSkin() {
		_super.call(this);
		this.skinParts = ["BG","FG","m_GpMainSpin","BG0","FG0","m_GpFreeSpin","m_GpEffect"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this._Rect1_i(),this.m_GpMainSpin_i(),this.m_GpFreeSpin_i(),this.m_GpEffect_i()];
	}
	var _proto = MainSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0x000eff;
		t.top = 0;
		t.visible = true;
		t.x = -800.0000000000005;
		t.y = -450.0000000000001;
		return t;
	};
	_proto.m_GpMainSpin_i = function () {
		var t = new eui.Group();
		this.m_GpMainSpin = t;
		t.height = 1196;
		t.horizontalCenter = 0;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 2135;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.BG_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.FG_i()];
		return t;
	};
	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.847;
		t.scaleY = 0.83;
		t.source = "ng_bg_01_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ng_bg_02_png";
		t.visible = true;
		t.x = 285;
		t.y = 230;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ng_bg_02_png";
		t.visible = true;
		t.x = 595;
		t.y = 230;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ng_bg_02_png";
		t.visible = true;
		t.x = 910;
		t.y = 230;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ng_bg_02_png";
		t.visible = true;
		t.x = 1225;
		t.y = 230;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ng_bg_02_png";
		t.visible = true;
		t.x = 1535;
		t.y = 230;
		return t;
	};
	_proto.FG_i = function () {
		var t = new eui.Image();
		this.FG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ng_bg_03_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.m_GpFreeSpin_i = function () {
		var t = new eui.Group();
		this.m_GpFreeSpin = t;
		t.height = 1196;
		t.horizontalCenter = 0;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 2135;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.BG0_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.FG0_i()];
		return t;
	};
	_proto.BG0_i = function () {
		var t = new eui.Image();
		this.BG0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.847;
		t.scaleY = 0.83;
		t.source = "fg_bg_00_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "fg_bg_02_png";
		t.visible = true;
		t.x = 285;
		t.y = 230;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "fg_bg_02_png";
		t.visible = true;
		t.x = 595;
		t.y = 230;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "fg_bg_02_png";
		t.visible = true;
		t.x = 910;
		t.y = 230;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "fg_bg_02_png";
		t.visible = true;
		t.x = 1225;
		t.y = 230;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "fg_bg_02_png";
		t.visible = true;
		t.x = 1535;
		t.y = 230;
		return t;
	};
	_proto.FG0_i = function () {
		var t = new eui.Image();
		this.FG0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "fg_bg_03_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.m_GpEffect_i = function () {
		var t = new eui.Group();
		this.m_GpEffect = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 1600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return MainSkin;
})(eui.Skin);generateEUI.paths['resource/haydn_skins/mineSlot/ReelSkin.exml'] = window.MineSlot.ReelSkin = (function (_super) {
	__extends(ReelSkin, _super);
	function ReelSkin() {
		_super.call(this);
		this.skinParts = ["m_Mask","m_BgGroup","m_FgGroup"];
		
		this.elementsContent = [this.m_Mask_i(),this.m_BgGroup_i(),this.m_FgGroup_i()];
	}
	var _proto = ReelSkin.prototype;

	_proto.m_Mask_i = function () {
		var t = new eui.Rect();
		this.m_Mask = t;
		t.alpha = 0.75;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 1;
		t.height = 760;
		t.width = 390;
		t.x = -38.5;
		t.y = 10;
		return t;
	};
	_proto.m_BgGroup_i = function () {
		var t = new eui.Group();
		this.m_BgGroup = t;
		t.height = 780;
		t.visible = true;
		t.width = 315;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.m_FgGroup_i = function () {
		var t = new eui.Group();
		this.m_FgGroup = t;
		t.height = 780;
		t.visible = true;
		t.width = 315;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ReelSkin;
})(eui.Skin);generateEUI.paths['resource/haydn_skins/mineSlot/SymbolSkin.exml'] = window.MineSlot.SymbolSkin = (function (_super) {
	__extends(SymbolSkin, _super);
	function SymbolSkin() {
		_super.call(this);
		this.skinParts = ["m_Blur","m_Normal","m_Group"];
		
		this.height = 220;
		this.width = 310;
		this.elementsContent = [this.m_Group_i()];
	}
	var _proto = SymbolSkin.prototype;

	_proto.m_Group_i = function () {
		var t = new eui.Group();
		this.m_Group = t;
		t.anchorOffsetX = 155;
		t.anchorOffsetY = 110;
		t.height = 220;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 310;
		t.elementsContent = [this.m_Blur_i(),this.m_Normal_i()];
		return t;
	};
	_proto.m_Blur_i = function () {
		var t = new eui.Image();
		this.m_Blur = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_01_blur_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.x = 1;
		t.y = -19;
		return t;
	};
	_proto.m_Normal_i = function () {
		var t = new eui.Image();
		this.m_Normal = t;
		t.anchorOffsetX = 155;
		t.anchorOffsetY = 110;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Icon_01_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	return SymbolSkin;
})(eui.Skin);generateEUI.paths['resource/haydn_skins/slot/ScoreBarSkin.exml'] = window.Slot.ScoreBarSkin = (function (_super) {
	__extends(ScoreBarSkin, _super);
	var ScoreBarSkin$Skin8 = 	(function (_super) {
		__extends(ScoreBarSkin$Skin8, _super);
		function ScoreBarSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_spin_black_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_spin_black_png")
					])
			];
		}
		var _proto = ScoreBarSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_spin_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ScoreBarSkin$Skin8;
	})(eui.Skin);

	var ScoreBarSkin$Skin9 = 	(function (_super) {
		__extends(ScoreBarSkin$Skin9, _super);
		function ScoreBarSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_stop_black_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_stop_black_png")
					])
			];
		}
		var _proto = ScoreBarSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_stop_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ScoreBarSkin$Skin9;
	})(eui.Skin);

	var ScoreBarSkin$Skin10 = 	(function (_super) {
		__extends(ScoreBarSkin$Skin10, _super);
		function ScoreBarSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_turbo_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_turbo_png")
					])
			];
		}
		var _proto = ScoreBarSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_turbo_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ScoreBarSkin$Skin10;
	})(eui.Skin);

	var ScoreBarSkin$Skin11 = 	(function (_super) {
		__extends(ScoreBarSkin$Skin11, _super);
		function ScoreBarSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_turbo_black_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_turbo_black_png")
					])
			];
		}
		var _proto = ScoreBarSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_turbo_black_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ScoreBarSkin$Skin11;
	})(eui.Skin);

	function ScoreBarSkin() {
		_super.call(this);
		this.skinParts = ["m_BtnSpin","m_BtnStop","center","bg","m_LogoName","m_GroupCredit","m_GroupWin","m_GroupBet","m_BtnTurboOn","m_BtnTurboOff","bgLastWin","m_GroupLastWin","m_Bottom"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this.center_i(),this.m_Bottom_i()];
	}
	var _proto = ScoreBarSkin.prototype;

	_proto.center_i = function () {
		var t = new eui.Group();
		this.center = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 1600;
		t.elementsContent = [this.m_BtnSpin_i(),this.m_BtnStop_i()];
		return t;
	};
	_proto.m_BtnSpin_i = function () {
		var t = new eui.Button();
		this.m_BtnSpin = t;
		t.right = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -120;
		t.visible = true;
		t.skinName = ScoreBarSkin$Skin8;
		return t;
	};
	_proto.m_BtnStop_i = function () {
		var t = new eui.Button();
		this.m_BtnStop = t;
		t.right = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = -120;
		t.visible = true;
		t.skinName = ScoreBarSkin$Skin9;
		return t;
	};
	_proto.m_Bottom_i = function () {
		var t = new eui.Group();
		this.m_Bottom = t;
		t.height = 900;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.visible = true;
		t.width = 1600;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this.m_LogoName_i(),this.m_GroupCredit_i(),this.m_GroupWin_i(),this.m_GroupBet_i(),this.m_BtnTurboOn_i(),this.m_BtnTurboOff_i(),this.bgLastWin_i(),this.m_GroupLastWin_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_00_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.m_LogoName_i = function () {
		var t = new eui.Image();
		this.m_LogoName = t;
		t.bottom = 15;
		t.left = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "msg_haydn_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.m_GroupCredit_i = function () {
		var t = new eui.Group();
		this.m_GroupCredit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 82;
		t.height = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = true;
		t.width = 200;
		t.x = 160;
		return t;
	};
	_proto.m_GroupWin_i = function () {
		var t = new eui.Group();
		this.m_GroupWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 82;
		t.height = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 300;
		t.x = 563;
		return t;
	};
	_proto.m_GroupBet_i = function () {
		var t = new eui.Group();
		this.m_GroupBet = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 82;
		t.height = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 120;
		t.x = 1072;
		return t;
	};
	_proto.m_BtnTurboOn_i = function () {
		var t = new eui.Button();
		this.m_BtnTurboOn = t;
		t.bottom = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.x = 1515;
		t.y = 787;
		t.skinName = ScoreBarSkin$Skin10;
		return t;
	};
	_proto.m_BtnTurboOff_i = function () {
		var t = new eui.Button();
		this.m_BtnTurboOff = t;
		t.bottom = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.x = 1515;
		t.y = 797;
		t.skinName = ScoreBarSkin$Skin11;
		return t;
	};
	_proto.bgLastWin_i = function () {
		var t = new eui.Image();
		this.bgLastWin = t;
		t.bottom = 11;
		t.left = 550;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "msg_title_lastwin_png";
		t.touchEnabled = false;
		t.y = 787;
		return t;
	};
	_proto.m_GroupLastWin_i = function () {
		var t = new eui.Group();
		this.m_GroupLastWin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 34;
		t.height = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 300;
		t.x = 680;
		t.y = 931;
		return t;
	};
	return ScoreBarSkin;
})(eui.Skin);generateEUI.paths['resource/haydn_skins/test/TestSceneSkin.exml'] = window.TestSceneSkin = (function (_super) {
	__extends(TestSceneSkin, _super);
	function TestSceneSkin() {
		_super.call(this);
		this.skinParts = ["btnPlay","btnStop","btnVolumeB","btnVolumeS","lbl","imgABC"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.btnPlay_i(),this.btnStop_i(),this.btnVolumeB_i(),this.btnVolumeS_i(),this.lbl_i(),this.imgABC_i()];
	}
	var _proto = TestSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x000eff;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.source = "ng_bg_01_png";
		t.width = 1600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnPlay_i = function () {
		var t = new eui.Button();
		this.btnPlay = t;
		t.label = "btnPlay";
		t.x = 116.008;
		t.y = 757.346;
		return t;
	};
	_proto.btnStop_i = function () {
		var t = new eui.Button();
		this.btnStop = t;
		t.label = "btnStop";
		t.x = 498.84;
		t.y = 763.011;
		return t;
	};
	_proto.btnVolumeB_i = function () {
		var t = new eui.Button();
		this.btnVolumeB = t;
		t.label = "btnVolumeB";
		t.x = 99.495;
		t.y = 668.523;
		return t;
	};
	_proto.btnVolumeS_i = function () {
		var t = new eui.Button();
		this.btnVolumeS = t;
		t.label = "btnVolumeS";
		t.x = 245.707;
		t.y = 664.509;
		return t;
	};
	_proto.lbl_i = function () {
		var t = new eui.Label();
		this.lbl = t;
		t.text = "Label";
		t.x = 596.169;
		t.y = 260.255;
		return t;
	};
	_proto.imgABC_i = function () {
		var t = new eui.Image();
		this.imgABC = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "Icon_07_png";
		t.verticalCenter = 0;
		t.width = 302;
		return t;
	};
	return TestSceneSkin;
})(eui.Skin);