import { createElement, ReactNode } from 'react';
import { is } from '../utils';
import { MiaoMiRenderer, MiaoTreeChildren } from './core-type';
import { componentMapper } from './component-mapper';
// import * as componentMapper from '../components';

const handleChildren = function (children: MiaoTreeChildren): ReactNode {
  if (Array.isArray(children)) {
    return children.map((ele) => renderCarlaToReact(ele));
  } else {
    if (is.string(children)) {
      return children;
    } else if (children?.tagName) {
      return renderCarlaToReact(children);
    } else {
      return null;
    }
  }
};

export const renderCarlaToReact: MiaoMiRenderer = function (tree, extraProps) {
  if (!tree?.tagName) {
    return;
  }

  return createElement(
    componentMapper[tree.tagName],
    { key: tree.props.elementId, ...extraProps, ...tree.props },
    handleChildren(tree.children),
  );
};
