import cn from "classnames";

export const getNavlinkStyle = (isActive: boolean, defoult: string) =>
  cn(defoult, { 'is-active': isActive });
