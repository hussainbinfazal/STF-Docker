'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
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
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // axios user profile data
    const fetchUserProfile = async (): Promise<void> => {
      try {
        // TODO: Replace with actual API call
        const response = await axios.get(`/api/users/${userId}`);
        const data = response.data;
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
    return <div>Loading...</div>;
  }

  if (!userProfile) {
    return <div>User not found</div>;
  }

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-32 h-32 rounded-full mx-auto"
            />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-2">
              {userProfile.name}
            </h1>
            <p className="text-gray-600 mb-4">
              {userProfile.email}
            </p>
            <p className="text-gray-800 mb-4">
              {userProfile.bio}
            </p>
            <p className="text-sm text-gray-500">
              Member since: {new Date(userProfile.joinDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;