/**
 * 极简事件总线：on / off / emit
 */
export function createEventBus() {
  const listeners = new Map();

  return {
    on(event, handler) {
      if (!listeners.has(event)) listeners.set(event, new Set());
      listeners.get(event).add(handler);
      return () => listeners.get(event)?.delete(handler);
    },

    off(event, handler) {
      listeners.get(event)?.delete(handler);
    },

    emit(event, payload) {
      const set = listeners.get(event);
      if (!set) return;
      set.forEach((handler) => {
        handler(payload);
      });
    },
  };
}
