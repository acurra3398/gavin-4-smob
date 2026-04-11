"use client";

import { useEffect, useState } from "react";

const COUNTER_NS = "gavin4smob";
const COUNTER_KEY = "pledges";
const BASE = "https://abacus.jasoncameron.dev";
const GET_URL = `${BASE}/get/${COUNTER_NS}/${COUNTER_KEY}`;
const HIT_URL = `${BASE}/hit/${COUNTER_NS}/${COUNTER_KEY}`;
const CREATE_URL = `${BASE}/create/${COUNTER_NS}/${COUNTER_KEY}?initializer=0`;

type AbacusResponse = { value: number };

async function fetchCount(): Promise<number> {
  try {
    const res = await fetch(GET_URL, { cache: "no-store" });
    if (res.ok) {
      const data = (await res.json()) as AbacusResponse;
      if (typeof data.value === "number") return data.value;
    }
    // Counter doesn't exist yet — create it
    await fetch(CREATE_URL, { cache: "no-store" });
    return 0;
  } catch {
    return 0;
  }
}

export function PledgeButton() {
  const [count, setCount] = useState<number | null>(null);
  const [pledged, setPledged] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchCount().then((n) => {
      if (!cancelled) setCount(n);
    });

    if (typeof window !== "undefined" && localStorage.getItem("pledged") === "1") {
      setPledged(true);
    }
    return () => {
      cancelled = true;
    };
  }, []);

  const handlePledge = async () => {
    if (pledged) return;
    setPledged(true);
    setPulse(true);
    setTimeout(() => setPulse(false), 700);
    if (typeof window !== "undefined") localStorage.setItem("pledged", "1");
    // Optimistic bump so the UI is responsive even if the network is slow
    setCount((c) => (c ?? 0) + 1);
    try {
      const res = await fetch(HIT_URL, { cache: "no-store" });
      if (res.ok) {
        const data = (await res.json()) as AbacusResponse;
        if (typeof data.value === "number") setCount(data.value);
      }
    } catch {
      // optimistic value already applied
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={handlePledge}
        disabled={pledged}
        className={`relative bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold transition-all ${
          pledged
            ? "opacity-80 cursor-default"
            : "hover:bg-amber-300 hover:scale-105 cursor-pointer"
        } ${pulse ? "animate-ping-once" : ""}`}
      >
        {pledged ? "✓ Pledged!" : "Pledge to Vote"}
      </button>
      <div className="text-amber-200 text-sm font-medium tabular-nums">
        {count === null ? (
          <span className="opacity-60">Loading count…</span>
        ) : (
          <span>
            <span className="font-bold text-amber-300 text-base">
              {count.toLocaleString()}
            </span>{" "}
            {count === 1 ? "pledge" : "pledges"} so far
          </span>
        )}
      </div>
    </div>
  );
}
