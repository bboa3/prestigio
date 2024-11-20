import LoadingIndicator from '@/components/LoadingIndicator';
import getUserAuthGroup from '@/config/auth/getUserAuthGroup';
import { UserRole } from '@/types/schema';
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export interface AuthUser {
  authId?: string;
  identityId: string;
  userRole: UserRole;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = useCallback(async () => {
    try {
      setLoading(true);
      const authResult = await getUserAuthGroup();
      if (!authResult) return;

      const { authGroup, authId, identityId } = authResult;

      setUser({
        authId,
        identityId,
        userRole: authGroup,
      });
    } catch (error) {
      console.error('Error fetching current user:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const value = useMemo(() => ({ user, loading, refreshUser }), [user, loading, refreshUser]);

  return (
    <AuthContext.Provider value={value}>
      {loading ? <LoadingIndicator /> : children}
    </AuthContext.Provider>
  );
};
