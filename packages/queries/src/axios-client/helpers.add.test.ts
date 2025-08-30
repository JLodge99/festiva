import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import {
  setBaseUrl,
  getBaseUrl,
  setAxiosFactory,
  getAxios,
  setClientFactory,
  getClientFactory,
  createClient,
  addResultTypeFactory,
  getResultTypeFactory,
  addMetaToOptions,
} from './helpers';

describe('axios-client helpers additional tests', () => {
  let originalBase: string;
  let originalClientFactory: ReturnType<typeof getClientFactory>;
  let originalAxios: any;

  beforeEach(() => {
    originalBase = getBaseUrl();
    originalClientFactory = getClientFactory();
    originalAxios = getAxios();
  });

  afterEach(() => {
    setBaseUrl(originalBase);
    // restore client factory
    setClientFactory(originalClientFactory);
    // restore axios factory to return the original axios instance
    setAxiosFactory(() => originalAxios);
  });

  test('set/get base url', () => {
    setBaseUrl('https://example.test');
    expect(getBaseUrl()).toBe('https://example.test');
  });

  test('set/get axios factory', () => {
    // set a custom axios factory and ensure getAxios returns its value
    const fakeAxios = { my: 'axios' } as any;
    setAxiosFactory(() => fakeAxios);
    expect(getAxios()).toBe(fakeAxios);
  });

  test('set/get client factory and createClient', () => {
    // create a custom factory that returns a sentinel object
    type Sentinel = { sentinel: true };
    setClientFactory(<T>(type: new (...args: any[]) => T) => {
      // ignore the type and return a sentinel
      return { sentinel: true } as unknown as T;
    });

    const client = createClient((class Dummy {}));
    // @ts-expect-error sentinel property
    expect((client as unknown as Sentinel).sentinel).toBe(true);

    // ensure getClientFactory returns the factory we set
    const factory = getClientFactory();
    const created = factory((class Dummy {}));
    // @ts-expect-error
    expect((created as unknown as Sentinel).sentinel).toBe(true);
  });

  test('add/get result type factory', () => {
    addResultTypeFactory('testType', (data: any) => ({ wrapped: data }));
    const factory = getResultTypeFactory('testType');
    expect(factory).toBeDefined();
    expect(factory?.(5)).toEqual({ wrapped: 5 });
  });

  test('addMetaToOptions merges meta correctly', () => {
    const metaContext = { metaFn: () => ({ a: 1, shared: 'fromMeta' }) } as any;

    const options = addMetaToOptions(undefined, metaContext);
    expect(options).toBeDefined();
    expect(options!.meta).toEqual({ a: 1, shared: 'fromMeta' });

    const options2 = addMetaToOptions({ meta: { b: 2, shared: 'fromOptions' } }, metaContext);
    expect(options2!.meta).toEqual({ a: 1, shared: 'fromOptions', b: 2 });
  });
});
