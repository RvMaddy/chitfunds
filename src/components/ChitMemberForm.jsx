import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Paper
} from "@mui/material";
import axios from "axios";

const ChitMemberForm = ({ member, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    status: "ACTIVE"
  });

  useEffect(
    () => {
      if (member) {
        setFormData(member);
      }
    },
    [member]
  );

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (member) {
        await axios.put(`/api/chitmembers/${member.id}`, formData);
      } else {
        await axios.post("/api/chitmembers", formData);
      }
      onSubmitSuccess();
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        status: "ACTIVE"
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        {member ? "Edit Member" : "Add New Member"}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          margin="normal"
          required
          multiline
          rows={3}
        />
        <TextField
          fullWidth
          select
          label="Status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          margin="normal"
        >
          <MenuItem value="ACTIVE">Active</MenuItem>
          <MenuItem value="INACTIVE">Inactive</MenuItem>
          <MenuItem value="SUSPENDED">Suspended</MenuItem>
        </TextField>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          {member ? "Update" : "Submit"}
        </Button>
      </Box>
    </Paper>
  );
};

export default ChitMemberForm;
