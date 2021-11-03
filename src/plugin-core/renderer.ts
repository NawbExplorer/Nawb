import { createElement, ReactNode } from 'react';
import { is } from '../common/utils';
import { componentMapper } from './components/mapper';
import { NawbComponentChildren, NawbRenderer } from './type';

const handleChildren = function (children: NawbComponentChildren): ReactNode {
  if (Array.isArray(children)) {
    return children.map(ele => renderNawbToReact(ele));
  } else {
    if (is.string(children)) {
      return children;
    } else if (children?.tagName) {
      return renderNawbToReact(children);
    } else {
      return null;
    }
  }
};

export const renderNawbToReact: NawbRenderer = function (tree, extraProps) {
  if (!tree?.tagName) {
    return;
  }

  return createElement(
    componentMapper[tree.tagName],
    { key: tree.props.elementId, ...extraProps, ...tree.props },
    handleChildren(tree.children),
  );
};
