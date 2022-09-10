import { useContext } from 'react';
import { validate } from '../utils/validate';
import { AuthContext } from './../contexts/AuthContext';
interface UseCanProps {
  permissions?: string[];
  roles?: string[];
}

export function useCan({ permissions, roles }: UseCanProps) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }

  const userHasValidPermissions = validate({
    user, permissions, roles
  })

  return userHasValidPermissions;
}