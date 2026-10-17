// Fires the OpenAI Ads "lead_created" conversion event.
// The pixel itself (window.oaiq) is loaded once in app/layout.jsx.
// Called when a paid-service form reaches its "Proceed to Pay" summary page.

export function trackLeadCreated() {
  if (typeof window === 'undefined' || typeof window.oaiq !== 'function') return
  try {
    window.oaiq('measure', 'lead_created', { type: 'customer_action' })
  } catch (err) {
    console.error('trackLeadCreated error:', err)
  }
}
