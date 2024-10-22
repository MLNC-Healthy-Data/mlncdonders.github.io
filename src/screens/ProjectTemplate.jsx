import React, { useEffect, useState } from "react";
import { Container, Typography, Box, List, ListItem } from "@mui/material";
import colors from "../helpers/colors";
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
        margin: { xs: "5vh 5vw", sm: "10vh 5vw", md: "10vh 2vw" },
        padding: { xs: "5vh 1vw", sm: "10vh 5vw", md: "10vh 5vw" },
        // height: "100vh",
        width:  { xs: "80vw", sm: "80vw", md: "85vw" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "flex-start",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, color: colors.textDark, marginBottom: "2vh" }}
      >
        {project.title}
      </Typography>
      <Typography variant="body1" sx={{ color: "blue", marginBottom: "2vh" }}>
        <a href={project.URL}>Project Website </a>
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
        Contributor(s)
      </Typography>
      <Typography variant="body1" sx={{ color: colors.textDark }}>
        {project.contributors}
      </Typography>
    </Container>
  );
}

export default ProjectTemplate;
