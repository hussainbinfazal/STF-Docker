
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Avatar, Grid, Paper } from '@mui/material';

// User profile interface
interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  joinDate: string;
}

const UserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userProfile, setUserProfile] = React.useState<UserProfile | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    // Fetch user profile data
    const fetchUserProfile = async () => {
      try {
        // TODO: Replace with actual API call
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUserProfile(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!userProfile) {
    return <Typography>User not found</Typography>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              src={userProfile.avatar}
              alt={userProfile.name}
              sx={{ width: 150, height: 150, margin: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              {userProfile.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {userProfile.email}
            </Typography>
            <Typography variant="body1" paragraph>
              {userProfile.bio}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Member since: {new Date(userProfile.joinDate).toLocaleDateString()}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default UserProfile;