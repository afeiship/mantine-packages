import { useEffect, useState } from 'react';

const useRule = (names?: string[] | string, deps?: any[]) => {
  const root = typeof window === 'undefined' ? globalThis : window;
  const [rules, setRules] = useState<any>([]);
  useEffect(() => {
    setRules(root['nx'].rules(names));
  }, deps);
  return rules;
};

export default useRule;
