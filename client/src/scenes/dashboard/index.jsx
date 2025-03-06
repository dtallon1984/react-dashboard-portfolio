import { Box } from "@mui/material";
//import Header from "../../components/Header";
import Map from "../../components/Map";
import { MOCK_ASSET_DATA } from "../../data/mockData";

const Dashboard = () => {
  const center = {
    lat: 35.75,
    lng: -86.9,
  };
  const zoom = 20;

  return (
    <>
      {/* <Box sx={{ height: "50vh" }}>
        <Map assetData={MOCK_ASSET_DATA} center={center} zoom={zoom}></Map>
      </Box>
      <Box sx={{ height: "50vh" }}>
        <div></div>
      </Box> */}
    </>
  );
};

export default Dashboard;
