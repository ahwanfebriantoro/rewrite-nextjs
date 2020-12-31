import styles from '../styles.module.css';
import Link from 'next/link';

const Code = (p) => <code className={styles.inlineCode} {...p} />;

const Index = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h1>Rewrites with Next.js</h1>
      <hr className={styles.hr} />
      <p>
        The links below are{' '}
        <a href="https://nextjs.org/docs/api-reference/next.config.js/rewrites">
          custom <Code>rewrites</Code>
        </a>{' '}
        that map an incoming request path to a different destination path.
      </p>
      <nav>
        <ul className={styles.list}>
          <li>
            <a href="/terms-and-conditions">Visit External term and conditions</a>
          </li>
          <li>
            <a href="/blog/2">Visit External blog</a>
          </li>
          <li>
            <a href="/event">Visit External event</a>
          </li>
        </ul>
      </nav>
      <p>
        Open <Code>next.config.js</Code> to learn more about the rewrites that
        match the links above.
      </p>
      <hr className={styles.hr} />
    </div>
  </div>
);

export default Index;
