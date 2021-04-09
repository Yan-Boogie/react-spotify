export const flexBoxContainerPrefix = 'container' as const;

type Classes = {
  readonly [key: string]: string;
};

export const flexBoxContainerClasses: Classes = {
  host: flexBoxContainerPrefix,
  withPadding: `${flexBoxContainerPrefix}__with-padding`,
  columnDirection: `${flexBoxContainerPrefix}__column-direction`,
  full: `${flexBoxContainerPrefix}__full`,
};
