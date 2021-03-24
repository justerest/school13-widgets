export const Prop = (): PropertyDecorator => (target: any, key) => ({
  get: () => JSON.parse(target.getAttribute(key) ?? ''),
  set: (value: any) => target.setAttribute(key, JSON.stringify(value)),
});
