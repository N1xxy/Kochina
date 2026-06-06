"use client";

import { useEffect } from "react";

function openHashTarget() {
  const targetId = window.location.hash.slice(1);

  if (!targetId) {
    return;
  }

  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  let parent: HTMLElement | null = target;

  while (parent) {
    if (parent instanceof HTMLDetailsElement) {
      parent.open = true;
    }

    parent = parent.parentElement;
  }

  window.requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export function HashOpenDetails() {
  useEffect(() => {
    openHashTarget();
    window.addEventListener("hashchange", openHashTarget);

    return () => window.removeEventListener("hashchange", openHashTarget);
  }, []);

  return null;
}
