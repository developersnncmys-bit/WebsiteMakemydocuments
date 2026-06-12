'use client'

import Link from 'next/link'
import { AlertCircle, ArrowLeft, RotateCcw } from 'lucide-react'
import { getService } from '../data/serviceSuccess'

export default function RequestFailure({ slug }) {
  const svc = getService(slug)

  return (
    <div className="rf-page">
      <style jsx>{`
        .rf-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #FEF2F2 0%, #FFFFFF 60%);
          padding: 80px 16px 60px;
          display: flex;
          justify-content: center;
        }
        .rf-card {
          width: 100%;
          max-width: 560px;
          background: #fff;
          border-radius: 24px;
          box-shadow:
            0 1px 2px rgba(15,23,42,0.04),
            0 10px 40px rgba(15,23,42,0.08);
          overflow: hidden;
          border: 1px solid rgba(220,38,38,0.10);
        }
        .rf-hero {
          padding: 40px 32px 24px;
          text-align: center;
          position: relative;
        }
        .rf-icon-wrap {
          width: 88px; height: 88px;
          margin: 0 auto 22px;
          border-radius: 24px;
          background: linear-gradient(135deg,#FEE2E2,#FECACA);
          display: flex; align-items: center; justify-content: center;
          color: #DC2626;
        }
        .rf-title {
          font-size: 24px; font-weight: 700; color: #0F172A;
          margin: 0 0 10px;
          line-height: 1.3;
        }
        .rf-sub {
          font-size: 15px; line-height: 1.6;
          color: #475569;
          margin: 0;
        }
        .rf-body { padding: 8px 32px 32px; }
        .rf-info {
          background: #FFF7ED;
          border: 1px solid #FED7AA;
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 13px; color: #9A3412;
          line-height: 1.55;
          margin: 18px 0 22px;
        }
        .rf-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .rf-btn-primary {
          display: flex; align-items: center; justify-content: center;
          gap: 10px;
          width: 100%;
          max-width: 260px;
          padding: 14px 20px;
          background: linear-gradient(135deg,#DC2626,#B91C1C);
          color: #fff;
          font-weight: 600; font-size: 15px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 6px 16px rgba(220,38,38,0.30);
        }
        .rf-btn-primary:hover { transform: translateY(-1px); }
        .rf-btn-secondary {
          display: flex; align-items: center; justify-content: center;
          gap: 8px;
          width: 100%;
          max-width: 260px;
          padding: 12px 20px;
          background: #fff;
          color: #334155;
          font-weight: 600; font-size: 14px;
          border-radius: 12px;
          text-decoration: none;
          border: 1px solid #E2E8F0;
        }
        .rf-btn-secondary:hover { border-color: #CBD5E1; background: #F8FAFC; }
        @media (max-width: 480px) {
          .rf-page { padding: 32px 12px; }
          .rf-hero { padding: 32px 22px 20px; }
          .rf-body { padding: 8px 22px 24px; }
          .rf-title { font-size: 20px; }
        }
      `}</style>

      <div className="rf-card">
        <div className="rf-hero">
          <div className="rf-icon-wrap">
            <AlertCircle size={44} strokeWidth={1.8} />
          </div>
          <h1 className="rf-title">Payment was not completed</h1>
          <p className="rf-sub">
            Don&apos;t worry — your {svc.label.toLowerCase()} request is saved.
            You can try paying again or our team will reach out shortly to help.
          </p>
        </div>

        <div className="rf-body">
          <div className="rf-info">
            <strong>What this means:</strong> Either you cancelled the payment, your
            bank declined, or there was a network issue. No money has been deducted.
          </div>

          <div className="rf-actions">
            <Link href={svc.home || '/'} className="rf-btn-primary">
              <RotateCcw size={18} strokeWidth={2.2} />
              Try Again
            </Link>
            <Link href="/" className="rf-btn-secondary">
              <ArrowLeft size={14} strokeWidth={2.2} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
