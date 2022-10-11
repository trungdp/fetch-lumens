import React, { FunctionComponent, ReactNode, useMemo } from "react";

interface SnapListProps {
  className?: string;
  children?: ReactNode;
}

const SnapList: FunctionComponent<SnapListProps> = ({
  className,
  children,
}) => {
  const transformedChildren = useMemo(() => {
    if (children) {
      return React.Children.map(children, (child: any) =>
        React.cloneElement(child, {
          className: "w-2/3 snap-center shrink-0",
        })
      );
    }
    return [];
  }, [children]);

  return (
    <div
      className={`snap-x snap-mandatory relative flex gap-6 overflow-x-auto mb-12 ${className}`}
    >
      {transformedChildren}
    </div>
  );
};

export default SnapList;
