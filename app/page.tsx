import summary from '../history/summary.json';

type ServiceStatus = 'up' | 'down' | 'degraded';

const statusLabel = (status: ServiceStatus) =>
  status === 'up' ? 'Operational' : 'Degraded';

export default function HomePage() {
  return (
    <main>
      <header>
        <h1>Uptime Status</h1>
        <p>
          The status dashboard is now powered by Next.js. Monitors below are loaded
          from the Upptime summary to provide a quick overview.
        </p>
      </header>

      <section>
        <strong>Monitors ({summary.length})</strong>
        <ul>
          {summary.map((service) => (
            <li key={service.slug}>
              <div>
                <span>{service.name}</span>
                <br />
                <small>{service.uptime} uptime (30 days)</small>
              </div>
              <div>
                <small>{statusLabel(service.status as ServiceStatus)}</small>
                <br />
                <a href={service.url} target="_blank" rel="noreferrer">
                  View
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
