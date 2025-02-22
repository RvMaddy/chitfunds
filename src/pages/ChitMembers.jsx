import React, { useState } from "react";
import { Container } from "@mui/material";
import ChitMemberList from "../components/ChitMemberList";
import ChitMemberForm from "../components/ChitMemberForm";

const ChitMembers = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleEdit = member => {
    setSelectedMember(member);
  };

  const handleSubmitSuccess = () => {
    setSelectedMember(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <ChitMemberForm
        member={selectedMember}
        onSubmitSuccess={handleSubmitSuccess}
      />
      <ChitMemberList onEdit={handleEdit} />
    </Container>
  );
};

export default ChitMembers;
