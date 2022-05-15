import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useCallback, useState } from 'react';

function useSearch() {
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [search]
  );

  const onSearch = useCallback((e: MouseEvent) => {
    e.preventDefault();

    setSearch(name);
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
    name,
    onChange,
    onSearch,
    onKeyPress,
  };
}

export default useSearch;
