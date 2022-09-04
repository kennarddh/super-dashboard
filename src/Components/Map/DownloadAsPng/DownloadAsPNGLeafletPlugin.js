import html2canvas from 'html2canvas'

import L from 'leaflet'

L.Control.DownloadAsPNG = L.Control.extend({
	options: {
		title: 'Save map',
		position: 'topright',
	},

	onAdd() {
		const container = L.DomUtil.create('button', 'download-png-control')

		this.addCss()

		L.DomEvent.addListener(container, 'click', this.saveAs, this)

		return container
	},

	downloadBase64File(contentBase64, fileName) {
		const downloadLink = document.createElement('a')

		downloadLink.href = contentBase64
		downloadLink.target = '_self'
		downloadLink.download = fileName
		downloadLink.click()
	},

	saveAs(event) {
		L.DomEvent.stopPropagation(event)

		const container = this._map.getContainer()

		this.hideOverlay()
		this.hideMarker()
		this.hideShadow()
		this.hideTooltip()
		this.hidePopup()
		this.hideControl()

		html2canvas(container, { useCORS: true })
			.then(canvas => {
				this.downloadBase64File(canvas.toDataURL(), 'map')

				this.showOverlay()
				this.showMarker()
				this.showShadow()
				this.showTooltip()
				this.showPopup()
				this.showControl()
			})
			.catch(error => {
				throw new Error(
					'Leaflet plugin save as png html2canvar error',
					{ cause: error }
				)
			})
	},

	hideOverlay() {
		const container = this._map.getContainer()

		const overlay = container.querySelector(
			'.leaflet-map-pane .leaflet-overlay-pane'
		)

		overlay.style.visibility = 'hidden'
	},

	showOverlay() {
		const container = this._map.getContainer()

		const overlay = container.querySelector(
			'.leaflet-map-pane .leaflet-overlay-pane'
		)

		overlay.style.visibility = 'visible'
	},

	hideMarker() {
		const container = this._map.getContainer()

		const overlay = container.querySelector(
			'.leaflet-map-pane .leaflet-marker-pane'
		)

		overlay.style.visibility = 'hidden'
	},

	showMarker() {
		const container = this._map.getContainer()

		const overlay = container.querySelector(
			'.leaflet-map-pane .leaflet-marker-pane'
		)

		overlay.style.visibility = 'visible'
	},

	hideShadow() {
		const container = this._map.getContainer()

		const overlay = container.querySelector(
			'.leaflet-map-pane .leaflet-shadow-pane'
		)

		overlay.style.visibility = 'hidden'
	},

	showShadow() {
		const container = this._map.getContainer()

		const overlay = container.querySelector(
			'.leaflet-map-pane .leaflet-shadow-pane'
		)

		overlay.style.visibility = 'visible'
	},

	hideTooltip() {
		const container = this._map.getContainer()

		const overlay = container.querySelector(
			'.leaflet-map-pane .leaflet-tooltip-pane'
		)

		overlay.style.visibility = 'hidden'
	},

	showTooltip() {
		const container = this._map.getContainer()

		const overlay = container.querySelector(
			'.leaflet-map-pane .leaflet-tooltip-pane'
		)

		overlay.style.visibility = 'visible'
	},

	hidePopup() {
		const container = this._map.getContainer()

		const overlay = container.querySelector(
			'.leaflet-map-pane .leaflet-popup-pane'
		)

		overlay.style.visibility = 'hidden'
	},

	showPopup() {
		const container = this._map.getContainer()

		const overlay = container.querySelector(
			'.leaflet-map-pane .leaflet-popup-pane'
		)

		overlay.style.visibility = 'visible'
	},

	hideControl() {
		const container = this._map.getContainer()

		const overlay = container.querySelector('.leaflet-control-container')

		overlay.style.visibility = 'hidden'
	},

	showControl() {
		const container = this._map.getContainer()

		const overlay = container.querySelector('.leaflet-control-container')

		overlay.style.visibility = 'visible'
	},

	addCss() {
		const css = document.createElement('style')

		css.innerHTML = `
			.download-png-control {
				background-color: #ffffff;
				width: 30px;
				height: 30px;
				background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDg1IDQ4NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg1IDQ4NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MjYuNSw0NThoLTM2OEM1MSw0NTgsNDUsNDY0LDQ1LDQ3MS41UzUxLDQ4NSw1OC41LDQ4NWgzNjhjNy41LDAsMTMuNS02LDEzLjUtMTMuNVM0MzQsNDU4LDQyNi41LDQ1OHoiLz4NCgkJPHBhdGggZD0iTTIzMywzNzguN2MyLjUsMi41LDYsNCw5LjUsNHM3LTEuNCw5LjUtNGwxMDcuNS0xMDcuNWM1LjMtNS4zLDUuMy0xMy44LDAtMTkuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBMMjU2LDMzNi41di0zMjMNCgkJCUMyNTYsNiwyNTAsMCwyNDIuNSwwUzIyOSw2LDIyOSwxMy41djMyM2wtODQuNC04NC40Yy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMHMtNS4zLDEzLjgsMCwxOS4xTDIzMywzNzguN3oiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==);
				background-size: 20px 20px;
				background-repeat: no-repeat;
				background-position: center;
				border-radius: 4px;
				border: none;
				cursor: pointer;
			}
		`

		document.body.appendChild(css)
	},
})
