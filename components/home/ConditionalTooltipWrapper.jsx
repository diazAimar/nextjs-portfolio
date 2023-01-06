export default function ConditionalTooltipWrapper({ target, wrapper, children }) {
  if (target === 'GitHub' || target === 'LinkedIn') {
    return wrapper(children);
  }
  return children;
}
