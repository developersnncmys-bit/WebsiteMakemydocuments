// Posts a website form submission to the MMD backend as a lead.
// Called from each service form right after the (simulated) payment succeeds,
// so the admin panel receives a payment-confirmed lead.
//
// The backend stores a flat set of common fields plus a free-form `formData`
// object for the service-specific fields. Keys inside `formData` must match the
// admin panel's lib/formSchemas.ts so each lead renders with the right labels.

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || 'https://mmdbackend.onrender.com'

export async function submitLead(payload) {
  try {
    const res = await fetch(`${API_BASE}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data.success) {
      console.error('submitLead failed:', data.message || res.status)
      return { success: false }
    }
    return data
  } catch (err) {
    console.error('submitLead error:', err)
    return { success: false }
  }
}
