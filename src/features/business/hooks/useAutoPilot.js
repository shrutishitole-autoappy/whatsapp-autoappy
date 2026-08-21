import { useState, useRef, useCallback } from "react";

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useAutoPilot() {
  const [cursor, setCursor] = useState({
    x: -200,
    y: -200,
    visible: false,
    clicking: false,
    label: "",
  });

  const cancelRef = useRef(false);
  const runningRef = useRef(false);

  const moveTo = useCallback(async (el, label) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width * 0.42;
    const y = rect.top + rect.height * 0.5;
    setCursor((c) => ({ ...c, x, y, visible: true, clicking: false, label: label || "" }));
    await sleep(560);
    return true;
  }, []);

  const clickAt = useCallback(async (el) => {
    setCursor((c) => ({ ...c, clicking: true }));
    await sleep(160);
    setCursor((c) => ({ ...c, clicking: false }));
    if (el && typeof el.click === "function") el.click();
    await sleep(90);
  }, []);

  const run = useCallback(
    async (steps, { onDone, onCancelled, keepVisible = false } = {}) => {
      if (runningRef.current) return;
      cancelRef.current = false;
      runningRef.current = true;

      for (const step of steps) {
        if (cancelRef.current) break;
        const el = typeof step.el === "function" ? step.el() : step.el;
        if (el) {
          await moveTo(el, step.label);
          if (cancelRef.current) break;
          if (!step.noClick) {
            await clickAt(el);
          }
        }
        if (cancelRef.current) break;
        if (step.onArrive) await step.onArrive();
        if (cancelRef.current) break;
        await sleep(step.hold ?? 260);
      }

      runningRef.current = false;
      if (!keepVisible) {
        setCursor((c) => ({ ...c, visible: false, clicking: false }));
      }
      if (cancelRef.current) onCancelled?.();
      else onDone?.();
    },
    [moveTo, clickAt]
  );

  const cancel = useCallback(() => {
    cancelRef.current = true;
  }, []);

  return { cursor, run, cancel, isRunning: () => runningRef.current };
}
