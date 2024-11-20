import type { Schema } from "@/amplify/data/resource";
import useArticles from "@/hooks/store/useArticles";
import { ArticleStatus } from "@/types/schema";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

export default function App() {
  const { articles } = useArticles()

  function createTodo() {
    client.models.article.create({
      title: 'New todo',
      slug: 'new-todo',
      excerpt: 'New todo',
      authorId: '1',
      status: ArticleStatus.DRAFT,
      tags: ['tag1', 'tag2'],
    });
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {articles.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/gen2/start/quickstart/nextjs-pages-router/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
