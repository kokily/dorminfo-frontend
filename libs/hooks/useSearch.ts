import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useCallback, useState } from 'react';

function useSearch() {
  const [search, setSearch] = useState('');

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [search]
  );

  const onSearch = useCallback((e: MouseEvent) => {
    e.preventDefault();
    // Todo...
    console.log('검색!! ', search);
  }, []);

  const onKeyPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
      if (e.key === 'Enter') {
        onSearch(e);
      }
    },
    []
  );

  return {
    search,
    onChange,
    onSearch,
    onKeyPress,
  };
}

export default useSearch;
