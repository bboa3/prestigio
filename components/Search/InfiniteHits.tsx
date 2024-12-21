import { Hit as AlgoliaHit } from 'instantsearch.js';
import { useInfiniteHits, UseInfiniteHitsProps } from 'react-instantsearch-hooks-web';

type InfiniteHitsProps<THit> = UseInfiniteHitsProps & {
  hitComponent: (props: { hit: THit }) => JSX.Element;
};

export default function InfiniteHits<THit extends AlgoliaHit<Record<string, unknown>>>({
  hitComponent: Hit,
  ...props
}: InfiniteHitsProps<THit>) {
  const { hits, isLastPage, showMore } = useInfiniteHits(props);

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {hits.map((hit) => (
        <li key={hit.objectID} style={{ padding: '0.6rem', borderRadius: '0.25rem', background: '#f8f9fa', marginBottom: '0.5rem' }}>
          <Hit hit={hit as any} />
        </li>
      ))}

      {!isLastPage && (
        <button
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={showMore}
        >
          Carregar mais
        </button>
      )}
    </ul>
  );
}