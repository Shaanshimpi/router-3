import { Link } from 'react-router-dom'

const COLLECTIONS = [
  {
    slug: 'students',
    title: 'Students',
    blurb: 'Manage learner records for CRUD practice lessons.',
    accent: 'students',
  },
  {
    slug: 'cars',
    title: 'Cars',
    blurb: 'Vehicle inventory with enum fields and number validation.',
    accent: 'cars',
  },
  {
    slug: 'books',
    title: 'Books',
    blurb: 'Library catalog showcasing pagination and filters.',
    accent: 'books',
  },
  {
    slug: 'orders',
    title: 'Orders',
    blurb: 'Order management with status enums and date filtering.',
    accent: 'orders',
  },
  {
    slug: 'tasks',
    title: 'Tasks',
    blurb: 'Task management featuring partial updates and toggles.',
    accent: 'tasks',
  },
  {
    slug: 'products',
    title: 'Products',
    blurb: 'Product catalog for validation practice and comparisons.',
    accent: 'products',
  },
  {
    slug: 'feedback',
    title: 'Feedback',
    blurb: 'Feedback system demonstrating ratings and resolution.',
    accent: 'feedback',
  },
  {
    slug: 'blog-posts',
    title: 'Blog Posts',
    blurb: 'Editorial content highlighting slugs and search.',
    accent: 'blogs',
  },
]

function CollectionsHome() {
  return (
    <main className="collections-home">
      <header>
        <p className="eyebrow">CodeHub API Playground</p>
        <h1>Collection Explorer</h1>
        <p>
          Pick any CodeHub demo collection to explore beautifully-designed
          cards, detail pages, and data pulled live from the API.
        </p>
      </header>

      <section className="collections-home__grid">
        {COLLECTIONS.map((collection) => (
          <Link
            key={collection.slug}
            to={`/${collection.slug}`}
            className={`collections-home__card accent-${collection.accent}`}
          >
            <h2>{collection.title}</h2>
            <p>{collection.blurb}</p>
            <span>Open {collection.title} →</span>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default CollectionsHome



