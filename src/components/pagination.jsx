import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Paginations() {
  return (
    <Stack spacing={2} className="mt-4" sx={{ justifyContent: "flex-end" }}>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            "&:hover": {
                color: "white",
                backgroundColor: "rgb(239 68 68)",
            },
          },
          "& .Mui-selected": {
            color: "white",
            backgroundColor: "rgb(239 68 68)",
            border: "2px solid black",
          },
        }}
      />
    </Stack>
  );
}

export default Paginations;
