import { Container, Box, Avatar, Typography, Grid } from '@mui/material';
import FlippableCard from './pages/FlippableCard';
import profileImage from './assets/DSC00445 Kopie.jpg'; // Import the image

import javaIcon from './assets/icons/icons8-java-100.png';
import javascriptIcon from './assets/icons/icons8-javascript-50.png';
import typescriptIcon from './assets/icons/icons8-typescript-50.png';
import haskellIcon from './assets/icons/icons8-haskell-100.png';
import pythonIcon from './assets/icons/icons8-python-50.png';
import nodejsIcon from './assets/icons/icons8-nodejs-48.png';
import viteIcon from './assets/icons/viteIcon.svg';
import reactIcon from './assets/icons/reactIcon.png';
import bunIcon from './assets/icons/Bun.svg'; // Adjust this to your actual file name
import mongodbIcon from './assets/icons/mongodbIcon.png';

function App() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Lato, sans-serif',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <Avatar
          alt="Michael"
          src={profileImage}
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h5" sx={{ marginTop: '10px' }}>
          Michael
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <FlippableCard
            frontText="About me"
            backText="Hey, I'm Michael and I'm 25. I'm currently finishing my bachelor's degree in computer science at KIT."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FlippableCard
            frontText="Work Experience"
            backText={
              <Box sx={{ textAlign: 'left', color: '#fff', padding: '10px 20px' }}>
                <Typography variant="subtitle1" sx={{ marginBottom: '5px' }}>Work Experience</Typography>
                <Box component="ul" sx={{ marginBottom: '5px' }}>
                  <li>One year as Backend Developer</li>
                  <li>One year as Fullstack Developer at KIT as Research Assistant</li>
                </Box>
              </Box>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FlippableCard
            frontText="Technology"
            backText={
              <Box sx={{ textAlign: 'left', color: '#fff', padding: '10px 20px' }}>
                <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>Languages</Typography>
                <Box sx={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                  <img src={javaIcon} alt="Java" style={{ width: '40px' }} />
                  <img src={javascriptIcon} alt="JavaScript" style={{ width: '40px' }} />
                  <img src={typescriptIcon} alt="TypeScript" style={{ width: '40px' }} />
                  <img src={haskellIcon} alt="Haskell" style={{ width: '40px' }} />
                  <img src={pythonIcon} alt="Python" style={{ width: '40px' }} />
                </Box>
                <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>Technologies</Typography>
                <Box sx={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                  <img src={nodejsIcon} alt="Node.js" style={{ width: '40px' }} />
                  <img src={viteIcon} alt="Vite" style={{ width: '40px' }} />
                  <img src={reactIcon} alt="React" style={{ width: '40px' }} />
                  <img src={bunIcon} alt="Bun" style={{ width: '40px' }} />
                </Box>
                <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>Databases</Typography>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <img src={mongodbIcon} alt="MongoDB" style={{ width: '40px' }} />
                </Box>
              </Box>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FlippableCard
            frontText="Hobbies"
            backText="In my free time, I enjoy dancing breakdance, playing guitar, and reading."
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
