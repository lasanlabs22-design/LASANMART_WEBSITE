/** The Lasan Labs credit, styled as in Lasan People and Lasan Grow */
export default function PoweredBy({ className = "" }: { className?: string }) {
  return (
    // Baseline, not centre: the two words use different fonts, so
    // centring their boxes leaves "Lasan Labs" sitting higher
    <p className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <span>Powered by</span>
      <span className="lasan-signature font-semibold">Lasan Labs</span>
    </p>
  );
}
