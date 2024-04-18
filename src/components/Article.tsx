import { Card } from "@/components/Card.tsx";
import { type ArticleWithSlug } from "@/lib/articles.ts";
import { formatDate } from "@/lib/formatDate.ts";

export function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/artykuly/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Przeczytaj artykuł</Card.Cta>
    </Card>
  );
}
