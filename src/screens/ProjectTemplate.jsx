import React, { useEffect, useState } from "react";
import { Container, Typography, Box, List, ListItem } from "@mui/material";
import colors from "../helpers/colors"; // Assuming you have colors defined
import projects from "../helpers/projects.json";
import { useParams } from "react-router-dom";

function ProjectTemplate() {
  const [project, setProject] = useState(null);
  const { pageIndex } = useParams(); 
  
  useEffect(() => {
    setProject(projects[pageIndex - 1]); 
  }, []);

  if (!project) return <div>Loading...</div>;

  return (
    <Container
      sx={{
        margin: "10vh 10vw", // Remove default margins
        padding: "10vh 5vw", // Add padding for better spacing
        height: "100vh", // Make it full height
        minWidth: "80vw",
        backgroundColor: "#FFFFFF", // Set background to white
        display: "flex", // Use flexbox for layout
        flexDirection: "column", // Stack items vertically
        justifyContent: "start", // Center vertically
        alignItems: "flex-start", // Align items to the left
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, color: colors.textDark, marginBottom: "2vh" }}
      >
        {project.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: colors.textDark, marginBottom: "2vh" }}
      >
        {project.description}
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 600, color: colors.textDark, marginBottom: "1vh" }}
      >
        Objectives
      </Typography>
      <List sx={{ color: colors.textDark, marginBottom: "2vh" }}>
        {project.objectives.map((objective, index) => (
          <ListItem key={index}>• {objective}</ListItem>
        ))}
      </List>

      <Typography
        variant="h5"
        sx={{ fontWeight: 600, color: colors.textDark, marginBottom: "1vh" }}
      >
        Methodology
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: colors.textDark, marginBottom: "2vh" }}
      >
        {project.methodology}
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 600, color: colors.textDark, marginBottom: "1vh" }}
      >
        Results
      </Typography>
      <Typography variant="body1" sx={{ color: colors.textDark }}>
        {project.results}
      </Typography>
    </Container>
  );
}

export default ProjectTemplate;
