import { createElement, ReactNode } from 'react';
import { is } from '../common/utils';
import { componentMapper } from './components/mapper';
import { CarlaComponentChildren, CarlaRenderer } from './type';

const handleChildren = function (children: CarlaComponentChildren): ReactNode {
  if (Array.isArray(children)) {
    return children.map(ele => renderCarlaToReact(ele));
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

export const renderCarlaToReact: CarlaRenderer = function (tree, extraProps) {
  if (!tree?.tagName) {
    return;
  }

  return createElement(
    componentMapper[tree.tagName],
    { key: tree.props.elementId, ...extraProps, ...tree.props },
    handleChildren(tree.children),
  );
};
