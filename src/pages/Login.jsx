import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Heading } from '@chakra-ui/react';
import { SupabaseAuthUI, useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return (
    <Container centerContent>
      <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="lg" maxWidth="md" width="100%">
        <Heading as="h2" size="lg" mb={4} textAlign="center">Login</Heading>
        <SupabaseAuthUI />
      </Box>
    </Container>
  );
};

export default Login;