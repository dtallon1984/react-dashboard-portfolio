import {Icon} from '@mui/material';
import LocationOutlinedIcon from "@mui/icons-material/LocationCityOutlined";

const LocationMarker = ({lat, lng, onClick}) => {
  return (

    <div className='location-marker' onClick={onClick}>
        {/* <Icon icon={locationOutlinedIcon} className='location-icon'/> */}
        <LocationOutlinedIcon className='location-icon' />
    </div>
    
  )
}

export default LocationMarker