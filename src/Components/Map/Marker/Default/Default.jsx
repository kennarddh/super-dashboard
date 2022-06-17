import Leaflet from 'leaflet'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const Default = Leaflet.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
})

export default Default
