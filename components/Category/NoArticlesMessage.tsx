import Link from "next/link";

const NoArticlesMessage: React.FC<{ category?: string }> = ({ category }) => {
  return (
    <div className="no-articles text-center my-10">
      <h2 className="text-lg font-bold mb-4">Nenhum artigo disponível!</h2>
      <p className="mb-6">
        Desculpe, não encontramos artigos na categoria
        {category ? ` "${category}"` : ""} no momento.
        Que tal explorar outras categorias ou voltar para a página inicial?
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/" className="btn btn-primary">
          Página Inicial
        </Link>
      </div>
    </div>
  );
};


export default NoArticlesMessage