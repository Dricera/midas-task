import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Footer = () => {
  return (

    <Box
      component="footer"
      sx={{
        // position: 'fixed',
        py: 2,
        // px: 2,
        mt: 'auto',
        bgcolor: 'background.primary',
        border: '1px solid black',
      }}
    >
      <Container maxWidth={false}>
        <Typography variant="body1" align="center" gutterBottom>
        Made with ❤️ by <a href="https://github.com/Dricera" target='_blank'>Dricera</a>
        </Typography>

      </Container>
    </Box>




  )
}
export default Footer