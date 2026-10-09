"use client";

/** A calm, CSS-rendered mesh inspired by the supplied shader prompt. It is
 * intentionally static so it never competes with scrolling or text legibility. */
export function StaticMeshGradient() {
  return <div className="mesh-gradient-background" aria-hidden="true"><div className="mesh-gradient-grain" /></div>;
}
