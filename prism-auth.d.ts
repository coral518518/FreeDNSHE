export interface PrismUser {
  id?: string | number;
  email?: string;
  name?: string;
  sub?: string;
  [key: string]: unknown;
}

export interface PrismOptions {
  isPublic?: (url: URL, req: Request) => boolean;
}

export declare class PrismWorker {
  isPublic(url: URL, request: Request): boolean;
  fetch(request: Request, env: any, ctx: any): Promise<Response>;
  handleRequest(request: Request, env: any, ctx: any, user: PrismUser | null): Promise<Response>;
}

export declare function withPrismAuth(
  handler: (request: Request, env: any, ctx: any, user: PrismUser | null) => Promise<Response>,
  options?: PrismOptions
): (request: Request, env: any, ctx: any) => Promise<Response>;

export declare function registerServiceWorker(
  handleRequest: (fakeEvent: any, user: PrismUser | null) => Promise<Response>,
  options?: PrismOptions
): void;
