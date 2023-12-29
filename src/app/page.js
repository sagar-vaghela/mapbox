'use client';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '@/lib/features/posts/usersSlice';
import UserCard from '@/components/UserCard';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    users.length === 0 && dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="min-h-[calc(100vh-144px)] max-w-6xl mx-auto px-16 flex flex-col gap-6">
      <div className="self-start relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-yellow-300 rounded-md"></div>
        <p className="flex items-center gap-0.5 relative text-black font-bold rounded-md px-6 py-2 pr-5">
          List of Users
        </p>
      </div>
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
