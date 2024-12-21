import Highlight from '@/components/Search/Highlight';

type Props = {
  hit: any;
};

export default function Hit({ hit }: Props) {
  return (
    <div style={{ alignItems: 'center', gap: '0.1rem', width: '100%', fontSize: '0.8rem' }}>
      <div style={{ fontSize: '1.2rem' }}>
        <Highlight hit={hit} attribute="title" />
      </div>
      <div style={{ fontSize: '0.8rem' }}>
        <Highlight hit={hit} attribute="excerpt" />
      </div>
    </div>
  );
}
