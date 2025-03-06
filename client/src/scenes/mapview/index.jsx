import { Box } from "@mui/material";
import Map from "../../components/Map";
import Assetlist from "../assetlist";

import { MOCK_ASSET_DATA } from "../../data/mockData";

const Mapview = () => {
  const center = {
    lat: 35.75,
    lng: -86.9,
  };
  const zoom = 6;

  return (
    <>
      <div>
        <div>
          <Map assetData={MOCK_ASSET_DATA} center={center} zoom={zoom}></Map>
        </div>
        <div>
          <Assetlist />
        </div>
      </div>
    </>
  );
};

export default Mapview;
