
import { Notes } from '../components/Notes';
import { Container, Typography, Divider } from '@mui/material';


function Home (props) {
    const { notes } = props;
    return (
        <Container maxWidth="md" className="mt-5" sx={{
            backgroundColor: '#f5f5f5', // Warna latar belakang
            padding: 3, // Memberikan ruang di sekitar konten
            borderRadius: 8, // Memberikan sudut yang melengkung
          }}>
      <Typography variant="h4" component="div" className="bg-second bg-gradient text-white rounded p-1" textAlign="center" 
      sx={{
        backgroundColor: 'secondary.main', 
        backgroundImage: theme => `radial-gradient(circle, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        color: 'common.white', 
        borderRadius: 2, 
        padding: 1, 
        marginBottom: 5,
        marginTop: 5
      }}>
        NOTES
      </Typography>

      {notes.map((note) => (
        <div key={note.id}>
          <Notes
            title={note.title}
            createdAt={note.createdAt}
            body={note.body}
          />
          <Divider />
        </div>
      ))}
    </Container>
    );
}
export { Home };
