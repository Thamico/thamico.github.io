import { useState, ReactNode } from 'react';
import { Typography, Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const breatheAnimation = keyframes`
  0% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
  50% { box-shadow: 0 0 40px rgba(255, 255, 255, 1); }
  100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
`;

const FlippingCardWrapper = styled(Box)({
  perspective: '1000px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 10px', // Add margin to each card wrapper for spacing
  '& .card': {
    width: '350px', // Base width
    height: '250px', // Base height
    transition: 'transform 0.6s, width 0.6s, height 0.6s',
    transformStyle: 'preserve-3d',
    position: 'relative',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundImage: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
    backfaceVisibility: 'hidden',
  },
  '& .card.flip': {
    transform: 'rotateY(180deg)',
    width: '800px', // Increased width to cover all flip cards
    height: '400px', // Increased height proportionally
  },
  '& .cardContent': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px',
    padding: '10px', // Reduce padding
    boxSizing: 'border-box',
    backfaceVisibility: 'hidden',
  },
  '& .cardFront, & .cardBack': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  '& .cardFront': {
    backgroundImage: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
  },
  '& .cardFront:hover': {
    animation: `${breatheAnimation} 3s ease-in-out infinite`,
  },
  '& .cardBack': {
    backgroundImage: 'linear-gradient(120deg, #ff9a9e 0%, #fecfef 99%, #fe99ff 100%)', // Softer gradient for the back
    transform: 'rotateY(180deg)',
  },
  '& .frontText, & .backText': {
    fontFamily: 'Roboto, sans-serif',
    color: '#fff',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    lineHeight: '1.5',
    fontWeight: '400',
  },
});

const FlippableCard = ({ frontText, backText }: { frontText: string, backText: ReactNode }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <FlippingCardWrapper onClick={handleFlip}>
      <Box className={`card ${flipped ? 'flip' : ''}`}>
        <Box className="cardContent cardFront">
          <Typography variant="h5" className="frontText">
            {frontText}
          </Typography>
        </Box>
        <Box className="cardContent cardBack">
          <Typography variant="body1" className="backText">
            {backText}
          </Typography>
        </Box>
      </Box>
    </FlippingCardWrapper>
  );
};

export default FlippableCard;
