// Paytm checkout from the browser. Asks the backend for a signed paramList,
// then builds an auto-submitting <form> POSTing to Paytm's transaction URL.
// Paytm handles the rest (UPI / cards / netbanking) and posts the result back
// to our /api/PG/paytm/callback, which redirects the user to
// /requestsuccess/<service> on success or /failure/<service> on failure.

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.makemydocuments.com'

export async function paytmCheckout({ orderId, amount, service, mobile, name }) {
  try {
    const res = await fetch(`${API_BASE}/api/PG/paytm/initiate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ORDER_ID: orderId,
        CUST_ID: mobile || name || orderId,
        TXN_AMOUNT: String(amount),
        SERVICE: service,
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || data.status !== 'success' || !data.paramList || !data.txnUrl) {
      return { ok: false, error: data.message || 'Could not start payment.' }
    }

    const form = document.createElement('form')
    form.method = 'POST'
    form.action = data.txnUrl
    form.style.display = 'none'
    Object.entries(data.paramList).forEach(([k, v]) => {
      const inp = document.createElement('input')
      inp.type = 'hidden'
      inp.name = k
      inp.value = String(v)
      form.appendChild(inp)
    })
    document.body.appendChild(form)
    form.submit()
    return { ok: true }
  } catch (err) {
    console.error('paytmCheckout error:', err)
    return { ok: false, error: 'Network error. Please try again.' }
  }
}
