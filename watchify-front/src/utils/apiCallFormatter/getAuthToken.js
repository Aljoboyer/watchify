export const getAuthToken = () => {
  if (typeof window === 'undefined') return null; // SSR-safe

  const userDataRaw = localStorage.getItem('watchify_user');
  try {
    const userData = JSON.parse(userDataRaw || '{}');
    
    return userData?.token || null;
  } catch (err) {
    console.error('Error parsing ff_user:', err);
    return null;
  }
};
