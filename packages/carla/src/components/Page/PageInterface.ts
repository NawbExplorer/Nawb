export interface PageComponent<P> {
  (props: P): PageEntity;
}

export interface PageProps {
  entry?: boolean;
  title?: string;
  page: (params?: Record<string, any>) => Record<string, any>;
}

export interface PageEntity extends PageProps {
  pageName: string;
}
