import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function Search() {
  const [selected, setSelected] = useState([]);
  const field = [];

  const handleDelete = (chipToDelete) => () => {
    setSelected((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      {selected && (
        <Paper
          sx={{
            display: "flex",
            justifyContent: "left",
            flexWrap: "wrap",
            listStyle: "",
          }}
          component="ul"
          elevation="0"
        >
          {selected.map((data) => {
            let icon;

            return (
              <ListItem key={data.key}>
                <Chip
                  style={{
                    backgroundColor: "#b2dfdb",
                    color: "#00796b",
                    fontWeight: "bold",
                  }}
                  icon={icon}
                  label={data.label.toUpperCase()}
                  onDelete={handleDelete(data)}
                />
              </ListItem>
            );
          })}
        </Paper>
      )}

      <Autocomplete
        multiple
        id="tags-outlined"
        options={items}
        getOptionLabel={(option) => option.label}
        onChange={(event, newValue) => {
          setSelected(selected.concat(newValue));
        }}
        value={field}
        renderInput={(params) => <TextField {...params} label="Select" />}
      />
    </Stack>
  );
}

const items = [
  { key: 0, label: "Chakra" },
  { key: 1, label: "CSS" },
  { key: 2, label: "Javascript" },
  { key: 3, label: "React" },
];
