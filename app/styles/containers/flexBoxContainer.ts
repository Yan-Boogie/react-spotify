export const flexBoxContainerPrefix = 'container' as const;

type Classes = {
  readonly [key: string]: string;
};

export const flexBoxContainerClasses: Classes = {
  host: flexBoxContainerPrefix,
  withPadding: `${flexBoxContainerPrefix}__with_padding`,
};
