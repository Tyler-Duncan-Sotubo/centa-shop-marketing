declare module "tiny-slider-react" {
  import { ComponentType, ReactNode } from "react";

  interface TinySliderProps {
    settings?: Record<string, unknown>;
    children?: ReactNode;
  }

  const TinySlider: ComponentType<TinySliderProps>;
  export default TinySlider;
}
