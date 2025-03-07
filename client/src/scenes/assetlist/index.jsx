import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { MOCK_ASSET_DATA } from "../../data/mockData";
import { MOCK_REGION_DATA } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Dropdown from "../../shared/components/Dropdown";

const Assetlist = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [regionSelection, setregionSelection] = useState(null);
  const [assetList, setAssetList] = useState(MOCK_ASSET_DATA);

  const regionSelectHandler = (option) => {
    setregionSelection(option);

    setAssetList(
      MOCK_ASSET_DATA.filter((asset) => asset.MarketId === option.value)
    );
  };

  const options = MOCK_REGION_DATA.map((region) => {
    return { label: region.Name, value: region.id };
  });

  const columns = [
    { field: "ProperyName", headerName: "Name", flex: 1 },
    { field: "Address", headerName: "Address", flex: 1 },
    {
      field: "RoofArea",
      headerName: "Roof Area",
      type: "number",
      headerAlign: "left",
    },
    {
      field: "RiskScore",
      headerName: "Risk Score",
      type: "number",
      headerAlign: "left",
    },
    {
      field: "RiskThreshold",
      headerName: "Risk Threshold",
      type: "number",
      headerAlign: "left",
    },
    {
      field: "LastDroneFlight",
      headerName: "Last Assessment",
      flex: 1,
    },
  ];

  return (
    <Box>
      <Header title="Sortable DataTable" subtitle="Viewing Data in a Sortable Table" />
      <div>
        <Dropdown
          options={options}
          value={regionSelection}
          onChange={regionSelectHandler}
        />
      </div>
      <Box
        m="50px 0px 0px 50px"
        height="75vh"
        width="80vw"

        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={assetList} columns={columns} />
      </Box>
    </Box>
  );
};

export default Assetlist;
