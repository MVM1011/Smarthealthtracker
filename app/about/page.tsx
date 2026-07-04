import styles from './about.module.css'

export default function AboutPage() {
  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>About Smart Health Tracker</h1>
      <p className={styles.lead}>
        Smart Health Tracker is built to give you one place to understand your habits and move toward
        your fitness goals with clarity. Instead of juggling spreadsheets or separate apps, you get
        structured tracking, visual reports, and guidance tied to the targets you set when you join.
      </p>

      <h2 className={styles.sectionTitle}>What you gain</h2>
      <ul className={styles.list}>
        <li>
          <strong>Holistic view</strong> — calories, sleep, steps, water, workouts, and weight in a
          single dashboard so you see how choices fit together.
        </li>
        <li>
          <strong>Goal-aware insights</strong> — charts compare your day and trends to personalized
          goals (including BMI-based weight targets) so you know where you stand.
        </li>
        <li>
          <strong>Structured workout library</strong> — browse exercises by muscle group with clear
          visuals so planning sessions is faster and more consistent.
        </li>
        <li>
          <strong>Accountability that fits you</strong> — log entries by date, review reports over
          7 days, a month, or a year, and adjust without losing history.
        </li>
        <li>
          <strong>Privacy-focused access</strong> — sign in securely, verify your email, and keep
          your health data tied to your account.
        </li>
      </ul>

      <h2 className={styles.sectionTitle}>Why use it</h2>
      <ul className={styles.list}>
        <li>Save time by logging once and seeing progress everywhere it matters.</li>
        <li>Reduce guesswork with goals and reports that turn numbers into next steps.</li>
        <li>Stay motivated with a modern interface and dark or light theme for comfortable daily use.</li>
      </ul>

      <p className={styles.outro}>
        Whether you are focused on losing weight, building strength, or simply staying consistent,
        Smart Health Tracker is designed to make tracking simple so you can spend more energy on
        training, recovery, and real life.
      </p>
    </main>
  )
}
