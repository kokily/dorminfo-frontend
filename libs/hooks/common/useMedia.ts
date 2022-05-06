import { useEffect, useState } from 'react';
import useIsMounted from './useIsMounted';

function useMedia(mediaQuery: string) {
  if (typeof window !== 'undefined') {
    const [matches, setMatches] = useState(
      () => window.matchMedia(mediaQuery).matches
    );
    const isMounted = useIsMounted();

    useEffect(() => {
      if (!isMounted) {
        return;
      }

      const mediaQueriesList = window.matchMedia(mediaQuery);

      const listener = () => {
        if (isMounted()) {
          setMatches(mediaQueriesList.matches);
        }
      };

      mediaQueriesList.addListener(listener);

      setMatches(mediaQueriesList.matches);

      return () => {
        mediaQueriesList.removeListener(listener);
      };
    }, [mediaQuery, isMounted]);

    return matches;
  }
}

export default useMedia;
