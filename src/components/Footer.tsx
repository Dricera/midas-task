import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Footer = () => {
  return (

    <Box
      component="footer"
      sx={{
        // position: 'fixed',
        py: 3,
        // px: 2,
        mt: 'auto',
        bgcolor: 'background.primary',
        border: '1px solid black',
      }}
    >
      <Container maxWidth={false}>
        <Typography variant="body1" align="center" gutterBottom>
          Footer Placeholder.
        </Typography>

      </Container>
    </Box>




  )
}
export default Footer