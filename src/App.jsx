import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <Flex as="nav" p={4} bg="teal.500" color="white">
        <Box>
          <Link as={RouterLink} to="/" p={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/login" p={2}>
            Login
          </Link>
          <Link as={RouterLink} to="/signup" p={2}>
            Sign Up
          </Link>
        </Box>
        <Spacer />
      </Flex>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <div>Protected Content</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;