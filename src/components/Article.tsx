import { Card } from "@/components/Card.tsx";
import { type ArticleWithSlug } from "@/lib/articles";
import { formatDate } from "@/lib/formatDate.ts";

interface ArticleProps {
  article: ArticleWithSlug;
}

export function Article({ article }: ArticleProps) {
  const { title, slug, date, description } = article;
  const articleUrl = `/artykuly/${slug}`;

  return (
    <Card as="article">
      <Card.Title href={articleUrl}>{title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={date} decorate>
        {formatDate(date)}
      </Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>Przeczytaj artykuł</Card.Cta>
    </Card>
  );
}
