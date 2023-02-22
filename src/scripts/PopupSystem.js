class PopupSystem
{
	constructor() {
		this.host = null;
		this.popupType = null;
		this.popupDefs = {};
	}

	init(host) {
		this.host = host;
	}
	registerPopup(id, popup) {
		this.popupDefs[id] = popup;
	}

	invokePopup(id) {
		if (this.host && this.popupDefs[id]) {
			this.host.$store.commit('setActivePopup', this.popupDefs[id]);
		}
	}
	
	closePopup() {
		this.popupType = null;
		this.popupProps = null;

		if (this.host) {
			this.host.closePopup();
		}
	}
}

const popupSystem = new PopupSystem();

export default popupSystem;
