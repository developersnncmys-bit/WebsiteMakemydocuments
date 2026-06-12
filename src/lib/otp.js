// Thin wrapper around the backend's MSG91 OTP proxy. The website never knows
// the auth key — it just hits /api/otp/send and /api/otp/verify. Returns are
// shaped { ok, error } so the calling form can do `if (!r.ok) setError(...)`.

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || 'https://mmdbackend.onrender.com'

export async function sendOtp(mobile) {
  try {
    const res = await fetch(`${API_BASE}/api/otp/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data.success) {
      return { ok: false, error: data.message || 'Could not send OTP. Please try again.' }
    }
    return { ok: true, requestId: data.requestId }
  } catch (err) {
    console.warn('sendOtp:', err)
    return { ok: false, error: 'Network error — could not send OTP.' }
  }
}

export async function verifyOtpApi(mobile, otp) {
  try {
    const res = await fetch(`${API_BASE}/api/otp/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile, otp }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data.success) {
      return { ok: false, error: data.message || 'Invalid OTP. Please try again.' }
    }
    return { ok: true }
  } catch (err) {
    console.warn('verifyOtpApi:', err)
    return { ok: false, error: 'Network error — could not verify OTP.' }
  }
}
