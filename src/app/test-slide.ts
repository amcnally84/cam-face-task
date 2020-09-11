export interface TestSlide {
  id: string;
  isInstructions: boolean;
  isQuestion: boolean;
  isDemo: boolean;
  isBreak: boolean;

  instructions?: Array<string>;

  videoSrc?: string;
  choices?: Array<string>;

  breakImageSrc?: string;
  breakText?: Array<string>;
}
