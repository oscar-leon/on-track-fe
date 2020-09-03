import useQuery from './useQuery';

function usePageQuery() {
  const query = useQuery();
  const pageQuery = query.has('page') ? query.get('page') : 1;

  return Number(pageQuery);
}

export default usePageQuery;
